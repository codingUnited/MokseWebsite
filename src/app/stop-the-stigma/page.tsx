"use client";
import { useEffect, useState } from "react";

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
    return () => {
      let updateTimer = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime();
        // Find the distance between now and the countdown date
        let distance = countdownTarget.target - now;
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
      clearInterval(updateTimer);
    };
  }, []);
  return (
    <>
      {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
      {countdown.seconds}s
      <div
        className="elementor-element elementor-element-aa486f9 e-con-full e-flex e-con e-parent e-lazyloaded"
        data-id="aa486f9"
        data-element_type="container"
        data-settings='{"background_background":"slideshow","background_slideshow_gallery":[{"id":1850,"url":"https:\/\/mokse.org\/wp-content\/uploads\/2025\/12\/64712.webp"}],"background_slideshow_loop":"yes","background_slideshow_slide_duration":5000,"background_slideshow_slide_transition":"fade","background_slideshow_transition_duration":500}'
      >
        <div className="elementor-background-slideshow swiper" dir="rtl">
          <div className="swiper-wrapper">
            <div className="elementor-background-slideshow__slide swiper-slide">
              <div
                className="elementor-background-slideshow__slide__image"
                style={{
                  backgroundImage: `url(
                    "https://mokse.org/wp-content/uploads/2025/12/64712.webp"
                  )`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-5808c0e elementor-widget elementor-widget-heading"
          data-id="5808c0e"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h1 className="elementor-heading-title elementor-size-default">
              Stop The Stigma Conference
            </h1>{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-c9969b5 e-con-full e-flex e-con e-child"
          data-id="c9969b5"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-26bfc6f elementor-widget elementor-widget-html"
            data-id="26bfc6f"
            data-element_type="widget"
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              {/* <!--jQuery CDN link starts here--> */}
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-6e6ad68 e-con-full e-flex e-con e-child"
          data-id="6e6ad68"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-24eafaa e-con-full e-flex e-con e-child"
            data-id="24eafaa"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div
              className="elementor-element elementor-element-fff71e1 elementor-widget elementor-widget-heading"
              data-id="fff71e1"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  <span id="num1" className="num">
                    56
                  </span>
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-0712e48 elementor-widget elementor-widget-heading"
              data-id="0712e48"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Days
                </h2>{" "}
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-bcd6ec0 e-con-full e-flex e-con e-child"
            data-id="bcd6ec0"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div
              className="elementor-element elementor-element-98d8ed2 elementor-widget elementor-widget-heading"
              data-id="98d8ed2"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  <span id="num2" className="num">
                    01
                  </span>
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-eb07b79 elementor-widget elementor-widget-heading"
              data-id="eb07b79"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Hours
                </h2>{" "}
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-b196b13 e-con-full e-flex e-con e-child"
            data-id="b196b13"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div
              className="elementor-element elementor-element-7e0f55c elementor-widget elementor-widget-heading"
              data-id="7e0f55c"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  <span id="num3" className="num">
                    17
                  </span>
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-8e31e48 elementor-widget elementor-widget-heading"
              data-id="8e31e48"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Minutes
                </h2>{" "}
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-5d282c7 e-con-full e-flex e-con e-child"
            data-id="5d282c7"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div
              className="elementor-element elementor-element-5b08fe1 elementor-widget elementor-widget-heading"
              data-id="5b08fe1"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  <span id="num4" className="num">
                    47
                  </span>
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-5a93b0b elementor-widget elementor-widget-heading"
              data-id="5a93b0b"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Seconds
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
