import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number; // Typing speed in milliseconds
  delay?: number; // Initial delay before starting
  showCursor?: boolean; // Show blinking cursor
  cursorChar?: string; // Cursor character
  hideCursorOnComplete?: boolean; // Hide cursor after typing completes
  cursorHideDelay?: number; // Delay before hiding the cursor when typing completes
  onComplete?: () => void; // Callback when typing completes
}

/**
 * Custom hook for creating a typewriter typing effect
 * 
 * @param options - Configuration options for the typewriter effect
 * @returns Object containing the displayed text and cursor state
 * 
 * @example
 * const { displayText, cursor } = useTypewriter({
 *   text: "Ankit Sharma",
 *   speed: 100,
 *   delay: 500,
 *   showCursor: true,
 *   hideCursorOnComplete: true
 * });
 */
export const useTypewriter = ({
  text,
  speed = 100,
  delay = 0,
  showCursor = true,
  cursorChar = '|',
  hideCursorOnComplete = true,
  cursorHideDelay = 400,
  onComplete,
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(showCursor);

  // Handle initial delay
  useEffect(() => {
    if (!hasStarted && delay > 0) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else if (!hasStarted && delay === 0) {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

  // Sync cursor visibility with external showCursor toggle
  useEffect(() => {
    setIsCursorVisible(showCursor);
  }, [showCursor]);

  // Handle typing effect
  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, hasStarted, isComplete, onComplete]);

  // Hide cursor after typing complete if configured
  useEffect(() => {
    if (!hideCursorOnComplete) return;
    if (!isComplete) return;

    const hideTimer = setTimeout(() => {
      setIsCursorVisible(false);
    }, cursorHideDelay);

    return () => clearTimeout(hideTimer);
  }, [hideCursorOnComplete, cursorHideDelay, isComplete]);

  return {
    displayText,
    isTyping: currentIndex < text.length,
    isComplete,
    cursor: isCursorVisible ? cursorChar : '',
  };
};

