import { NextResponse } from "next/server";
import { appendSubmissionRow } from "@/lib/googleSheets";

const REQUIRED_FIELDS = ["firstName", "lastName", "email", "interest"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const missingFields = REQUIRED_FIELDS.filter(
    (field) => !body?.[field] || String(body[field]).trim() === ""
  );

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        success: false,
        error: `Missing required field(s): ${missingFields.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(body.email.trim())) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const row = [
    new Date().toISOString(),
    body.firstName.trim(),
    body.lastName.trim(),
    body.email.trim(),
    body.title?.trim() || "",
    body.company?.trim() || "",
    body.industry?.trim() || "",
    body.linkedin?.trim() || "",
    body.instagram?.trim() || "",
    body.city?.trim() || "",
    body.referral?.trim() || "",
    body.interest.trim(),
  ];

  try {
    await appendSubmissionRow(row);
  } catch (error) {
    console.error("Failed to append Join the Circle submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong saving your submission. Please try again.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
