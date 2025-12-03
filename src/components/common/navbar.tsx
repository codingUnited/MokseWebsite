'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { HStack, Container, Link as ChakraLink, Button, useBreakpointValue, Text, Icon } from '@chakra-ui/react'
import { MdBrightness4 as MdMoon, MdBrightness5 as MdSun } from "react-icons/md";
import { useColorMode } from '../ui/color-mode';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const { toggleColorMode, colorMode, } = useColorMode();

    const current = useBreakpointValue({
        base: "base",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
    });

    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window?.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window?.addEventListener('scroll', handleScroll);
        return () => window?.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav>
            <Container h={'10vh'} zIndex={1} position={isFixed ? 'fixed' : 'absolute'} fluid py={8} transition="all 0.2s ease-in-out"
                transform={isFixed ? 'translateY(0)' : 'translateY(-20px)'}
                opacity={isFixed ? 1 : 0.9} boxShadow={isFixed ? '2xl' : 'none'} bg={isFixed ? (colorMode === "light" ? 'black' : 'blackAlpha.950') : 'transparent'} >
                {current !== "base" && current !== "sm" ? (
                    <HStack justifyContent={'space-between'} px={8}>
                        <ChakraLink asChild pl={2}  >
                            <NextLink href="/">
                                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={48} />
                            </NextLink>
                        </ChakraLink>
                        <HStack justifyContent={'space-evenly'} spaceX={6} pr={8} >
                            <ChakraLink asChild>
                                <NextLink href="/">
                                    <Text textStyle={'md'} _light={{ color: "white" }}>Home</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/about-us">
                                    <Text textStyle={'md'} _light={{ color: "white" }}>About Us</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/services">
                                    <Text textStyle={'md'} _light={{ color: "white" }}>Services</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/contact">
                                    <Text textStyle={'md'} _light={{ color: "white" }} >Contact</Text>
                                </NextLink>
                            </ChakraLink>
                            <Button bg={'teal.focusRing'} variant="solid" rounded="md" size={'xl'}>
                                <ChakraLink asChild>
                                    <NextLink href="tel:+16034961535">
                                        <Text textStyle={'md'} _light={{ color: "white" }}>Call Us Today</Text>
                                    </NextLink>
                                </ChakraLink>
                            </Button>
                            <Button
                                bg={isFixed ?
                                    (colorMode === "light" ? 'teal.focusRing' : 'teal.focusRing')
                                    : 'transparent'}
                                variant={isFixed ? "solid" : "ghost"}
                                rounded="md"
                                size={'xl'}
                                onClick={toggleColorMode}

                            >
                                <Icon as={colorMode === "light" ? MdMoon : MdSun} />

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