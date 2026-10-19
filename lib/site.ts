import type { Metadata } from "next";

export const siteUrl = "https://www.sahilmulani.com";
export const siteName = "Sahil Mulani";
export const siteDescription =
  "Sahil Mulani is a software engineer who ships products end to end. Founding Engineer at Sourcicle.";

export const pageMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url: path,
    siteName,
    title: `${title} | ${siteName}`,
    description,
    locale: "en_US",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    creator: "@sahil__501",
    images: ["/opengraph-image"],
  },
});
