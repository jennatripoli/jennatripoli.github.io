export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div
        className="absolute -top-1/4 -left-1/4 size-[40vw] rounded-full blur-3xl opacity-40 animate-aurora-drift-1 transform-gpu will-change-transform motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 350 / 0.7), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 size-[38vw] rounded-full blur-3xl opacity-40 animate-aurora-drift-2 transform-gpu will-change-transform motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.118 184.704 / 0.6), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 size-[32vw] rounded-full blur-3xl opacity-30 animate-aurora-drift-3 transform-gpu will-change-transform motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.08 255 / 0.8), transparent 70%)",
        }}
      />
    </div>
  );
}
