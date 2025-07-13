"use client";
import Profile from "@/components/home/profile";
import Interest from "@/components/home/interest";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-5"
    >
      <Profile />
      <span className="border-dashed border-b-2" />
      <Interest />
    </motion.div>
  );
}
