"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  automatic,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex items-center justify-center overflow-visible select-none",
        className
      )}
    >
      {/* Container for the stacked text layers */}
      <div className="relative grid place-items-center w-full">
        {/* Base Layer: Outlined Text */}
        <motion.div
          className="col-start-1 row-start-1 text-neutral-200 dark:text-neutral-800 font-bold font-[helvetica]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            WebkitTextStroke: "1px currentColor",
            color: "transparent",
            // Allow pointer events to pass through if needed, but here it's fine
          }}
        >
          {text}
        </motion.div>

        {/* Reveal Layer: Gradient Text with Mask */}
        {/* We need the gradient text to be always rendered BUT masked? 
            If 'hovered' is false, we might want to hide it completely to avoid glitching at 0,0.
            But simply conditionally rendering content {hovered ? text : text} works.
            Wait, if I render 'null', the layout size might jump if this layer was dictating size?
            Since it's in a grid with the Base Layer (which has same content), the size is preserved by Base Layer.
        */}
        <div
          className="col-start-1 row-start-1 font-bold font-[helvetica] text-transparent bg-clip-text pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "linear-gradient(to right, #eab308, #ef4444, #3b82f6, #06b6d4, #8b5cf6)",
            maskImage: hovered ? `radial-gradient(circle 100px at ${cursor.x}px ${cursor.y}px, black 0%, transparent 90%)` : "none",
            WebkitMaskImage: hovered ? `radial-gradient(circle 100px at ${cursor.x}px ${cursor.y}px, black 0%, transparent 90%)` : "none",
            opacity: hovered ? 1 : 0
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
