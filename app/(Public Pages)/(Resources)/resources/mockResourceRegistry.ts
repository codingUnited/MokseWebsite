import { createListCollection } from "@chakra-ui/react";
import { Regions, Categories, Titles } from "./mockIndex";

const toList = (arr: string[]) => arr.map((value) => ({ label: value, value }));

export const resourceCollectionRegistry = {
  Regions: createListCollection({ items: toList(Regions) }),
  Categories: createListCollection({ items: toList(Categories) }),
  Titles: createListCollection({ items: toList(Titles) }),
};

export type ResourceRegistryKey = keyof typeof resourceCollectionRegistry;
