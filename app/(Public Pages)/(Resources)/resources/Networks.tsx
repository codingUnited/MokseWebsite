"use client";
import {
  Container,
  Box,
  CloseButton,
  Input,
  InputGroup,
  Card,
  HStack,
  Heading,
  Button,
  Combobox,
  Portal,
  useFilter,
  useListCollection,
  Group,
  ScrollArea,
  Center,
  Tag,
  Stack,
  Tabs,
} from "@chakra-ui/react";

import { Tooltip } from "@/components/ui/tooltip";
import { AllResources } from "./mockIndex";
import { Icon } from "@/components/ui/icons/icon";

import { resourceCollectionRegistry } from "./mockResourceRegistry";

import { useRef, useState } from "react";

export default function Navigators() {
  //Retrieve mock data from json file
  const [searchlist, setSearchlist] = useState(null);

  const { contains } = useFilter({ sensitivity: "base" });

  const [value, setValue] = useState("Initial value");
  const inputRef = useRef<HTMLInputElement | null>(null);

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
    },
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
        resources.region.includes(formData.searchRegion),
      );
    }
    if (formData.searchCategory) {
      results = results.filter((resources) =>
        resources.category.includes(formData.searchCategory),
      );
    }
    if (formData.searchQuery) {
      const q = formData.searchQuery.toLowerCase();
      results = results.filter(
        (resources) =>
          resources.title.toLowerCase().includes(q) ||
          resources.description.toLowerCase().includes(q),
      );
    }
    setFilteredItems(results);
  };

  return (
    <Card.Body gap={6}>
      <Group attached align={"center"} justify={"center"}>
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
          onClick={() => {
            if (!titleInput && !categoryInput && !regionInput) {
              filterTitles("");
              filterCategories("");
              filterRegions("");
              setFilteredItems(AllResources);
            }
            applyFilters();
          }}
          aria-label="Search Resources"
        >
          <Icon name={"Search"} />
        </Button>
      </Group>
      {/* CARD TABLE SECTION */}
      <ScrollArea.Root height={"xl"} maxW="full">
        <ScrollArea.Viewport>
          <ScrollArea.Content spaceY="1" textStyle="sm">
            {filteredItems.map((item) => (
              <Card.Root
                key={item.id}
                borderWidth=".5px"
                borderRadius="md"
                shadow="xs"
                flexDirection="row"
              >
                <Center borderRadius="md">
                  <Box boxSize={120} bg={"blue.500"} />
                </Center>
                <Card.Body p={4}>
                  <Stack>
                    <strong>{item.title}</strong>
                    <Box fontSize="sm" color="gray.500">
                      {item.description}
                    </Box>
                    <Stack direction={"row"} gap={2}>
                      <Tooltip content={item.region.join(", ")}>
                        <Tag.Root size={"lg"} maxW={"xs"}>
                          <Tag.Label>
                            {item.region.length > 0
                              ? `+${item.region.length} Regions`
                              : item.region}
                          </Tag.Label>
                        </Tag.Root>
                      </Tooltip>
                      <Tag.Root size={"lg"} maxW={"xs"}>
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
