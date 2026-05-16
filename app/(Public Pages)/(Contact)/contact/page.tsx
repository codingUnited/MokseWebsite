"use client";

import NextLink from "next/link";
import ContactForm from "@/components/contact/contact-form";
import { contactInfo, socialLinks, mapEmbedUrl } from "@/data/contact";

import {
  Box,
  Text,
  HStack,
  Stack,
  Heading,
  Card,
  Link as ChakraLink,
  Avatar,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  HeaderTemplate,
  PageBuilder,
  SectionTemplate,
} from "@/components/page-builder/template";
import { Icon } from "@/components/ui/icons/icon";
import { poppins } from "@/components/ui/fonts";

export default function Contact() {
  return (
    <PageBuilder>
      <HeaderTemplate
        title="Contact Us"
        imageHeight={{ base: "40vh", md: "52.1vh" }}
        image="/assets/contact/1500.jpg"
        imageLabel="Contact Us Hero"
        description="Find out how you can contribute and make a positive impact in your community"
      />

      <SectionTemplate>
        <VStack justify={"center"} align={"center"} gap={{ base: 8, md: 10 }} mb={12} px={{ base: 4, md: 0 }}>
          <VStack gap={4} textAlign="center" maxW="3xl">
            <Heading as={"h2"} textStyle={{ base: "3xl", md: "4xl" }}>
              Get in Touch
            </Heading>
            <Text textStyle={{ base: "md", md: "lg" }}>
              We're here to support you. Reach out to learn more about our
              services, volunteer opportunities, and ways to contribute.
            </Text>
          </VStack>

          {/* Social Links - Using a wrapping Row to prevent overflow on tiny screens */}
          <Stack direction="row" wrap="wrap" justify="center" align="center" gap={6}>
            {socialLinks.map((link) => (
              <ChakraLink asChild key={link.url} _hover={{ textDecoration: "none" }}>
                <NextLink
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HStack gap={3}>
                    <Icon
                      name={link.platform}
                      border={"lg"}
                      borderRadius={"full"}
                      size={10}
                      bg={"teal.focusRing"}
                      borderColor={"teal.focusRing"}
                      aria-label={`Visit our ${link.platform} page`}
                    />
                    <Text display={{ base: "none", sm: "block" }} fontWeight="medium">
                      {link.platform}
                    </Text>
                  </HStack>
                </NextLink>
              </ChakraLink>
            ))}
          </Stack>

          {/* Contact Info Cards - Responsive Grid to stack on mobile, 3 columns on desktop */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full" maxW="6xl" mt={4}>
            {contactInfo.map((info) => {
              return (
                <Card.Root
                  key={info.label}
                  variant="outline"
                  w="full"
                  minH="200px"
                  alignItems="center"
                  textAlign="center"
                >
                  <Card.Body display="flex" flexDirection="column" alignItems="center">
                    <Avatar.Root my={4} boxSize={14} bg="transparent">
                      <Icon name={info.icon} size={8} color="teal.focusRing" />
                    </Avatar.Root>
                    <Card.Title className={poppins.className} mb={3}>
                      {info.label}
                    </Card.Title>
                    {info.phoneNumber ? (
                      <ChakraLink href={info.phoneNumber} color="teal.focusRing">
                        {info.value}
                      </ChakraLink>
                    ) : (
                      <Text>{info.value}</Text>
                    )}
                  </Card.Body>
                </Card.Root>
              );
            })}
          </SimpleGrid>
        </VStack>

        {/* Map & Form Section - Side by Side on Desktop, Stacked on Mobile */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} w="full" maxW="7xl" mx="auto" pb={12}>
          <Box
            as="section"
            w="100%"
            h={{ base: "40vh", lg: "auto" }}
            minH="400px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
          >
            <iframe
              loading="lazy"
              src={mapEmbedUrl || "https://maps.google.com/maps?q=497%20Hooksett%20Road%2C%20Suite%20362%2C%20Manchester%2C%20NH%2003104&t=m&z=10&output=embed&iwloc=near"}
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              title="497 Hooksett Road, Suite 362, Manchester, NH 03104"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mokse Office Location"
            />
          </Box>
          <Box as="section" w="100%">
            <ContactForm />
          </Box>
        </SimpleGrid>
      </SectionTemplate>
    </PageBuilder>
  );
}