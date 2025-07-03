import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }

      if (blurRef.current) {
        blurRef.current.style.left = `${x}px`;
        blurRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* White Circle */}
      <div
        ref={cursorRef}
        className="w-2 h-2 rounded-full bg-[#233BA7] mix-blend-difference fixed z-[9999] pointer-events-none transition-all duration-200 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Green Blurred Glow */}
      <div
        ref={blurRef}
        className="w-[100px] h-[100px] rounded-full border-2 border-[#233BA7] fixed z-[9998] pointer-events-none transition-all duration-400 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </>
  );
};

export default CustomCursor;
