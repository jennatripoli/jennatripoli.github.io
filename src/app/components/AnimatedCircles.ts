"use client";

import { useEffect } from "react";

export const AnimatedCircles = () => {
  useEffect(() => {
    const circles: HTMLDivElement[] = [];
    const colors = ["#EAF0CE", "#C0C5C1", "#7D8491"];

    // Clean up existing circles on component mount
    const existingCircles = document.getElementsByClassName("Circle");
    while (existingCircles.length > 0) {
      existingCircles[0].remove();
    }

    // Create and append new circles
    for (let i = 0; i < 50; i++) {
      const circle = document.createElement("div");
      circle.style.position = "fixed";
      circle.style.borderRadius = "50%";
      circle.style.zIndex = "-1";
      circle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      circle.style.left = `${Math.floor(Math.random() * 100)}vw`;
      circle.style.top = `${Math.floor(Math.random() * 100)}vh`;
      circle.style.transform = `scale(${Math.random()})`;
      circle.style.width = `${Math.random() * 2 + 0.5}em`;
      circle.style.height = circle.style.width;
      circles.push(circle);
      document.body.append(circle);
    }

    // Animate the circles
    circles.forEach((el) => {
      el.animate([{ opacity: 0 }, { opacity: 0.6 }], {
        duration: (Math.random() + 1) * 1000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      });
    });

    // Clean up on component unmount
    return () => {
      circles.forEach((circle) => {
        if (circle.parentNode) {
          circle.parentNode.removeChild(circle);
        }
      });
    };
  }, []);

  return null;
};
