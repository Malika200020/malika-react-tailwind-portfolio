import { useEffect, useRef, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [farStars, setFarStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const resizeTimeout = useRef(null);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        generateStars();
        generateMeteors();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout.current);
    };
  }, []);

  const generateStars = () => {
    const area = window.innerWidth * window.innerHeight;

    // Near layer: small, brighter, faster pulse.
    const nearCount = Math.floor(area / 10000);
    const newStars = [];
    for (let i = 0; i < nearCount; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);

    // Far layer: sparser, larger, dimmer, slower pulse — cheap depth illusion.
    const farCount = Math.floor(area / 28000);
    const newFarStars = [];
    for (let i = 0; i < farCount; i++) {
      newFarStars.push({
        id: i,
        size: Math.random() * 2 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.25 + 0.15,
        animationDuration: Math.random() * 6 + 6,
      });
    }
    setFarStars(newFarStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = window.innerWidth < 768 ? 2 : 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {farStars.map((star) => (
        <div
          key={`far-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {stars.map((star) => (
        <div
          key={`near-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
