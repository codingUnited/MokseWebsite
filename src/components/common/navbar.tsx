'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { HStack, Container, Link as ChakraLink, Button, Text } from '@chakra-ui/react';
import { MdBrightness4 as MdMoon, MdBrightness5 as MdSun } from 'react-icons/md';
import { useColorMode } from '../ui/color-mode';
import { useEffect, useState } from 'react';
import { openSans } from '../ui/fonts';
import useDeviceSize from '../ui/breakpoints';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const deviceSize = useDeviceSize();
    const notMobileDevice =
        deviceSize !== 'base'
        &&
        deviceSize !== 'sm';

    const [isMounted, setIsMounted] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    // Mount check for screen size check
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Check device scroll position for navbar position
    useEffect(() => {
        if (!isMounted) return;
        const handleScroll = () => {
            const scrollPosition = window?.scrollY;
            setIsFixed(scrollPosition >= 50);
        };
        handleScroll();
        window?.addEventListener('scroll', handleScroll);
        return () => window?.removeEventListener('scroll', handleScroll);
    }, [isMounted]);

    // Container props
    const ContainerProps = {
        h: notMobileDevice ? ('10vh') : ('5vh'),
        zIndex: 1,
        position: isFixed ? ('fixed') : ('absolute'),
        fluid: true,
        py:
            isFixed ?
                notMobileDevice ? (8) : (2) :
                notMobileDevice ? (8) : (5),
        transition: "all 0.2s ease-in-out",
        transform:
            isFixed ? ('translateY(0)') : ('translateY(-20px)'),
        opacity: isFixed ? 1 : 0.9,
        boxShadow: isFixed ? '2xl' : 'none',
        bg:
            isFixed ?
                colorMode === "light" ? 'black'
                    : 'blackAlpha.950'
                : 'transparent',
        className: openSans.className,
    } as const;

    // Nav text props
    const navTextProps = {
        fontSize: '24px',
        fontWeight: 600,
        _light: { color: 'white' },
    } as const;

    return (
        <nav>

            <Container {...ContainerProps} >
                {notMobileDevice ? (
                    <HStack justifyContent={'space-between'} px={8}>
                        <ChakraLink asChild pl={8}  >
                            <NextLink href="/">
                                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={46} />
                            </NextLink>
                        </ChakraLink>
                        <HStack justifyContent={'space-evenly'} spaceX={6} px={8} >
                            <ChakraLink asChild>
                                <NextLink href="/">
                                    <Text {...navTextProps} >Home</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/about-us">
                                    <Text {...navTextProps}>About Us</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/services">
                                    <Text {...navTextProps}>Services</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/stop-the-stigma">
                                    <Text {...navTextProps}>Stop The Stigma</Text>
                                </NextLink>
                            </ChakraLink>
                            <ChakraLink asChild>
                                <NextLink href="/contact">
                                    <Text {...navTextProps}>Contact</Text>
                                </NextLink>
                            </ChakraLink>
                            <Button bg={'teal.focusRing'} variant="solid" rounded="md" size={'xl'}>
                                <ChakraLink asChild>
                                    <NextLink href="tel:+16034961535">
                                        <Text {...navTextProps}>Call Us Today</Text>
                                    </NextLink>
                                </ChakraLink>
                            </Button>
                            <Button
                                bg={isFixed ?
                                    (isMounted ? 'teal.focusRing' : 'teal.focusRing')
                                    : 'transparent'}
                                variant={isFixed ? "solid" : "ghost"}
                                rounded="md"
                                size={'xl'}
                                onClick={toggleColorMode}

                            > {isMounted && (colorMode === "light" ? <MdMoon /> : <MdSun />)}
                            </Button>
                        </HStack>
                    </HStack>) : (
                    <HStack justifyContent={'space-between'} px={1}>
                        <ChakraLink asChild>
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
    );
}
