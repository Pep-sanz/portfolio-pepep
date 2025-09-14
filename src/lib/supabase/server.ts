import { createServerClient } from '@supabase/ssr';
import { cookies as Cookies } from 'next/headers';

function createClient() {
  const cookies = Cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies },
  );
}

export const supabaseServer = createClient();
