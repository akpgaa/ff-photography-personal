import { createClient } from "next-sanity";

export const projectId = "projectId";
//  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01", // YYYY-MM-DD
  useCdn: false,
});
