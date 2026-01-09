import { fetchNewsletters } from "@/api/newsLettersApi";
import { NewslettersGrid } from "@/components/newsLetters/NewsLettersGrid";
import { splitBySite } from "@/utils/newsLetters.utils";

export default async function NewslettersPage() {
  const newsletterItems = await fetchNewsletters();
  const groupedItems = splitBySite(newsletterItems);
  return <NewslettersGrid group={groupedItems} />;
}
