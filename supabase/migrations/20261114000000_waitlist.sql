-- Waitlist signups. Anyone may insert; nobody can read via the public API.
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (char_length(email) <= 254),
  name text check (char_length(name) <= 100),
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

drop policy if exists "Anyone can join the waitlist" on public.waitlist;
create policy "Anyone can join the waitlist"
  on public.waitlist for insert
  to anon, authenticated
  with check (true);
-- No select policy: signups are only visible in the Supabase dashboard.
