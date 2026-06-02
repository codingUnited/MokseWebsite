"use client";

import {
  Box,
  Card,
  Button,
  Combobox,
  Portal,
  useFilter,
  useListCollection,
  ScrollArea,
  Center,
  Tag,
  Stack,
  Image,
  ClientOnly,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { AllResources } from "./mockIndex";
import { Icon } from "@/components/ui/icons/icon";
import { resourceCollectionRegistry } from "./mockResourceRegistry";
import { useEffect, useState } from "react";

export default function Navigators() {
  const { contains } = useFilter({ sensitivity: "base" });

  const [formData, setFormData] = useState({
    searchRegion: "",
    searchCategory: "",
    searchQuery: "",
  });

  // Data States
  const [allResources, setAllResources] = useState<any[]>(AllResources);
  const [filteredItems, setFilteredItems] = useState(AllResources);

  // Dynamic Dropdown States
  const [dynamicRegions, setDynamicRegions] = useState(resourceCollectionRegistry.Regions.items);
  const [dynamicCategories, setDynamicCategories] = useState(resourceCollectionRegistry.Categories.items);
  const [dynamicTitles, setDynamicTitles] = useState(resourceCollectionRegistry.Titles.items);

  // Chakra UI Collections (bound to dynamic state)
  const { collection: regionDropDown, filter: filterRegions } = useListCollection({
    initialItems: dynamicRegions,
    itemToString: (item) => item.label,
    filter: contains,
  });

  const { collection: categoryDropDown, filter: filterCategories } = useListCollection({
    initialItems: dynamicCategories,
    itemToString: (item) => item.label,
    filter: contains,
  });

  const { collection: titleDropDown, filter: filterTitles } = useListCollection({
    initialItems: dynamicTitles,
    itemToString: (item) => item.label,
    filter: contains,
  });

  const [regionInput, setRegionInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [titleInput, setTitleInput] = useState("");

  // --- SILENT BACKGROUND FETCH TO UPGRADE DATA ---
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch("/api/notion/database", { method: "POST" });
        if (!res.ok) throw new Error("Failed to fetch Notion data");
        const data = await res.json();
        const formattedData = data.payload;

        const uniqueRegions = Array.from(new Set(formattedData.flatMap((item: any) => item.region)))
          .filter(Boolean)
          .map((region) => ({ label: String(region), value: String(region) }));

        const uniqueCategories = Array.from(new Set(formattedData.flatMap((item: any) => item.category)))
          .filter(Boolean)
          .map((cat) => ({ label: String(cat), value: String(cat) }));

        const uniqueTitles = formattedData.map((item: any) => ({
          label: String(item.title), value: String(item.title)
        }));

        setAllResources(formattedData);
        setFilteredItems(formattedData);
        setDynamicRegions(uniqueRegions);
        setDynamicCategories(uniqueCategories);
        setDynamicTitles(uniqueTitles);
      } catch (error) {
        console.error("Notion fetch failed, falling back to mock JSON data:", error);
      }
    };
    fetchResources();
  }, []);

  const applyFilters = () => {
    const noFilters = !formData.searchRegion && !formData.searchCategory && !formData.searchQuery;

    if (noFilters) {
      setFilteredItems(allResources);
      return;
    }

    let results = allResources;

    if (formData.searchRegion) {
      results = results.filter((r) => r.region.includes(formData.searchRegion));
    }
    if (formData.searchCategory) {
      results = results.filter((r) => r.category.includes(formData.searchCategory));
    }
    if (formData.searchQuery) {
      const q = formData.searchQuery.toLowerCase();
      results = results.filter(
        (r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
      );
    }
    setFilteredItems(results);
  };

  return (
    <Card.Body gap={{ base: 4, md: 6 }} p={{ base: 3, md: 6 }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        align={{ base: "stretch", md: "center" }}
        justify={"center"}
        gap={{ base: 2, md: 0 }}
      >
        <Combobox.Root
          collection={regionDropDown}
          onInputValueChange={(event) => {
            const value = event?.inputValue;
            setRegionInput(value);
            setFormData((previousInfo) => ({
              ...previousInfo,
              searchRegion: value,
            }));
            if (!value) {
              filterRegions("");
              setFilteredItems(AllResources);
            } else {
              filterRegions(value);
              applyFilters();
            }
          }}
        >
          <Combobox.Control>
            <Combobox.Input
              placeholder="Select a Region"
              onSelect={(details) => {
                const { value } = details?.currentTarget;
                setRegionInput(value);
                setFormData((previousInfo) => ({
                  ...previousInfo,
                  searchRegion: value,
                }));
                if (!value) {
                  filterRegions("");
                  setFilteredItems(AllResources);
                } else {
                  filterRegions(value);
                  applyFilters();
                }
              }}
              onChange={(event) => {
                const { value } = event?.target;
                setRegionInput(value);
                setFormData((previousInfo) => ({
                  ...previousInfo,
                  searchRegion: value,
                }));
                if (!value) {
                  filterRegions("");
                  setFilteredItems(AllResources);
                } else {
                  filterRegions(value);
                  applyFilters();
                }
              }}
            />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
              <Combobox.Trigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.Empty>No items found</Combobox.Empty>
                {regionDropDown.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
        <Combobox.Root
          collection={categoryDropDown}
          onInputValueChange={(event) => {
            const value = event?.inputValue;
            setCategoryInput(value);
            setFormData((previousInfo) => ({
              ...previousInfo,
              searchCategory: value,
            }));
            if (!value) {
              filterCategories("");
              setFilteredItems(AllResources);
            } else {
              filterCategories(value);
              applyFilters();
            }
          }}
        >
          <Combobox.Control>
            <Combobox.Input
              placeholder=" Select a Category"
              onSelect={(details) => {
                const { value } = details?.currentTarget;
                setCategoryInput(value);
                setFormData((previousInfo) => ({
                  ...previousInfo,
                  searchCategory: value,
                }));
                if (!value) {
                  filterCategories("");
                  setFilteredItems(AllResources);
                } else {
                  filterCategories(value);
                  applyFilters();
                }
              }}
              onChange={(event) => {
                const { value } = event?.target;
                setCategoryInput(value);
                setFormData((previousInfo) => ({
                  ...previousInfo,
                  searchCategory: value,
                }));
                if (!value) {
                  filterCategories("");
                  setFilteredItems(AllResources);
                }
                filterCategories(value);
                applyFilters();
              }}
            />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
              <Combobox.Trigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.Empty>No items found</Combobox.Empty>
                {categoryDropDown.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
        <Combobox.Root
          collection={titleDropDown}
          onInputValueChange={(event) => {
            const value = event?.inputValue;
            setTitleInput(value);
            setFormData((previousInfo) => ({
              ...previousInfo,
              searchQuery: value,
            }));
            if (!value) {
              filterTitles("");
              setFilteredItems(AllResources);
            }
            filterTitles(value);
            applyFilters();
          }}
        >
          <Combobox.Control>
            <Combobox.Input
              placeholder="Search by Title"
              onChange={(event) => {
                const { value } = event?.target;
                setTitleInput(value);
                setFormData((prev) => ({
                  ...prev,
                  searchQuery: value,
                }));
                if (!value) {
                  filterTitles("");
                  setFilteredItems(AllResources);
                }
                filterTitles(value);
                applyFilters();
              }}
              onSelect={(details) => {
                const { value } = details?.currentTarget;
                setTitleInput(value);
                setFormData((prev) => ({
                  ...prev,
                  searchQuery: value,
                }));
                if (!value) {
                  filterTitles("");
                  setFilteredItems(AllResources);
                }
                filterTitles(value);
                applyFilters();
              }}
            />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.Empty>No items found</Combobox.Empty>
                {titleDropDown.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
        <Button
          w={{ base: "100%", md: "auto" }}
          onClick={() => {
            if (!titleInput && !categoryInput && !regionInput) {
              setFilteredItems(allResources);
            } else {
              applyFilters();
            }
          }}
          aria-label="Search Resources"
        >
          <Icon name={"Search"} />
          <Box display={{ base: "inline", md: "none" }} ml={2}>Search</Box>
        </Button>
      </Stack>
      {/* CARD TABLE SECTION */}
      <ScrollArea.Root height={{ base: "lg", md: "xl" }} maxW="full">
        <ScrollArea.Viewport>
          <ScrollArea.Content spaceY={2} textStyle="sm">
            {filteredItems.map((item) => (
              <Card.Root
                key={item.id}
                borderWidth=".5px"
                borderRadius="md"
                shadow="xs"
                flexDirection={{ base: "column", sm: "row" }}
                overflow="hidden"
                w={"100%"}
              >
                <Center borderRadius="md" minW={{ sm: "120px" }} w={{ base: "100%", sm: "auto" }}>
                  <ClientOnly fallback={<Box boxSize={{ base: "100%", sm: 120 }} bg={"blue.500"} />}>
                    <Image
                      src={item.WebLogoURL}
                      alt={item.title}
                      width={120}
                      height={120}
                      fit="contain"
                      p={2}
                      bg="#545454"
                      w={{ base: "100%", sm: "120px" }}
                      h={{ base: "120px", sm: "120px" }}
                    />
                  </ClientOnly>
                </Center>
                <Card.Body p={{ base: 3, md: 4 }}>
                  <Stack>
                    <strong>{item.title}</strong>
                    <Box fontSize="sm" color="gray.500" lineClamp={2}>
                      {item.description}
                    </Box>
                    <Stack direction={{ base: "column", sm: "row" }} gap={2}>
                      <Tooltip content={item.region.join(", ")}>
                        <Tag.Root size={{ base: "md", md: "lg" }} maxW={"xs"}>
                          <Tag.Label>
                            {item.region.length > 1
                              ? `+${item.region.length} Regions`
                              : item.region[0]}
                          </Tag.Label>
                        </Tag.Root>
                      </Tooltip>
                      <Tag.Root size={{ base: "md", md: "lg" }} maxW={"xs"}>
                        <Tag.Label>{item.category.join(", ")}</Tag.Label>
                      </Tag.Root>
                    </Stack>
                  </Stack>
                </Card.Body>
              </Card.Root>
            ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Card.Body>
  );
}