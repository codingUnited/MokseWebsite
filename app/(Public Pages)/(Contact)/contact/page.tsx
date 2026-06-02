"use client";

import ContactForm from "@/components/contact/contact-form";
import { contactInfo, socialLinks } from "@/data/contact";
import NextLink from "next/link";

import {
  Box,
  Text,
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
        image="/assets/contact/1500.jpg"
        imageLabel="Contact Us Hero"
        description="Find out how you can contribute and make a positive impact in your community"
      />

      <SectionTemplate>
        <VStack
          justify={"center"}
          align={"center"}
          gap={{ base: 4, md: 6 }}
          mb={{ base: 6, md: 10 }}
          px={{ base: 4, md: 8 }}
          w={"100%"}
        >
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            textAlign={"center"}
          >
            Get in Touch
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            textAlign={"center"}
            maxW={{ base: "100%", md: "container.md" }}
          >
            We&apos;re here to support you. Reach out to learn more about our
            services, volunteer opportunities, and ways to contribute
          </Text>

          <Stack
            direction={"row"}
            justify={"center"}
            align={"center"}
            gap={{ base: 3, md: 4 }}
            wrap={"wrap"}
          >
            {socialLinks.map((link) => (
              <ChakraLink asChild key={link.url}>
                <NextLink
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name={link.platform}
                    border={"lg"}
                    borderRadius={"full"}
                    size={8}
                    bg={"teal.focusRing"}
                    borderColor={"teal.focusRing"}
                    aria-label={`Visit our ${link.platform} page`}
                  />
                </NextLink>
              </ChakraLink>
            ))}
          </Stack>

          {/* Contact Info Cards Section */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            gap={{ base: 4, md: 6 }}
            w={"100%"}
            mt={{ base: 4, md: 6 }}
          >
            {contactInfo.map((info) => (
              <Card.Root
                key={info.label}
                variant="outline"
                w={"100%"}
                minH={{ base: "auto", md: "180px" }}
              >
                <Card.Body p={{ base: 4, md: 6 }}>
                  <Avatar.Root my={{ base: 2, md: 4 }} boxSize={{ base: 10, md: 12 }}>
                    <Icon name={info.icon} size={6} />
                  </Avatar.Root>
                  <Card.Title className={poppins.className} fontSize={{ base: "md", md: "lg" }}>
                    {info.label}
                  </Card.Title>
                  <ChakraLink
                    href={info.phoneNumber ?? info.value}
                    fontSize={{ base: "sm", md: "md" }}
                    wordBreak={"break-word"}
                  >
                    {info.value}
                  </ChakraLink>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Google Maps Embed Section */}
        <Box
          as={"section"}
          w={"100%"}
          px={{ base: 4, md: 8 }}
        >
          <Box
            asChild
            width="100%"
            h={{ base: "280px", sm: "340px", md: "420px", lg: "500px" }}
          >
            <iframe
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              src="https://maps.google.com/maps?q=497%20Hooksett%20Road%2C%20Suite%20362%2C%20Manchester%2C%20NH%2003104&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              title="497 Hooksett Road, Suite 362, Manchester, NH 03104"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="497 Hooksett Road, Suite 362, Manchester, NH 03104"
            ></iframe>
          </Box>
        </Box>

        {/* Contact Form Section */}
        <Box as={"section"} w={"100%"}>
          <ContactForm />
        </Box>
      </SectionTemplate>
    </PageBuilder>
  );
}
