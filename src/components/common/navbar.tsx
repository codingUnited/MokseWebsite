'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { HStack, Container, Link as ChakraLink, Button, useBreakpointValue, Text } from '@chakra-ui/react'

export default function Navbar() {

    const current = useBreakpointValue({
        base: "base",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
    });

    return (
        <nav>
            <Container h={'10vh'} zIndex={1} position={"absolute"} w={'100vw'} py={8}>
                {current !== "base" && current !== "sm" ? (
                    <HStack justifyContent={'space-between'} px={8}>
                        <ChakraLink asChild pl={2}>
                            <NextLink href="/">
                                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={48} />
                            </NextLink>
                        </ChakraLink>
                        <HStack justifyContent={'space-evenly'} spaceX={6} pr={8}>
                            <ChakraLink asChild>
                                <NextLink href="/">
                                    <Text textStyle={'md'} color={"white"}>Home</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/about-us">
                                    <Text textStyle={'md'} color={"white"}>About Us</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/services">
                                    <Text textStyle={'md'} color={"white"}>Services</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/contact">
                                    <Text textStyle={'md'} color={"white"}>Contact</Text>
                                </NextLink>
                            </ChakraLink>
                            <Button bg={'teal.focusRing'} variant="solid" rounded="md" size={'xl'}>
                                <ChakraLink asChild>
                                    <NextLink href="tel:+16034961535">
                                        <Text textStyle={'md'} color={"white"}>Call Us Today</Text>
                                    </NextLink>
                                </ChakraLink>
                            </Button>
                        </HStack>
                    </HStack>
                ) : (
                    <HStack justifyContent={'space-between'} py={3.5} px={1}>
                        <ChakraLink asChild >
                            <NextLink href="/">
                                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={48} />
                            </NextLink>
                        </ChakraLink>
                        <Button>
                            Menu
                        </Button>

                    </HStack>
                )}


            </Container>
        </nav >

    )
};