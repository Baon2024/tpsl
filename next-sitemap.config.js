import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default {
  siteUrl: "https://www.findprivateschoolscholarshipsbursaries.co.uk",
  generateRobotsTxt: true, // Generates robots.txt automatically
  sitemapSize: 5000, // Limits sitemap entries per file
  exclude: ["/admin", "/dashboard"], // Exclude private pages
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      priority: path === "/" ? 1 : 0.8,
    };
  },
  additionalPaths: async (config) => {
    const { data: schoolData, error } = await supabase
      .from("schoolslatest")
      .select("documentId");

    if (error) {
      console.error("Error fetching schools:", error);
      return [];
    }

    return schoolData.map((school) => ({
      loc: `/schools/${school.documentId}`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    }));
  },
};
