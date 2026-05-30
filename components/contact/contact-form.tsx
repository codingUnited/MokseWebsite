"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Field,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { toaster, Toaster } from "../ui/toaster";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmissionStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitToasterId = "contact-form-submission";
  const [toastMessage, setToastMessage] = useState({
    error: () => "",
    loading: () =>
      toaster.loading({
        id: submitToasterId,
        title: "Submitting form",
        description: "Please wait while we submit your message.",
        type: "info",
        closable: true,
      }),
    update: () => "",
    updateSuccess: () =>
      toaster.update(submitToasterId, {
        title: "Form submitted",
        description: "Your message has been sent successfully.",
        type: "success",
        duration: 3000,
        closable: true,
      }),
    reset: () =>
      toaster.create({
        title: "Form reset",
        description: "The contact form has been cleared.",
        type: "info",
        closable: true,
      }),
  });
  const [status, setStatus] = useState<SubmissionStatus>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    if (toaster.isVisible(submitToasterId)) return toastMessage.loading();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        toastMessage.updateSuccess();
      }, 3000);
    }
  };

  return (
    <Container maxW={{ base: "100%", md: "3xl" }} px={{ base: 4, md: 8 }} py={{ base: 6, md: 8 }}>
      <Card.Root>
        <Card.Body gap={6} p={{ base: 4, md: 6 }}>
          <form onSubmit={handleSubmit}>
            <Fieldset.Root>
              <Stack>
                <Fieldset.Legend>Contact Us</Fieldset.Legend>
                <Fieldset.HelperText>
                  Please provide your contact details below.
                </Fieldset.HelperText>
              </Stack>
              <Fieldset.Content>
                <Field.Root required>
                  <Field.Label>Name</Field.Label>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Email address</Field.Label>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Subject</Field.Label>
                  <Input
                    type="text"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Message</Field.Label>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </Field.Root>

                {status.type && <div>{status.message}</div>}
                <Toaster />
                <Box id="toaster-box"></Box>
                <Stack justify="space-evenly" direction="row">
                  <Button
                    type="reset"
                    disabled={isSubmitting}
                    onClick={() => {
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                      setStatus({ type: null, message: "" });
                      toastMessage.reset();
                    }}
                  >
                    {isSubmitting ? "Resetting..." : "Reset"}
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </Stack>
              </Fieldset.Content>
            </Fieldset.Root>
          </form>
        </Card.Body>
      </Card.Root>
    </Container>
  );
}
