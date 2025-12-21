import Image from 'next/image';
import NextLink from 'next/link';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import ServiceCard from '@/components/services/service-card';
import SupportCard from '@/components/services/support-card';
import FaqItem from '@/components/services/faq-item';
import { services, supportOptions, faqItems } from '@/data/services';
import {
  Container, Box, Text, Button, AbsoluteCenter, VStack, HStack, Heading,
  Link as ChakraLink, Center, SimpleGrid, GridItem, Stack, Card, Image as ChakraImage
} from '@chakra-ui/react';
import { HeaderTemplate, PageBuilder, BodyTemplate, SectionTemplate } from '@/components/page-builder/template';


export default function Services() {
  return (
    <>
      <PageBuilder>
        <HeaderTemplate
          image='/services/2033.jpg'
          imageLabel='Services Hero'
          description='At MOKSE, we offer a range of services designed to empower and support our community' />
        <BodyTemplate>
          <SectionTemplate title="Take the Next Step Today!" description="
            Whether you're seeking support for yourself or your organization, we
            invite you to learn more about our services and how we can help.">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </SectionTemplate>

        </BodyTemplate>
      </PageBuilder>

      <main>
        <section>
          <h1>Services</h1>
          <p>
            At MOKSE, we offer a range of services designed to empower and
            support our community
          </p>
        </section>

        <section>
          <h2>Take the Next Step Today!</h2>
          <p>
            Whether you&apos;re seeking support for yourself or your organization, we
            invite you to learn more about our services and how we can help.
          </p>
          <div>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section>
          <Image
            src="/services/volunteer.jpg"
            alt="Volunteer with us"
            width={600}
            height={400}
          />
          <div>
            <h3>Make a Difference – Get Involved!</h3>
            <p>
              Are you passionate about helping justice-impacted individuals? We
              need compassionate volunteers to assist in various roles, including
              mentorship, tutoring, and administrative support.
            </p>

            <ChakraLink asChild>
              <NextLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSfQtlMlWUxXDEr_bq0dUIBf2hNIX0VZF1r6GzZ_6FSSQ6lvYw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Involved
              </NextLink>
            </ChakraLink>
          </div>
        </section>

        <section>
          <div>
            {supportOptions.map((option) => (
              <SupportCard key={option.title} {...option} />
            ))}
          </div>
          <ChakraLink asChild>
            <NextLink
              href="https://www.paypal.com/donate/?hosted_button_id=G46WV8T5NG85A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </NextLink>
          </ChakraLink>

        </section>

        <section>
          <p>Find Out How MoKse Supports Change</p>
          <h2>Frequently Asked Questions</h2>
          <div>
            {faqItems.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
