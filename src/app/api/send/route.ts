
import { EmailSection } from '@/app/components/emailSection';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { email, subject, message } = await req.json()

    try {
        const data = await resend.emails.send({
            from: 'Acme <emailsend.co>',
            to: [email],
            subject: `${subject} tem uma mensagem!`,
            react: EmailSection({ email, subject, message})
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}