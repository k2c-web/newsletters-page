import { CallToAction } from "../CallToAction";
import cn from "classnames";
import { NewsLetter } from "@/types/newsLetter";
import { FC } from "react";
import { hasRights } from "@/utils/newsletters.utils";

interface NewslettersPageProps {
  item: NewsLetter;
  userSubscriptions: string[];
}

export const NewsletterCard: FC<NewslettersPageProps> = ({
  item,
  userSubscriptions,
}) => {
  const allowed = hasRights(item, userSubscriptions);
  return (
    <li>
      <div className="h-full flex flex-col justify-between text-center">
        <div>
          <div className="p-4 bg-[#CECECE] h-50 flex items-center justify-center text-[30px] text-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {item.title}
          </div>
          <p className="text-[16px] leading-6.5 mt-3.75">{item.description}</p>
        </div>
        <CallToAction
          wording={allowed ? "S'inscrire" : "S'abonner"}
          className={cn(
            "mt-3.75 w-29.5 h-10 mx-auto rounded-[40px]",
            allowed ? "bg-[#B00005] text-white" : "bg-[#FAEC70] text-black"
          )}
        />
      </div>
    </li>
  );
};
