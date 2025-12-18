'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { HStack, Container, Link as ChakraLink, Button, useBreakpointValue, Text } from '@chakra-ui/react';
import { MdBrightness4 as MdMoon, MdBrightness5 as MdSun } from 'react-icons/md';
import { useColorMode } from '../ui/color-mode';
import { useEffect, useState } from 'react';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navTextProps = {
    fontSize: '30px',
    fontWeight: 600,
    _light: { color: 'white' },
  };

  const containerProps = {
    h: '10vh',
    w: '75%',
    zIndex: 1,
    py: 8,
    position: isFixed ? 'fixed' : 'absolute',
    top: isFixed ? 0 : '0.3%',
    left: '15%',
    transition: 'all 0.2s ease-in-out',
    transform: isFixed ? 'translateY(0)' : 'translateY(-20px)',
    opacity: isFixed ? 1 : 0.9,
    boxShadow: isFixed ? '2xl' : 'none',
    bg: isFixed ? '#003300' : 'transparent',
  } as const;

  return (
    <nav>
      <Container {...containerProps} fluid className={openSans.className}>
        {!isMobile ? (
          <HStack justify="space-between" px={8}>
            <ChakraLink asChild>
              <NextLink href="/">
                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={235} height={55} />
              </NextLink>
            </ChakraLink>

            <HStack gap={6}>
              <ChakraLink asChild><NextLink href="/"><Text {...navTextProps}>Home</Text></NextLink></ChakraLink>
              <ChakraLink asChild><NextLink href="/about-us"><Text {...navTextProps}>About Us</Text></NextLink></ChakraLink>
              <ChakraLink asChild><NextLink href="/services"><Text {...navTextProps}>Services</Text></NextLink></ChakraLink>
              <ChakraLink asChild><NextLink href="/contact"><Text {...navTextProps}>Contact</Text></NextLink></ChakraLink>

              <Button bg="teal.focusRing" rounded="md" size="xl">
                <ChakraLink asChild>
                  <NextLink href="tel:+16034961535">
                    <Text {...navTextProps}>Call Us Today</Text>
                  </NextLink>
                </ChakraLink>
              </Button>

              <Button
                onClick={toggleColorMode}
                bg={isFixed ? 'teal.focusRing' : 'transparent'}
                variant={isFixed ? 'solid' : 'ghost'}
                rounded="md"
                size="xl"
              >
                {colorMode === 'light' ? <MdMoon /> : <MdSun />}
              </Button>
            </HStack>
          </HStack>
        ) : (
          <HStack justify="space-between" py={3.5} px={1}>
            <ChakraLink asChild>
              <NextLink href="/">
                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={48} />
              </NextLink>
            </ChakraLink>

            <Button>Menu</Button>
          </HStack>
        )}
      </Container>
    </nav>
  );
}
