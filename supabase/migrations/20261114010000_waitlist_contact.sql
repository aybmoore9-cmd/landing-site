-- Phone and street address for quote requests (required by the form).
alter table public.waitlist add column if not exists phone text check (char_length(phone) <= 30);
alter table public.waitlist add column if not exists address text check (char_length(address) <= 200);
