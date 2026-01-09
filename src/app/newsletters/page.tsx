import { fetchNewsletters } from "@/api/newsletters";
import { NewslettersGrid } from "@/components/newsLetters/NewsLettersGrid";
import { splitBySite } from "@/utils/newsletters.utils";

export default async function NewslettersPage() {
  const newsletterItems = await fetchNewsletters();
  const groupedItems = splitBySite(newsletterItems);
  return <NewslettersGrid group={groupedItems} />;
}
