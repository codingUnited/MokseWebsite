"use client";
import {
  BodyTemplate,
  HeaderTemplate,
  PageBuilder,
  SectionTemplate,
} from "@/components/page-builder/template";

export default function Page() {
  return (
    <PageBuilder>
      <HeaderTemplate
        title=" "
        description="" imageHeight={"10vh"} 
      />
      <BodyTemplate>
        <SectionTemplate
          title="Terms and Conditions"
          description="Read our terms and conditions to understand the rules and guidelines for using our website and services."
        > </SectionTemplate>
        <div className="prose prose-lg">
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to Mokse! These terms and conditions outline the rules and
            regulations for the use of our website and services. By accessing or
            using our website, you agree to be bound by these terms. If you do
            not agree with any part of these terms, please do not use our
            website.
          </p>
          <h2>1. Use of Our Services</h2>
          <p>
            You must be at least 18 years old to use our services. You are
            responsible for maintaining the confidentiality of your account and
            password, and for restricting access to your computer. You agree to
            accept responsibility for all activities that occur under your
            account or password.
          </p>
          <h2>2. Intellectual Property</h2>
          <p>
            All content on our website, including but not limited to text,
            graphics, logos, images, and software, is the property of Mokse or
            its content suppliers and is protected by international copyright
            laws. You may not reproduce, distribute, modify, or create
            derivative works from any content on our website without our prior
            written consent.
          </p>
          <h2>3. User Conduct</h2>
          <p>
            You agree not to use our website for any unlawful purpose or in any
            way that could damage, disable, overburden, or impair our servers or
            networks. You also agree not to interfere with any other party's use
            and enjoyment of our website.
          </p>
          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall Mokse be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages arising out
            of or in connection with your use of our website or services.
          </p>
          <h2>5. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms and conditions at any
            time. Any changes will be effective immediately upon posting on our
            website. Your continued use of our website after any changes
            constitutes your acceptance of the new terms.
          </p>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about these terms and conditions, please
            contact us at <a href="mailto:info@mokse.org">info@mokse.org</a>.
          </p>
        </div>
      </BodyTemplate>
    </PageBuilder>
  );
}
