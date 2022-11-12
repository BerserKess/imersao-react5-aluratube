import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://orgpddrveviplfaeiokr.supabase.co";
const PROJETC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZ3BkZHJ2ZXZpcGxmYWVpb2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzY5NjIsImV4cCI6MTk4Mzc1Mjk2Mn0.4IsBNSF2VypKaBGbu1FCC8I3TYXPtn5jcszBCYG8-jc";
const supabase = createClient(PROJECT_URL, PROJETC_KEY);

export function videoService() {
  return {
    getAllVideos() {
        return supabase.from("video")
        .select("*")
        
      
    },
  };
}
