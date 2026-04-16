import ResourceList from "./mock.json";

type ResourceItem = {
  id: number;
  title: string;
  description: string;
  category: string[];
  region: string[];
  webLogoURL: string;
  url: string;
  verificationDate: string;
};
type ResourceFile = { items: ResourceItem[] };
// Strongly types the JSON import
const Resources = ResourceList as ResourceFile;
// Export all items export
export const AllResources = Resources.items;
// Helper for dedupe
const unique = <Type>(array: Type[]) => Array.from(new Set(array));
// Categories
export const Categories: string[] = unique(
  AllResources?.flatMap((item) => item.category),
);
// Regions
export const Regions: string[] = unique(
  AllResources?.flatMap((item) => item.region),
);
// Titles
export const Titles: string[] = unique(AllResources?.map((item) => item.title));
