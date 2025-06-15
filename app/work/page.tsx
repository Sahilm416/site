"use client";
import React from "react";
import { Title } from "@/components/title";
import WorkThread from "./_components/work-thread";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-5"
    >
      <Title name="Work" description="Companies I've worked at" />
      <WorkThread />
    </motion.div>
  );
};

export default page