"use client"

import { GemIcon } from '@/components/ui/icons';
import {
  Container, Box, Text, CloseButton,
  Fieldset, Field, Input, InputGroup, AbsoluteCenter, Card, Stack, VStack, HStack, Heading,
  SimpleGrid
} from '@chakra-ui/react';
import { useRef, useState } from "react"
import { poppins } from '@/components/ui/fonts';
import checkDeviceSize from '@/components/ui/breakpoints';
import mockData from '@/app/(Pages)/search/mock.json'


import {
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

type BlogPost = {
  title: string,
  id: number,
  dateFull: string,
  dateY: number,
  dateM: number,
  dateD: number
}

export default function Search() {
  //Retrieve mock data from json file
  const [searchlist, setSearchlist] = useState<BlogPost[] | null>(null)

  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, set, filter } = useListCollection<BlogPost>({
    initialItems: [],
    itemToString: (item) => item.title,
    itemToValue: (item) => item.id.toString(),
    filter: contains,
  })
  // const handleInputChange = async (details: Fieldset.InputValueChangeDetails) => {
  //   const query = details.inputValue

  //   if (query.length < 2) return
  //   const response = await fetch(`/api/blog/search?q=${query}`)
  //   const data = await response.json()

  //   set(data)
  //   // Apply filter to the collection 
  //   filter(details.inputValue)
  //   /////////////////
  // }



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
                  <Card.Root h={'md'} w={'sm'}>
                    <Stack>
                      <Fieldset.Root>
                        <Stack>
                          <Fieldset.Legend>Search</Fieldset.Legend>
                          <Fieldset.HelperText>Enter your search query</Fieldset.HelperText>
                        </Stack>
                        <Fieldset.Content>
                          <Field.Root>
                            <Field.Label>Search Data</Field.Label>
                            <Input type="name" />
                            <datalist ></datalist>
                            </Field.Root>

                        </Fieldset.Content>
                      </Fieldset.Root>
                      <Card.Body>

                      </Card.Body>
                    </Stack>


                  </Card.Root>


                  {/* <Fieldset.Root<BlogPost>
                    collection={collection}
                    onInputValueChange={handleInputChange}
                    onValueChange={(details) => {
                      const post = collection.items.find(item => item.id.toString() === details.value[0]);
                      if (post) setSearchlist([post])
                    }}
                  >
                    <Fieldset.Label>Search Data</Fieldset.Label>
                    <Fieldset.Control>

                      <Fieldset.Input placeholder="e.g. Educational Advancement" w={"50vw"} />
                      <Fieldset.IndicatorGroup>
                        <Fieldset.ClearTrigger />
                      </Fieldset.IndicatorGroup>

                    </Fieldset.Control>
                    <Portal>
                      <Fieldset.Positioner>
                        <Fieldset.Content>
                          <Fieldset.Empty>No items found</Fieldset.Empty>
                          <Fieldset.ItemGroup>
                            {collection.items.map((item) => (
                              <Fieldset.Item key={item.id} item={item} value={item.id.toString()}>
                                {item.title}
                              </Fieldset.Item>
                            ))}
                          </Fieldset.ItemGroup>
                        </Fieldset.Content>
                      </Fieldset.Positioner>
                    </Portal>
                  </Fieldset.Root> */}
                  <SimpleGrid>
                    {(searchlist ?? []).map((post) => (
                      <Box key={post.id} p={2} borderBottom={"1px solid gray"} bg={"blue"} boxSize={24}>
                        <Text textAlign={"left"} fontWeight={"bold"}>{post.title}</Text>
                        <Text textAlign={"left"} fontSize={"sm"} color={"gray.400"}>{post.dateFull}</Text>
                      </Box>
                    ))}

                  </SimpleGrid>
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
                  <InputGroup endElement={endElement}>
                    <Input
                      list={searchlist?.toString() ?? ""}
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
