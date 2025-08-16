/**
 * Mobile menu utility functions for managing mobile navigation state
 */

/**
 * Creates mobile menu state management utilities
 * @returns {object} - Object containing mobile menu management functions
 */
export const createMobileMenuManager = () => {
  /**
   * Toggles mobile menu and resets dropdowns if closing
   * @param {boolean} isMobileMenuOpen - Current mobile menu state
   * @param {function} setIsMobileMenuOpen - State setter for mobile menu
   * @param {function} setMobileDropdowns - State setter for mobile dropdowns
   */
  const toggleMobileMenu = (isMobileMenuOpen, setIsMobileMenuOpen, setMobileDropdowns) => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileDropdowns({});
    }
  };

  /**
   * Toggles specific mobile dropdown
   * @param {number} index - Index of the dropdown to toggle
   * @param {function} setMobileDropdowns - State setter for mobile dropdowns
   */
  const toggleMobileDropdown = (index, setMobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  /**
   * Closes mobile menu and resets all dropdowns
   * @param {function} setIsMobileMenuOpen - State setter for mobile menu
   * @param {function} setMobileDropdowns - State setter for mobile dropdowns
   */
  const closeMobileMenu = (setIsMobileMenuOpen, setMobileDropdowns) => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns({});
  };

  return {
    toggleMobileMenu,
    toggleMobileDropdown,
    closeMobileMenu
  };
};
