import { useMemo } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

const BubbleBackground = () => {
  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 5,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 6,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ocean gradient overlay */}
      <div className="absolute inset-0 bg-ocean-gradient" />
      
      {/* Animated bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-50px",
            animation: `bubble ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}

      {/* Subtle wave overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg
          className="absolute bottom-0 w-[200%] animate-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--accent))"
            fillOpacity="0.3"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BubbleBackground;
