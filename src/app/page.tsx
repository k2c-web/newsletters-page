import { UserSwitcher } from "@/components/userSwitch/UserSwitch";
import Link from "next/link";

const page = () => (
  <div className="pt-24 flex justify-center items-center gap-12 flex-col">
    <UserSwitcher />
    <Link href="/newsletters">
      <button className="cursor-pointer p-4 bg-blue-950 text-white text-4xl">
        Accès Newsletters !
      </button>
    </Link>
  </div>
);

export default page;
