//console.log("Loaded env variables:", process.env);  // Log all environment variables
import { Resend } from "resend";

//console.log("Resend API Key:", process.env.RESEND_API_KEY);
const resend = new Resend('re_YpWnbT4L_PQ8CEmJHfX1qQirn1bHf4MpK');
//console.log("resend is:", resend);





export async function POST(req) {
    try {
        const { schoolFeedback } = await req.json();
        //console.log("Feedback:", feedback, "School:", school);

        //const { schoolFeedback } = await req.json();
        console.log("schoolFeedback in backend is:", schoolFeedback);
        const { feedback, school } = schoolFeedback;
        console.log("feedback and school in backend are:", school, feedback);

        // Send email using Resend
    const emailResponse = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",  // Your email or domain
        to: ["joejoeboyes2013@gmail.com"],  // Recipient email
        subject: `feedback on school ${school} from user`,
        text: feedback, // Send plain text message
        html: `<p>${feedback}</p>`, // Send HTML message (optional)
    });

    console.log("Email sent successfully:", emailResponse);

    // Prepare the response data as JSON
    const responseData = {
        success: true,
        message: "Email data received and email sent.",
        receivedData: { feedback, school },
        emailResponse: emailResponse,  // Optional: include the response from Resend
    };

    // Return a JSON response
    return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });



        /*return new Response(JSON.stringify({ message: "Feedback received successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });*/
    } catch (error) {
        console.error("Error processing feedback:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}