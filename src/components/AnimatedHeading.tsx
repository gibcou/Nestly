import { useEffect, useState, type CSSProperties } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  initialDelay?: number;
  charDelay?: number;
  charDuration?: number;
}

export default function AnimatedHeading({
  text,
  className = '',
  style = {},
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <span className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: 'block' }}>
          {line.split('').map((char, charIndex) => {
            const delay =
              lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                key={charIndex}
                style={{
                  display: 'inline-block',
                  opacity: started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity ${charDuration}ms ease, transform ${charDuration}ms ease`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
