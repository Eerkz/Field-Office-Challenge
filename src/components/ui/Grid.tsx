import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Grid({
  color = "gray",
  squareWidth = 32,
  squareHeight = 37,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current !== null) {
      const handleResize = () => {
        setDimensions({
          width: containerRef.current!.offsetWidth,
          height: containerRef.current!.offsetHeight,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [containerRef]);

  const { width, height } = dimensions;

  const numCols = Math.ceil(width / squareWidth);
  const numRows = Math.ceil(height / squareHeight);

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  const horizontalLines = [];
  const verticalLines = [];

  for (let i = 0; i <= numRows; i++) {
    horizontalLines.push(
      <motion.line
        key={`h-${i}`}
        x1="0"
        y1={i * squareHeight}
        x2={numCols * squareWidth}
        y2={i * squareHeight}
        stroke={color}
        strokeWidth="1"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.3, delay: 0.4 }}
      />
    );
  }

  for (let i = 0; i <= numCols; i++) {
    verticalLines.push(
      <motion.line
        key={`v-${i}`}
        x1={i * squareWidth}
        y1="0"
        x2={i * squareWidth}
        y2={numRows * squareHeight}
        stroke={color}
        strokeWidth="1"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      />
    );
  }

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="opacity-65"
      >
        {horizontalLines}
        {verticalLines}
      </svg>
    </div>
  );
}
