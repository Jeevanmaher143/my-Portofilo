import React, { useEffect, useRef, useState } from "react";

const cursorThemes = {
  manual: {
    outerSize: 24,
    hoverSize: 30,
    radius: "50%",
    outerBackground: "rgba(251, 191, 36, 0.14)",
    outerHoverBackground: "rgba(251, 191, 36, 0.22)",
    border: "#fbbf24",
    shadow: "0 0 18px rgba(251, 191, 36, 0.58), 0 0 36px rgba(245, 158, 11, 0.28)",
    innerBackground: "#fbbf24",
    trailBackground: "#f59e0b",
    innerSize: 6,
    transform: "translate(-50%, -50%)",
  },
  automation: {
    outerSize: 24,
    hoverSize: 31,
    radius: "9px",
    outerBackground: "rgba(103, 232, 249, 0.11)",
    outerHoverBackground: "rgba(129, 140, 248, 0.18)",
    border: "#67e8f9",
    shadow: "0 0 20px rgba(103, 232, 249, 0.72), 0 0 44px rgba(129, 140, 248, 0.36)",
    innerBackground: "#67e8f9",
    trailBackground: "#67e8f9",
    innerSize: 5,
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
};

export default function CustomCursor({ activeTab = "manual" }) {
  const isAutomation = activeTab === "automation";
  const theme = isAutomation ? cursorThemes.automation : cursorThemes.manual;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [cursorDots, setCursorDots] = useState([]);
  const cursorDotId = useRef(0);
  const lastCursorDotAt = useRef(0);

  useEffect(() => {
    const moveCursor = (e) => {
      const nextPosition = {
        x: e.clientX,
        y: e.clientY,
      };

      setPosition(nextPosition);

      const now = Date.now();
      if (now - lastCursorDotAt.current < (isAutomation ? 36 : 58)) {
        return;
      }

      lastCursorDotAt.current = now;
      cursorDotId.current += 1;

      const dot = {
        id: cursorDotId.current,
        x: nextPosition.x + (Math.random() * (isAutomation ? 16 : 12) - (isAutomation ? 8 : 6)),
        y: nextPosition.y + (Math.random() * (isAutomation ? 16 : 12) - (isAutomation ? 8 : 6)),
        size: isAutomation ? 2.5 + Math.random() * 3 : 3 + Math.random() * 3,
        mode: isAutomation ? "automation" : "manual",
      };

      setCursorDots((items) => [...items.slice(-10), dot]);
      window.setTimeout(() => {
        setCursorDots((items) => items.filter((item) => item.id !== dot.id));
      }, isAutomation ? 620 : 720);
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      setHovering(
        Boolean(
          target.closest("button") ||
            target.closest("a") ||
            target.closest("input") ||
            target.closest("textarea") ||
            target.closest(".hover-item")
        )
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isAutomation]);

  return (
    <>
      <style>{`
        .custom-cursor-layer {
          display: block;
        }

        .custom-cursor-outer {
          animation: cursorHumanBreath 2.4s ease-in-out infinite;
        }

        .custom-cursor-outer.automation {
          animation: cursorRobotScan 1.6s ease-in-out infinite;
        }

        .custom-cursor-outer.automation::before,
        .custom-cursor-outer.automation::after {
          content: "";
          position: absolute;
          inset: 5px;
          border-radius: 6px;
          border: 1px solid rgba(103, 232, 249, 0.34);
        }

        .custom-cursor-outer.automation::after {
          inset: 10px;
          border-color: rgba(52, 211, 153, 0.34);
        }

        .cursor-dot {
          position: fixed;
          pointer-events: none;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 9998;
          animation: cursorDotFade 0.68s ease-out forwards;
        }

        .cursor-dot.manual {
          background: #f59e0b;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.72);
        }

        .cursor-dot.automation {
          background: #67e8f9;
          box-shadow: 0 0 10px rgba(103, 232, 249, 0.82);
        }

        @keyframes cursorHumanBreath {
          0%, 100% {
            filter: saturate(1);
          }
          50% {
            filter: saturate(1.25);
          }
        }

        @keyframes cursorRobotScan {
          0%, 100% {
            filter: hue-rotate(0deg);
          }
          50% {
            filter: hue-rotate(18deg);
          }
        }

        @keyframes cursorDotFade {
          from {
            opacity: 0.95;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.25);
          }
        }

        @media (hover: none), (pointer: coarse) {
          .custom-cursor-layer {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .custom-cursor-outer,
          .custom-cursor-outer.automation,
          .cursor-dot {
            animation: none !important;
          }
        }
      `}</style>

      <div className="custom-cursor-layer">
        {cursorDots.map((dot) => (
            <span
              className={`cursor-dot ${dot.mode}`}
              key={dot.id}
              style={{
                top: dot.y,
                left: dot.x,
                width: dot.size,
                height: dot.size,
              }}
            />
          ))}

        <div
          className={`custom-cursor-outer${isAutomation ? " automation" : ""}`}
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            width: hovering ? theme.hoverSize : theme.outerSize,
            height: hovering ? theme.hoverSize : theme.outerSize,
            borderRadius: theme.radius,
            pointerEvents: "none",
            transform: theme.transform,
            background: hovering ? theme.outerHoverBackground : theme.outerBackground,
            border: `2px solid ${theme.border}`,
            boxShadow: theme.shadow,
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            transition:
              "width 0.18s ease, height 0.18s ease, background 0.18s ease, border-radius 0.18s ease, border-color 0.18s ease",
          }}
        />

        <div
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            width: hovering ? theme.innerSize + 2 : theme.innerSize,
            height: hovering ? theme.innerSize + 2 : theme.innerSize,
            borderRadius: isAutomation ? "2px" : "50%",
            pointerEvents: "none",
            transform: theme.transform,
            background: theme.innerBackground,
            boxShadow: `0 0 12px ${theme.innerBackground}`,
            zIndex: 10000,
            transition: "width 0.18s ease, height 0.18s ease",
          }}
        />
      </div>
    </>
  );
}
