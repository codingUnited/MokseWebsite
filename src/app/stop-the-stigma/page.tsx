"use client";
import { useEffect, useState } from "react";
import NextLink from 'next/link';
import { Card, For, Stack, Center, Text, VStack, HStack, Image, Heading, Button, Strong, Link as ChakraLink, } from "@chakra-ui/react";
import { useColorMode } from "../../components/ui/color-mode";
import { poppins } from "../../components/ui/fonts"
import { HeaderTemplate, PageBuilder, BodyTemplate, SectionTemplate } from '../../components/page-builder/template';
import FeatureCard from "../../components/home/feature-card";

import { FaRegObjectGroup as FaObjectGroup, FaRegListAlt as FaListAlt, FaRegNewspaper as FaNewspaper, FaRegKeyboard as FaKeyboard } from "react-icons/fa";
import { MdBrightness4 as MdMoon, MdBrightness5 as MdSun } from 'react-icons/md';
export default function StopTheStigma() {
  const [countdownTarget, setCountdownTarget] = useState<{
    target: number;
  }>({
    // Set the date we're counting down to
    target: new Date("Feb 19, 2026 00:00:00").getTime(),
  });
  const [countdown, setCountdown] = useState<{
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
  }>({
    // Initial time values
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      // Find the distance between now and the countdown date
      const distance = countdownTarget.target - now;
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(updateTimer);
        setCountdown((prev) => ({
          ...prev,
          days: "O",
          hours: "V",
          minutes: "E",
          seconds: "R",
        }));
        return;
      }
      setCountdown((prev) => ({
        ...prev,
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      }));
    }, 1000);
    return () => clearInterval(updateTimer);

  }, []);

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <PageBuilder>
        <HeaderTemplate
          image='/assets/stop-the-stigma/stop-stigma-auditorium.webp'
          imageHeight="100vh"
          imageLabel='Stop The Stigma Conference'
          title='Stop The Stigma Conference'
        />

        <Card.Root>
          <Card.Body>
            <Stack gap={"xl"} direction={'row'}>
              <For each={[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ]}>
                {(item) => {
                  const { label, value } = item;
                  return (
                    <Card.Root key={label} bg={'blackAlpha.950'} w={'75px'}>
                      <Card.Body color={colorMode === "dark" ? "black" : "white"}>
                        <Center>
                          <VStack>
                            <Text className={poppins.className}>{value}</Text>
                            <Text className={poppins.className}>{label}</Text>
                          </VStack>
                        </Center>
                      </Card.Body>
                    </Card.Root>
                  )
                }}
              </For>
            </Stack>
          </Card.Body>
        </Card.Root>
        <HStack>
          <Image src='/assets/stop-the-stigma/Linkedin-Carousels.png' />
          <VStack>
            <Heading as="h1" size="lg" mb={4}>
              What is STOP THE STIGMA?
            </Heading>

            <Text>
              <Strong>STOP THE STIGMA</Strong> is an annual conference centered on the stigma of disability and incarceration. Now in its fourth year the conference continues to provide a space for justice impacted individuals to have their voices and stories heard. Presented by Mokse and The Community, STOP THE STIGMA integrates innovative media, storytelling, and design to engage audiences and amplify impact. Together, we build an inclusive platform to challenge assumptions and inspire action.
            </Text>
            <Button bg={'teal.focusRing'} variant="solid" rounded="md" size={'xl'}>
              <ChakraLink asChild>
                <NextLink href="https://docs.google.com/forms/d/e/1FAIpQLSe4Z0LI5JpkPH3eKBw-8ANquRWRxNJKwpS465KOStu3Jb4v_A/viewform?usp=embed_facebook">
                  <Text>Register Here</Text>
                </NextLink>
              </ChakraLink>
            </Button>


          </VStack>

        </HStack>
        <HeaderTemplate
          image='/assets/stop-the-stigma/stop-stigma-sect2_background.webp'
          imageHeight="100vh"
          imageLabel='Stop The Stigma Conference'
        />
        Confrence Highlights
        <FeatureCard
          title={'Opening Night Film - Being Michelle'}
          description={'A groundbreaking documentary that sets the tone for the conference by centering the lived experience of a Deaf woman navigating incarceration and disability.'}
          icon={<FaKeyboard />}

        />
        <FeatureCard
          title={'Panels on Race, Incarceration, and Disability'}
          description={'Thought-provoking conversations that tackle the intersections of systemic racism, ableism, and mass incarceration—areas where stigma and structural barriers collide most powerfully.'}
          icon={<FaNewspaper />}
        />
        <FeatureCard
          title={'Theatrical Premiere - Brick by Brick'}
          description={'A one-act play debuting at the conference, offering a creative lens into stories of resilience, justice, and belonging.'}
          icon={<FaListAlt />}
        />
        <FeatureCard
          title={'35 Inspiring Speakers'}
          description={'A diverse lineup of national leaders, educators, advocates, and directly impacted individuals sharing expertise, lived experience, and visions for inclusive futures.'}
          icon={<FaObjectGroup />}
        />

        <section className="elementor-section elementor-top-section elementor-element elementor-element-ln1z48d elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default" data-id="ln1z48d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4292f5a" data-id="4292f5a" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-6d93f44 elementor-widget elementor-widget-image" data-id="6d93f44" data-element_type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img fetchPriority="high" decoding="async" width="1080" height="1350" src="https://mokse.org/wp-content/uploads/2025/12/Linkedin-Carousels.png" className="attachment-full size-full wp-image-1852" alt="Stop The Stigma Conference Flyer" srcSet="https://mokse.org/wp-content/uploads/2025/12/Linkedin-Carousels.png 1080w, https://mokse.org/wp-content/uploads/2025/12/Linkedin-Carousels-240x300.png 240w, https://mokse.org/wp-content/uploads/2025/12/Linkedin-Carousels-819x1024.png 819w, https://mokse.org/wp-content/uploads/2025/12/Linkedin-Carousels-768x960.png 768w" sizes="(max-width: 1080px) 100vw, 1080px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8c8ff0" data-id="a8c8ff0" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-a893ccd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a893ccd" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6534f2c" data-id="6534f2c" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-fc9b946 elementor-widget elementor-widget-heading" data-id="fc9b946" data-element_type="widget" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h1 className="elementor-heading-title elementor-size-default">What is STOP THE STIGMA?</h1>				</div>
                        </div>
                        <div className="elementor-element elementor-element-2d62856 elementor-widget elementor-widget-text-editor" data-id="2d62856" data-element_type="widget" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>STOP THE STIGMA is an annual conference centered on the stigma of disability and incarceration. Now in itsfourth year the conference continues to provide a space for justice impacted individuals to have their voices and stories heard. Presented by Mokse and The Community, STOP THE STIGMA integrates innovative media, storytelling, and design to engage audiences and amplify impact. Together, we build an inclusive platform to challenge assumptions and inspire action.</p>								</div>
                        </div>
                        <div className="elementor-element elementor-element-319cf5c elementor-align-left elementor-widget elementor-widget-button" data-id="319cf5c" data-element_type="widget" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a className="elementor-button elementor-button-link elementor-size-sm" href="https://docs.google.com/forms/d/e/1FAIpQLSe4Z0LI5JpkPH3eKBw-8ANquRWRxNJKwpS465KOStu3Jb4v_A/viewform?usp=embed_facebook">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Register Here</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </PageBuilder >
    </>
  );
}
