import { PortfolioData, PersonalInfo } from '@/types/portfolio';
import portfolioData from '@/data/portfolio.json';

/**
 * Get all portfolio data
 * @returns Complete portfolio data object
 */
export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};

/**
 * Get personal information
 * @returns Personal info object
 */
export const getPersonalInfo = (): PersonalInfo => {
  return portfolioData.personal as PersonalInfo;
};

/**
 * Get work experience
 * @returns Array of experience objects
 */
export const getExperience = () => {
  return portfolioData.experience;
};

/**
 * Get skills by category
 * @returns Array of skill categories
 */
export const getSkills = () => {
  return portfolioData.skills;
};

/**
 * Get projects
 * @param featuredOnly - If true, returns only featured projects
 * @returns Array of project objects
 */
export const getProjects = (featuredOnly: boolean = false) => {
  if (featuredOnly) {
    return portfolioData.projects.filter(project => project.featured);
  }
  return portfolioData.projects;
};

/**
 * Get certifications
 * @returns Array of certification objects
 */
export const getCertifications = () => {
  return portfolioData.certifications;
};

/**
 * Get achievements
 * @param type - Filter by achievement type
 * @returns Array of achievement objects
 */
export const getAchievements = (type?: string) => {
  if (type) {
    return portfolioData.achievements.filter(achievement => achievement.type === type);
  }
  return portfolioData.achievements;
};

/**
 * Get social links
 * @returns Social links object
 */
export const getSocialLinks = () => {
  return portfolioData.social;
};