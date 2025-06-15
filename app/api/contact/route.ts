import { Resend } from "resend";
import { EmailTemplate } from "../../../components/emailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { FormDataType } from "@/components/SubmissionForm";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: NextRequest): Promise<NextResponse<unknown>> {
  const formData: FormDataType = await req.json();
  const fromEmail = "notifications@uylongsong.lol";

  try {
    const emailContent = await EmailTemplate({ ...formData });
    const data = await resend.emails.send({
      from: `Contact <${fromEmail}>`,
      to: ["uylongsong@gmail.com"],
      subject: "Contact",
      react: emailContent,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
