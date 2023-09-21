// import { EmailTemplate } from '../../../components/EmailTemplate';
import { EmailTemplate } from "@/components/shared/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <luxrayczsk@gmail.com>",
      to: ["ilaka69@seznam.cz"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John", message: "Hello", subject: "important" }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
