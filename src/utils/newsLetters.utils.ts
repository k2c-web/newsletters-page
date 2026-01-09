import { NewsLetter } from "@/types/newsLetter";

export const splitBySite = (items: NewsLetter[]) => {
  const groups = items.reduce<Record<string, NewsLetter[]>>((acc, item) => {
    if (!acc[item.site]) acc[item.site] = [];
    acc[item.site].push(item);
    return acc;
  }, {});
  return Object.entries(groups).map(([siteName, items]) => ({ siteName, items, }));
};

export const hasRights = (
  item: NewsLetter,
  userSubscriptions: string[]
): boolean => {
  if (item.subscriptions.length === 0) return true;

  return item.subscriptions.some((right) =>
    userSubscriptions.includes(right)
  );
};

