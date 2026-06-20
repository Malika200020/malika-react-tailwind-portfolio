export const snap = { type: "spring", stiffness: 420, damping: 32 };
export const gentle = { type: "spring", stiffness: 240, damping: 22 };

export const cardHoverVariants = {
  idle: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 0 0 1px hsl(var(--border))",
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 24px 48px hsl(var(--primary) / 0.18), 0 0 0 1px hsl(var(--primary) / 0.35)",
  },
  tap: {
    y: -2,
    scale: 0.99,
    boxShadow: "0 8px 24px hsl(var(--primary) / 0.12), 0 0 0 1px hsl(var(--primary) / 0.25)",
  },
};
