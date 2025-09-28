import { NextRequest, NextResponse } from 'next/server';
import { readFile, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get('file');
    if (!file) {
      return NextResponse.json({ error: 'Missing file parameter' }, { status: 400 });
    }

    // Only allow jpg/jpeg/png/webp to avoid serving arbitrary files
    const safe = /^[A-Za-z0-9_.-]+\.(jpg|jpeg|png|webp)$/i;
    if (!safe.test(file)) {
      return NextResponse.json({ error: 'Unsupported filename' }, { status: 400 });
    }

    const filePath = join(process.cwd(), 'data', 'image', file);
    // Debug logging to help diagnose path issues during development
    if (process.env.NODE_ENV !== 'production') {
      console.log('[api/avatar] Resolving file:', file);
      console.log('[api/avatar] Full path:', filePath);
      console.log('[api/avatar] Exists:', existsSync(filePath));
    }

    const fileStat = await stat(filePath);
    const etag = `"${fileStat.size}-${fileStat.mtimeMs}"`;

    // Handle conditional requests for efficiency
    const ifNoneMatch = request.headers.get('if-none-match');
    const cacheControl = process.env.NODE_ENV === 'production'
      ? 'public, max-age=31536000, immutable'
      : 'no-store';

    if (ifNoneMatch && ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          'ETag': etag,
          'Cache-Control': cacheControl,
          'Last-Modified': new Date(fileStat.mtimeMs).toUTCString(),
        },
      });
    }

    const buf = await readFile(filePath);

    // Infer content type from extension
    const ext = file.split('.').pop()!.toLowerCase();
    const contentType =
      ext === 'png' ? 'image/png' :
      ext === 'webp' ? 'image/webp' :
      'image/jpeg';

    const body = new Uint8Array(buf);
    return new Response(body, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': cacheControl,
        'ETag': etag,
        'Last-Modified': new Date(fileStat.mtimeMs).toUTCString(),
      },
    });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[api/avatar] Error serving avatar:', err);
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
