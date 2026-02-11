npm install @supabase/supabase-js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL=https://clpqweaicvbrelttopan.supabase.co
  import.meta.env.VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNscHF3ZWFpY3ZicmVsdHRvcGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MDEyMjMsImV4cCI6MjA4NjM3NzIyM30.wsh9NkzrldumqONxopsj5XYcqTj_UzEZooqeLOUcvOA
);
