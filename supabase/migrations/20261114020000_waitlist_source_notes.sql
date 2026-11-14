-- Lead source and optional notes from the quote form.
alter table public.waitlist add column if not exists source text check (char_length(source) <= 40);
alter table public.waitlist add column if not exists notes text check (char_length(notes) <= 500);
