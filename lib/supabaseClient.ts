import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
