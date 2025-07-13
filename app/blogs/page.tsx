import React from "react";
import { Title } from "@/components/title";
const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title
        name="Blogs"
        description="Read my blogs about my projects, my experiences, and my thoughts"
      />
    </div>
  );
};

export default page;
