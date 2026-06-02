"use client";

import Image from "next/image";
import NextLink from "next/link";
import ServiceCard from "@/components/services/service-card";
import SupportCard from "@/components/services/support-card";
import FaqItem from "@/components/services/faq-item";
import { services, supportOptions, faqItems } from "@/data/services";
import { Link as ChakraLink, SimpleGrid, Stack } from "@chakra-ui/react";
import {
  HeaderTemplate,
  PageBuilder,
  BodyTemplate,
  SectionTemplate,
} from "@/components/page-builder/template";

export default function Services() {
  return (
    <PageBuilder>
      <HeaderTemplate
        title="Services"
        image="/assets/services/2033.jpg"
        imageLabel="Services Hero"
        description="At MOKSE, we offer a range of services designed to empower and support our community."
      />
      
      <BodyTemplate>
        <SectionTemplate
          title="Take the Next Step Today!"
          description="Whether you're seeking support for yourself or your organization, we invite you to learn more about our services and how we can help."
        >
          {/* Swapped array syntax for explicit object mapping to ensure clean mobile scaling */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }} w="full">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </SimpleGrid>
        </SectionTemplate>

        <SectionTemplate
          title="Make a Difference!"
          description="Get Involved! Your support can make a significant impact on the lives of justice-impacted individuals. Explore the various ways you can contribute to our mission and help us create a more inclusive and supportive community."
        >
          {/* Converted HStack to a responsive Stack to ensure cards stack naturally on mobile rather than squishing */}
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="center"
            align="center"
            gap={{ base: 6, md: 8 }}
            wrap="wrap"
            pt={{ base: 4, md: 10 }}
            w="full"
          >
            {supportOptions.map((option) => (
              <SupportCard key={option.title} {...option} />
            ))}
          </Stack>
        </SectionTemplate>

        {/* Wrapped the FAQ section in the template to maintain unified padding and margins */}
        <SectionTemplate
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and support programs."
        >
          <FaqItem />
        </SectionTemplate>
      </BodyTemplate>
    </PageBuilder>
  );
}