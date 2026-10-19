import React from "react";
import { Title } from "@/components/title";
import WorkThread from "./_components/work-thread";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Where Sahil Mulani has worked: Founding Engineer at Sourcicle and software engineering internships at Sourcicle and StudyChat.",
  path: "/work",
});

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title name="Work" description="Companies I've worked at" />
      <WorkThread />
    </div>
  );
};

export default page;
