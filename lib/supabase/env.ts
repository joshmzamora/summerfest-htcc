const supabaseUrlEnv = "NEXT_PUBLIC_SUPABASE_URL";
const supabaseAnonKeyEnv = "NEXT_PUBLIC_SUPABASE_ANON_KEY";
const supabasePublishableKeyEnv = "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY";

export function getSupabaseEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const missing: string[] = [];

  if (!supabaseUrl) {
    missing.push(supabaseUrlEnv);
  }

  if (!supabasePublishableKey) {
    missing.push(`${supabasePublishableKeyEnv} or ${supabaseAnonKeyEnv}`);
  }

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(`Missing Supabase environment variables: ${missing.join(", ")}`);
  }

  return {
    supabaseUrl,
    supabasePublishableKey,
  };
}

export function hasSupabaseEnv() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}

export const supabaseEnvNames = {
  url: supabaseUrlEnv,
  anonKey: supabaseAnonKeyEnv,
  publishableKey: supabasePublishableKeyEnv,
} as const;
