"use client"

import { GemIcon } from '@/components/ui/icons';
import {
  Container, Box, Text, CloseButton, Input, InputGroup, AbsoluteCenter, VStack, HStack, Heading,
  SimpleGrid
} from '@chakra-ui/react';
import { useRef, useState } from "react"
import { poppins } from '@/components/ui/fonts';
import checkDeviceSize from '@/components/ui/breakpoints';
import mockData from '@/app/search/mock.json'


import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"


export default function Search() {
  //Retrieve mock data from json file
  const [searchlist, setSearchlist] = useState(mockData)

  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({
    initialItems: searchlist,
    itemToString: (item) => item.title,
    itemToValue: (item) => item.link,
    filter: contains,
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }
  //////////////////
  const [value, setValue] = useState("Initial value")
  const inputRef = useRef<HTMLInputElement | null>(null)
  const notMobileDevice = checkDeviceSize();

  const endElement = value ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setValue("")
        inputRef.current?.focus()
      }}
      me="-2"
    />
  ) : undefined

  return (


    <> {
      notMobileDevice ? (
        <VStack w={"100%"} >
          <Box position="relative"
            w={"100%"}
            h={"58vh"}
            bgImage={"url('/about-backdrop-image.webp')"}
            bgSize={"cover"}
            backgroundPosition={"center"}
            bgRepeat={"no-repeat"}

          //  alt="Mokse hero image"
          >
            <AbsoluteCenter
              textAlign="center"
              bg="rgba(0, 0, 0, 0.4)"
              w={"100%"}
              h={"100%"}
              alignItems={"center"}
            >


              <SimpleGrid columns={2} gap={6}>
                <VStack w={"75%"} pl={16}>
                  <Heading as={"h1"} p={2} >
                    <Text textStyle={"7xl"} className={poppins.className} textAlign={'start'} textTransform={'capitalize'} overflow={'hidden'} wordBreak={"none"} verticalAlign={'baseline'}
                      _light={{ color: "white" }}>Search
                    </Text>
                  </Heading>
                  <Combobox.Root
                    collection={collection}
                    onInputValueChange={handleInputChange}
                  >
                    <Combobox.Label>Search Data</Combobox.Label>
                    <Combobox.Control>
                      <Combobox.Input placeholder="e.g. Educational Advancement" w={"50vw"} />
                      <Combobox.IndicatorGroup>
                        <Combobox.ClearTrigger />
                      </Combobox.IndicatorGroup>
                    </Combobox.Control>
                    <Portal>
                      <Combobox.Positioner>
                        <Combobox.Content>
                          <Combobox.Empty>No items found</Combobox.Empty>

                          {collection.items.map((item) => (
                            <Combobox.Item key={item.title} item={item}>
                              {item.title}
                            </Combobox.Item>
                          ))}
                        </Combobox.Content>
                      </Combobox.Positioner>
                    </Portal>
                  </Combobox.Root>
                </VStack>
              </SimpleGrid>
            </AbsoluteCenter>
          </Box>
        </VStack >

      ) :
        // This is a placeholder for the mobile view to be updated later  
        // Search  
        (
          <Container as={'main'} maxW={'7xl'} h={"100%"}>
            <HStack as={"section"}>
              <article>
                <GemIcon />
                <Box>
                  <Heading as="h3">Search</Heading>
                  <InputGroup endElement={endElement} >
                    <Input
                      list={searchlist.toString()}
                      ref={inputRef}
                      placeholder="Email"
                      value={value}
                      onChange={(e) => {
                        setValue(e.currentTarget.value)
                      }}
                    />
                  </InputGroup>
                </Box>
              </article>
            </HStack>
          </Container>
        )
    }</>
  );
}
