//import { NextRequest, NextResponse } from "next/server";
//import { v4 as generateID } from 'uuid';
//import TicketCreated from "@/emails/TicketCreated";
//const resend = require('resend');

console.log("Loaded env variables:", process.env);  // Log all environment variables
import { Resend } from "resend";

console.log("Resend API Key:", process.env.RESEND_API_KEY);
const resend = new Resend('re_YpWnbT4L_PQ8CEmJHfX1qQirn1bHf4MpK');
console.log("resend is:", resend);

export async function POST(req) {
    
  try {
    // Parse the incoming request body
    const { message, subject } = await req.json();
    console.log("Message:", message, "Subject:", subject);

    // Send email using Resend
    const emailResponse = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",  // Your email or domain
        to: ["joejoeboyes2013@gmail.com"],  // Recipient email
        subject: subject,
        text: message, // Send plain text message
        html: `<p>${message}</p>`, // Send HTML message (optional)
    });

    console.log("Email sent successfully:", emailResponse);

    // Prepare the response data as JSON
    const responseData = {
        success: true,
        message: "Email data received and email sent.",
        receivedData: { message, subject },
        emailResponse: emailResponse,  // Optional: include the response from Resend
    };

    // Return a JSON response
    return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
} catch (error) {
    console.error("Error in API route:", error);

    // Send an error response
    const errorResponse = {
        success: false,
        error: "Failed to process the request",
    };

    return new Response(JSON.stringify(errorResponse), {
        status: 500,
        headers: { "Content-Type": "application/json" },
    });
}
    
        
}   


