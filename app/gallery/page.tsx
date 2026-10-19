import { Title } from "@/components/title";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Gallery",
    description: "A collection of memories from Sahil Mulani.",
    path: "/gallery",
  }),
  robots: { index: false },
};
export default function Gallery() {
  return (
    <div className="flex flex-col gap-10">
      <Title name="Gallery" description="A collection of memories" />
    </div>
  );
}
