"use client"

import GemIcon from '../../components/about/gem-icon';
import {
  Container, Box, Text, CloseButton, Input, InputGroup, Button, AbsoluteCenter, VStack, HStack, Heading,
  Link as ChakraLink, Center, SimpleGrid, GridItem, Stack, Card, Image as ChakraImage
} from '@chakra-ui/react';
import { useRef, useState } from "react"
import { poppins } from '../../components/ui/fonts';
import checkDeviceSize from '../../components/ui/breakpoints';

export default function Search() {

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
            <Text _light={{ color: "white" }}>
              <InputGroup endElement={endElement}>
                <Input
                  ref={inputRef}
                  placeholder="Email"
                  value={value}
                  onChange={(e) => {
                    setValue(e.currentTarget.value)
                  }}
                />
              </InputGroup>
            </Text>
          </VStack>
        </SimpleGrid>
        </AbsoluteCenter>
      </Box>

        {/* Search */}
        <Container as={'main'} maxW={'7xl'} h={"100%"}>
          <HStack as={"section"}>
            <article>
              <GemIcon />
              <Box>
                <Heading as="h3">Search</Heading>
                <InputGroup endElement={endElement}>
                  <Input
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
      </VStack >

      ) : 
      // This is a placeholder for the mobile view to be updated later  
      null
    }</>
  );
}
