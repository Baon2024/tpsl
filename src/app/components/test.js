import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://xmcyvimeuarsivupecuv.supabase.co'; /*process.env.NEXT_PUBLIC_SUPABASE_URL*/ 
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtY3l2aW1ldWFyc2l2dXBlY3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MzY2OTcsImV4cCI6MjA1MjExMjY5N30.0fsBw3u56U2Fv3yD4gtyhqJ31U-QHGr-EyJcXCRml_8'
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)



const { data } = supabase
  .storage
  .from('schoolsimages') // Your bucket name
  .getPublicUrl('Winchester-College.jpeg');

console.log(data.publicUrl);