"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  // Parallax transforms for the blobs
  const topBlobY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bottomBlobY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const topBlobRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const bottomBlobRotate = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Top-left accent blob with parallax */}
      <motion.div
        className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        style={{
          y: topBlobY,
          rotate: topBlobRotate,
        }}
      />

      {/* Bottom-right muted blob with parallax */}
      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        style={{
          y: bottomBlobY,
          rotate: bottomBlobRotate,
        }}
      />
    </div>
  );
}
