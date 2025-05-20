"use client";
import { motion } from "framer-motion";
export const Title = ({
  name,
  description,
}: {
  name: string;
  description?: string;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(5px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <h1 className="text-4xl font-semibold">{name}</h1>
      <p className="text-muted-foreground/70">{description}</p>
    </motion.div>
  );
};
