"use client";

import Image from "next/image";
import ContactForm from "../../../components/contact/contact-form";
import { contactInfo, socialLinks, mapEmbedUrl } from "../../../data/contact";

import NextLink from "next/link";
import {
  Box,
  Text,
  HStack,
  Heading,
  Card,
  Link as ChakraLink,
  Image as ChakraImage,
  Avatar,
} from "@chakra-ui/react";

import checkDeviceSize from "@/components/ui/breakpoints";
import {
  HeaderTemplate,
  PageBuilder,
} from "@/components/page-builder/template";
import { Icon } from "@/components/ui/icons/icon";
import { poppins } from "@/components/ui/fonts";

export default function Contact() {
  const notMobileDevice = checkDeviceSize();
  return (
    <>
      {notMobileDevice ? (
        <PageBuilder>
          <HeaderTemplate
            title="Contact Us"
            imageHeight={"52.1vh"}
            image="/assets/contact/1500.jpg"
            imageLabel="Contact Us Hero"
            description="Find out how you can contribute and make a positive impact in your community"
          />

          <div>
            <Heading as={"h2"}>Get in Touch</Heading>
            <Text>
              We're here to support you. Reach out to learn more about our
              services, volunteer opportunities, and ways to contribute
            </Text>

            <HStack justify={"left"} align={"center"} gap={4}>
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
                    <span>{link.platform}</span>
                  </NextLink>
                </ChakraLink>
              ))}
            </HStack>
            {/* Contact Info Cards Section */}
            <HStack>
              {contactInfo.map((info) => {
                info.value ? (
                  <a href={info.value}>{info.value}</a>
                ) : (
                  <Text>{info.value}</Text>
                );

                return (
                  <Card.Root
                    key={info.label}
                    variant="outline"
                    w={"sm"}
                    h={"xs"}
                  >
                    <Card.Body>
                      <Avatar.Root my={4} boxSize={12}>
                        <Icon name={info.icon} size={6} />
                      </Avatar.Root>
                      <Card.Title className={poppins.className}>
                        {info.label}
                      </Card.Title>
                      <ChakraLink href={info.phoneNumber}>{info.value}</ChakraLink>
                    </Card.Body>
                  </Card.Root>
                );
              })}
            </HStack>

            {/* Google Maps Embed Section */}
            <section>
              <Box asChild width="100%" height="50vh">
                <iframe
                  loading="lazy"
                  // src={mapEmbedUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  src="https://maps.google.com/maps?q=497%20Hooksett%20Road%2C%20Suite%20362%2C%20Manchester%2C%20NH%2003104&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                  title="497 Hooksett Road, Suite 362, Manchester, NH 03104"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="497 Hooksett Road, Suite 362, Manchester, NH 03104"
                ></iframe>
              </Box>
              {/* Contact Form Section */}
            </section>
            <section>
              <ContactForm />
            </section>
          </div>

          <main></main>
        </PageBuilder>
      ) : (
        <>
          <main>
            {/* Hero Section */}
            <section>
              <ChakraImage asChild>
                <Image
                  src="/assets/contact/1500.jpg"
                  alt="Contact Mokse"
                  fill
                  priority
                />
              </ChakraImage>
              <div>
                <h1>Contact Us</h1>
                <p>
                  Find out how you can contribute and make a positive impact in
                  your community
                </p>
              </div>
            </section>

            {/* Get In Touch Section */}
            <section>
              <div>
                <h2>Get in Touch</h2>
                <p>
                  We&apos;re here to support you. Reach out to learn more about
                  our services, volunteer opportunities, and ways to contribute
                </p>
                <div>
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${link.platform} page`}
                    >
                      <Icon name={link.platform} size={10} />
                      <span>{link.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Info Cards Section */}
            <section>
              <div>
                {contactInfo.map((info) => {
                  const content = info.phoneNumber ? (
                    <a href={info.phoneNumber}>{info.value}</a>
                  ) : (
                    <p>{info.value}</p>
                  );

                  return (
                    <article key={info.label}>
                      hello
                      <div>{info.icon}</div>
                      <h4>{info.label}</h4>
                      {content}
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Google Maps Embed Section */}
            <section>
              <div>
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mokse Office Location"
                />
              </div>
            </section>

            {/* Contact Form Section */}
            <section>
              <div>
                <ContactForm />
              </div>
            </section>
          </main>
          )
        </>
      )}
    </>
  );
}
