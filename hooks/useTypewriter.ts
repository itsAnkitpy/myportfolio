import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number; // Typing speed in milliseconds
  delay?: number; // Initial delay before starting
  showCursor?: boolean; // Show blinking cursor
  cursorChar?: string; // Cursor character
  onComplete?: () => void; // Callback when typing completes
}

/**
 * Custom hook for creating a typewriter typing effect
 * 
 * @param options - Configuration options for the typewriter effect
 * @returns Object containing the displayed text and cursor state
 * 
 * @example
 * const { displayText, showCursor } = useTypewriter({
 *   text: "Ankit Sharma",
 *   speed: 100,
 *   delay: 500,
 *   showCursor: true
 * });
 */
export const useTypewriter = ({
  text,
  speed = 100,
  delay = 0,
  showCursor = true,
  cursorChar = '|',
  onComplete,
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

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

  return {
    displayText,
    isTyping: currentIndex < text.length,
    isComplete,
    showCursor: showCursor ? cursorChar : '',
  };
};

