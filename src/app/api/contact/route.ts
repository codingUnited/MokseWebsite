import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ErrorResponse {
  error: string;
  missingFields?: string[];
}

interface SuccessResponse {
  message: string;
  data: ContactFormData;
}

export async function POST(request: NextRequest): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as Partial<ContactFormData>;

    // Validate required fields
    const requiredFields: (keyof ContactFormData)[] = ['name', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          missingFields,
        },
        { status: 400 }
      );
    }

    // Log submission to console for debugging
    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Future integration - send email via email service (SendGrid, AWS SES, etc.)
    // For now, this is a placeholder that logs to console

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        data: { name, email, subject, message } as ContactFormData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        error: 'Failed to process contact form submission',
      },
      { status: 500 }
    );
  }
}
