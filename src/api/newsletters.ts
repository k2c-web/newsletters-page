import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";

export async function fetchNewsletters() {
  await new Promise((r) => setTimeout(r, 300));
  return NEWSLETTER_ITEMS;
}
