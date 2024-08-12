import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_APP_SUPABASE_URL;
const supabaseUrl = " https://zejsdpgltaioyoarvfxp.supabase.co";
// const supabaseKey = process.env.NEXT_APP_ANON_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplanNkcGdsdGFpb3lvYXJ2ZnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMTIxNDEsImV4cCI6MjAzODY4ODE0MX0.u73DKaz8Nbioj-Q4RMf9oyChuk266FjFtFYJH-yJZy0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
