'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { HStack, Container, Link as ChakraLink, Button, useBreakpointValue } from '@chakra-ui/react'

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
                    <HStack justifyContent={'space-between'} pl={16}>
                        <ChakraLink asChild px={8}>
                            <NextLink href="/">
                                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={48} />
                            </NextLink>
                        </ChakraLink>
                        <HStack justifyContent={'space-evenly'}>
                            <ChakraLink asChild><NextLink href="/">
                                Home
                            </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild><NextLink href="/about-us">
                                About Us
                            </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/services">
                                    Services
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/contact">
                                    Contact
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <Button>
                                    <NextLink href="tel:+16034961535">
                                        Call Us Today
                                    </NextLink>
                                </Button>
                            </ChakraLink>
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
        </nav>

    )
};