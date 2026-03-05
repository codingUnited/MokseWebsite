import Image from "next/image";
import NextLink from "next/link";
import ServiceCard from "../../../components/services/service-card";
import SupportCard from "../../../components/services/support-card";
import FaqItem from "../../../components/services/faq-item";
import { services, supportOptions, faqItems } from "../../../data/services";
import { Link as ChakraLink, SimpleGrid } from "@chakra-ui/react";
import {
  HeaderTemplate,
  PageBuilder,
  BodyTemplate,
  SectionTemplate,
} from "../../../components/page-builder/template";

export default function Services() {
  return (
    <>
      <PageBuilder>
        <HeaderTemplate
          title="Services"
          image="/assets/services/2033.jpg"
          imageLabel="Services Hero"
          description="At MOKSE, we offer a range of services designed to empower and support our community"
        />
        <BodyTemplate>
          <SectionTemplate
            title="Take the Next Step Today!"
            description="
            Whether you're seeking support for yourself or your organization, we
            invite you to learn more about our services and how we can help."
          >
            <SimpleGrid columns={[1, 2, 3]} gap={4}>
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </SimpleGrid>
          </SectionTemplate>
          <section>
            
              
            
          </section>
          <section>

              <SectionTemplate
                          title="Make a Difference!"
                          description="Get Involved!
                          Your support can make a significant impact on the lives of justice-impacted individuals. Explore the various ways you can contribute to our mission and help us create a more inclusive and supportive community."
              >

              <SimpleGrid columns={[null, null, 3]}>
                {supportOptions.map((option) => (
                  <SupportCard key={option.title} {...option} />
                ))}
              </SimpleGrid>
            </SectionTemplate>            
          </section>
          <FaqItem />
        </BodyTemplate>
      </PageBuilder>
    </>
  );
}
