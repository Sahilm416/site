import Profile from "@/components/home/profile";
import Building from "@/components/home/building";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: "https://github.com/sahilm416.png",
  description: siteDescription,
  jobTitle: "Founding Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Sourcicle",
    url: "https://www.sourcicle.com/",
  },
  sameAs: [
    "https://github.com/sahilm416",
    "https://www.linkedin.com/in/sahil-mulani501/",
    "https://twitter.com/sahil__501",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Profile />
      <span className="border-dashed border-b-2" />
      <Building />
    </div>
  );
}
