import React from "react";
import { Title } from "@/components/title";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Blog",
    description: "Writing by Sahil Mulani about projects, experiences, and ideas.",
    path: "/blogs",
  }),
  robots: { index: false },
};
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
