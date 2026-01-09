import { ReactNode } from "react";
import { Header } from "@/components/newsLetters/Header";

interface NewslettersLayoutProps {
  children: ReactNode;
}

export default function NewslettersLayout({
  children,
}: NewslettersLayoutProps) {
  return (
    <div className="pb-24 max-w-[1180px] px-8 mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
}
