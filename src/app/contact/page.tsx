"use client"
import Image from 'next/image';
import ContactForm from '../../components/contact/contact-form';
import { contactInfo, socialLinks, mapEmbedUrl } from '../../data/contact';

import {
  Container, Box, Text, AbsoluteCenter, VStack, HStack, Heading,
  Link as ChakraLink, SimpleGrid, Image as ChakraImage
} from '@chakra-ui/react';
import { poppins } from '../../components/ui/fonts';

import checkDeviceSize from '@/components/ui/breakpoints';
import { HeaderTemplate, PageBuilder, BodyTemplate, SectionTemplate } from '../../components/page-builder/template';

export default function Contact() {
  const notMobileDevice = checkDeviceSize();
  return (
    <>

      {
        notMobileDevice ? (

          <PageBuilder>
            <HeaderTemplate
              title='Contact Us'
              imageHeight={'52.1vh'}
              image='/assets/contact/1500.jpg'
              imageLabel='Contact Us Hero'
              description='Find out how you can contribute and make a positive impact in your community'
              />



            <main>
              {/* Get In Touch Section */}
              <section>
                <div>
                  <h2>Get in Touch</h2>
                  <p>
                    We&apos;re here to support you. Reach out to learn more about our services, volunteer opportunities, and ways to contribute
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
                        {link.icon}
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
                    const content = info.href ? (
                      <a
                        href={info.href}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    );

                    return (
                      <article
                        key={info.label}
                      >
                        <div>
                          {info.icon}
                        </div>
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

          </PageBuilder>
        ) : (
          <>


            <main>
              {/* Hero Section */}
              <section>
                <Image
                  src="/assets/contact/1500.jpg"
                  alt="Contact Mokse"
                  fill
                  priority
                />
                <div>
                  <h1>Contact Us</h1>
                  <p>Find out how you can contribute and make a positive impact in your community</p>
                </div>
              </section>

              {/* Get In Touch Section */}
              <section>
                <div>
                  <h2>Get in Touch</h2>
                  <p>
                    We&apos;re here to support you. Reach out to learn more about our services, volunteer opportunities, and ways to contribute
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
                        {link.icon}
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
                    const content = info.href ? (
                      <a
                        href={info.href}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    );

                    return (
                      <article
                        key={info.label}
                      >
                        <div>
                          {info.icon}
                        </div>
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
            </main> )
          </>
        )
      }
    </>
  );
}
