/**
 * Navigation utility functions for handling smooth scrolling and URL navigation
 */

/**
 * Handles smooth scrolling to an element with given ID
 * @param {string} elementId - The ID of the element to scroll to
 */
export const smoothScrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Parses href and determines if it contains a hash
 * @param {string} href - The href to parse
 * @returns {object} - Object containing path and hash
 */
export const parseHref = (href) => {
  if (href.includes('#')) {
    const [path, hash] = href.split('#');
    return { path, hash, hasHash: true };
  }
  return { path: href, hash: null, hasHash: false };
};

/**
 * Handles smooth scroll navigation with route changes
 * @param {string} href - The href to navigate to
 * @param {object} location - Current location object from useLocation
 * @param {function} navigate - Navigate function from useNavigate
 * @param {Event} e - Event object (optional)
 */
export const handleSmoothNavigation = (href, location, navigate, e) => {
  if (e) {
    e.preventDefault();
  }
  
  const { path, hash, hasHash } = parseHref(href);
  
  if (hasHash) {
    if (path === '/about' && location.pathname === '/about') {
      smoothScrollToElement(hash);
    } else {
      // Navigate to different page, then scroll
      navigate(href);
    }
  } else {
    navigate(href);
  }
};

/**
 * Handles hash-based scrolling on page load
 * @param {object} location - Location object with hash
 * @param {number} delay - Delay in milliseconds before scrolling (default: 100)
 */
export const handleHashScroll = (location, delay = 100) => {
  if (location.hash) {
    setTimeout(() => {
      const elementId = location.hash.slice(1);
      smoothScrollToElement(elementId);
    }, delay);
  }
};
