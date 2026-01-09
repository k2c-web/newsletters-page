"use client";

import { NewsletterCard } from "./NewsLetterCard";
import { userAtom } from "@/atoms/userAtom";
import { useAtomValue } from "jotai";
import { FC } from "react";
import { NewsLetter } from "@/types/newsLetter";

interface Props {
  group: { siteName: string; items: NewsLetter[] }[];
}

export const NewslettersGrid: FC<Props> = ({ group }) => {
  const user = useAtomValue(userAtom);

  return group.map((group) => (
    <div key={group.siteName}>
      <h2 className="mt-10 mb-4 text-[22px] font-bold relative after:content-[''] after:block after:w-17.5 after:h-1 after:bg-[#B00005]">
        {group.siteName}
      </h2>
      <ul className="grid grid-cols-1 md:gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {group.items.map((i) => (
          <NewsletterCard
            item={i}
            userSubscriptions={user.subscriptions}
            key={i.id}
          />
        ))}
      </ul>
    </div>
  ));
};
