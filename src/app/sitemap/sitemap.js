import { NEXT_PUBLIC_BASE_URL } from "@/constants/shared/constant";

const changeFrequency = "weekly";

export default async function sitemap() {
  const baseUrl = NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), changeFrequency },
    { url: `${baseUrl}/signin`, lastModified: new Date().toISOString(), changeFrequency },
    { url: `${baseUrl}/signup`, lastModified: new Date().toISOString(), changeFrequency },
    { url: `${baseUrl}/tac`, lastModified: new Date().toISOString(), changeFrequency },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date().toISOString(), changeFrequency },
  ];

  return [...staticUrls]; 
}
