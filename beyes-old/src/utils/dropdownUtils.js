/**
 * Dropdown utility functions for managing hover states with timeout
 */

/**
 * Creates a dropdown manager with timeout functionality
 * @returns {object} - Object containing dropdown management functions
 */
export const createDropdownManager = () => {
  let timeoutId = null;

  /**
   * Handles mouse enter event for dropdown
   * @param {function} setActiveDropdown - State setter for active dropdown
   * @param {number} index - Index of the dropdown item
   */
  const handleMouseEnter = (setActiveDropdown, index) => {
    // Cancel any pending timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    setActiveDropdown(index);
  };

  /**
   * Handles mouse leave event for dropdown with delay
   * @param {function} setActiveDropdown - State setter for active dropdown
   * @param {number} delay - Delay in milliseconds before hiding dropdown (default: 300)
   */
  const handleMouseLeave = (setActiveDropdown, delay = 300) => {
    // Cancel previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    // Start new timeout
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
      timeoutId = null;
    }, delay);
  };

  /**
   * Cleans up any pending timeouts (use in useEffect cleanup)
   */
  const cleanup = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  /**
   * Gets current timeout ID for external management
   */
  const getTimeoutId = () => timeoutId;

  return {
    handleMouseEnter,
    handleMouseLeave,
    cleanup,
    getTimeoutId
  };
};
