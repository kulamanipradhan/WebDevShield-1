import { useState, useEffect } from "react";

export function useTyping(texts: string[], typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === current.length) {
        speed = pauseTime;
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typeSpeed, deleteSpeed, pauseTime]);

  return currentText;
}
