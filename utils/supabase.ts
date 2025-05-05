import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://dtesmtmcbvpuvfkvfkho.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXNtdG1jYnZwdXZma3Zma2hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTQ5NDIsImV4cCI6MjA2MTkzMDk0Mn0.eoLNgbsgNcuzd8ARccfbib8GMflk-B7LMyaXByyt92o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
