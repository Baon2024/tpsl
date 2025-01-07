// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://ztroeuzhquwoiavalsbl.supabase.co',  // Replace with your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0cm9ldXpocXV3b2lhdmFsc2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NzEzNzQsImV4cCI6MjA1MDE0NzM3NH0.gP4b8BW5u4_7kUiERmxaXCLnScryxkfkjLlyftm4g2w'                 // Replace with your Supabase public anon key
);

export default supabase;
