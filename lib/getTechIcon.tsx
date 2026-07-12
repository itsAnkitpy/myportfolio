import { FiCode, FiServer, FiDatabase } from 'react-icons/fi';

// Helper function to get tech icon
export const getTechIcon = (tag: string) => {
  const tagLower = tag.toLowerCase();
  if (tagLower.includes('react') || tagLower.includes('vue') || tagLower.includes('next')) {
    return <FiCode />;
  }
  if (
    tagLower.includes('node') ||
    tagLower.includes('django') ||
    tagLower.includes('laravel') ||
    tagLower.includes('express')
  ) {
    return <FiServer />;
  }
  if (tagLower.includes('mongo') || tagLower.includes('sql') || tagLower.includes('postgres')) {
    return <FiDatabase />;
  }
  return <FiCode />;
};
