"use client";

import {
  Container,
  Box,
  CloseButton,
  Input,
  InputGroup,
  Card,
  Stack,
  Heading,
  useFilter,
  useListCollection,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Icon } from "@/components/ui/icons/icon";
import {
  BodyTemplate,
  HeaderTemplate,
  PageBuilder,
} from "@/components/page-builder/template";

import { resourceCollectionRegistry } from "./mockResourceRegistry";
import { AllResources } from "./mockIndex";
import Navigators from "./Navigators";

export default function SearchResources() {
  const [searchlist, setSearchlist] = useState(null);
  const { contains } = useFilter({ sensitivity: "base" });

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = value ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setValue("");
        inputRef.current?.focus();
      }}
      me="-2"
    />
  ) : undefined;

  const [formData, setFormData] = useState<{
    searchRegion: string;
    searchCategory: string;
    searchQuery: string;
  }>({
    searchQuery: "",
    searchRegion: "",
    searchCategory: "",
  });

  const regionCollection = resourceCollectionRegistry.Regions;
  const categoryCollection = resourceCollectionRegistry.Categories;
  const titleCollection = resourceCollectionRegistry.Titles;

  const { collection: regionDropDown, filter: filterRegions } =
    useListCollection({
      initialItems: regionCollection.items,
      itemToString: (item) => item.label,
      filter: contains,
    });
  const { collection: categoryDropDown, filter: filterCategories } =
    useListCollection({
      initialItems: categoryCollection.items,
      itemToString: (item) => item.label,
      filter: contains,
    });
  const { collection: titleDropDown, filter: filterTitles } = useListCollection(
    {
      initialItems: titleCollection.items,
      itemToString: (item) => item.label,
      filter: contains,
    }
  );

  const [regionInput, setRegionInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(AllResources);

  const applyFilters = () => {
    const noFilters =
      !formData.searchRegion &&
      !formData.searchCategory &&
      !formData.searchQuery;
    if (noFilters) {
      setFilteredItems(AllResources);
      return;
    }
    let results = AllResources;
    if (formData.searchRegion) {
      results = results.filter((resources) =>
        resources.region.includes(formData.searchRegion)
      );
    }
    if (formData.searchCategory) {
      results = results.filter((resources) =>
        resources.category.includes(formData.searchCategory)
      );
    }
    if (formData.searchQuery) {
      const q = formData.searchQuery.toLowerCase();
      results = results.filter(
        (resources) =>
          resources.title.toLowerCase().includes(q) ||
          resources.description.toLowerCase().includes(q)
      );
    }
    setFilteredItems(results);
  };

  return (
    <PageBuilder>
      <HeaderTemplate
        title={"Resources"}
        imageHeight={{ base: "30vh", md: "10vh" }}
      />

      <BodyTemplate>
        <Container fluid px={{ base: 0, md: 4 }}>
          {/* Unified Layout: Stacks vertically on mobile, horizontally on desktop */}
          <Stack direction={{ base: "column", md: "row" }} gap={6} w="full" align="flex-start">

            {/* Search/Filter Sidebar Area */}


            {/* Main Content Area (Navigators / Results) */}
            <Box flex="1" w="full">
              <Card.Root w="full" variant="outline">
                <Card.Body>
                  <Navigators />
                  {/* Future implementation: Render your filteredItems here */}
                </Card.Body>
              </Card.Root>
            </Box>

          </Stack>
        </Container>
      </BodyTemplate>
    </PageBuilder>
  );
}