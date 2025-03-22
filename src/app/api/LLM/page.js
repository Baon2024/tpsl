//i should try out sending user's question to LLM on schools
import { NextResponse } from "next/server";


//add function here that allows LLM to access my database of schools

export async function POST(req, res) { 


  const { userQuery } = await req.json();
  

  //add huggingface or openai api call here
  //make sure userQuery is added in context of system instruction and assistant examples given


  //pass getSchoolsFunction as as a function available to the LLM

}