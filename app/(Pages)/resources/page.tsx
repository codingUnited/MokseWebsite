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
import { useRef, useState } from "react";
import checkDeviceSize from "@/components/ui/breakpoints";
import { Icon } from "@/components/ui/icons/icon";
import {
  HeaderTemplate,
  PageBuilder,
} from "@/components/page-builder/template";

import { resourceCollectionRegistry } from "./mockResourceRegistry";
import { AllResources } from "./mockIndex";
import { Tooltip } from "@/components/ui/tooltip";
import Navigators from "./Navigators";
import Networks from "./Networks";
import Calendar from "./Calendar";
export default function SearchResources() {
  //Retrieve mock data from json file
  const [searchlist, setSearchlist] = useState(null);

  const { contains } = useFilter({ sensitivity: "base" });

  const [value, setValue] = useState("Initial value");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const notMobileDevice = checkDeviceSize();

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
    <>
      {notMobileDevice ? (
        <>
          <PageBuilder>
            <HeaderTemplate title="Resources" imageHeight={"20vh"} />
            <Container fluid>
              <Card.Root>
                <Tabs.Root defaultValue="Navigators">
                  <Tabs.List>
                    <Container fluid asChild>
                      <Tabs.Trigger value="Navigators" textAlign={"center"}>
                        Navigators
                      </Tabs.Trigger>
                    </Container>
                    <Container fluid asChild>
                      <Tabs.Trigger value="Networks">Networks</Tabs.Trigger>
                    </Container>
                    <Container fluid asChild>
                      <Tabs.Trigger value="Events">Events</Tabs.Trigger>
                    </Container>
                  </Tabs.List>
                  <Tabs.Content value="Navigators">
                    <Card.Root>
                      <Navigators />
                    </Card.Root>
                  </Tabs.Content>
                  <Tabs.Content value="Networks">
                    <Card.Root>
                      <Networks />
                    </Card.Root>
                  </Tabs.Content>
                  <Tabs.Content value="Events">
                    <Card.Root>
                      <Calendar />
                    </Card.Root>
                  </Tabs.Content>
                </Tabs.Root>
              </Card.Root>
            </Container>
          </PageBuilder>
        </>
      ) : (
        // This is a placeholder for the mobile view to be updated later
        // Search
        <Container as={"main"} maxW={"7xl"} h={"100%"}>
          <HStack as={"section"}>
            <article>
              <Icon name="Gem" />
              {/* <GemIcon /> */}
              <Box>
                <Heading as="h3">Search</Heading>
                <InputGroup endElement={endElement}>
                  <Input
                    list={searchlist ?? ""}
                    ref={inputRef}
                    placeholder="Email"
                    value={value}
                    onChange={(e) => {
                      setValue(e.currentTarget.value);
                    }}
                  />
                </InputGroup>
              </Box>
            </article>
          </HStack>
        </Container>
      )}
    </>
  );
}
