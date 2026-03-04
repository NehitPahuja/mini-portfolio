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
      <div className="relative grid place-items-center w-full">
        <motion.div
          className="col-start-1 row-start-1 text-neutral-200 dark:text-neutral-800 font-bold font-[helvetica]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            WebkitTextStroke: "1px currentColor",
            color: "transparent",
          }}
        >
          {text}
        </motion.div>
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
