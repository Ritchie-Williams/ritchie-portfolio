import { useEffect, useState } from "react";

const words = ["Cloud Solutions", "Infrastructure", "Automation"];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex];

  useEffect(() => {
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
        return;
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((previousIndex) => (previousIndex + 1) % words.length);
        return;
      }

      setDisplayText((previousText) =>
        isDeleting
          ? currentWord.substring(0, previousText.length - 1)
          : currentWord.substring(0, previousText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  return (
    <span className="text-blue-400">
      {displayText}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
}

export default TypingText;