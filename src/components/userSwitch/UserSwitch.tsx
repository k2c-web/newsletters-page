"use client";

import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import {
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";
import { getButtonLabel } from "@/utils/usersSwitch.utils";

const USERS = [
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
];

export function UserSwitcher() {
  const [currentUser, setUser] = useAtom(userAtom);

  return (
    <div className="flex flex-col gap-4 rounded-[12px]">
      {USERS.map((user, i) => {
        const isActive =
          user.subscriptions.join("/") === currentUser.subscriptions.join("/");
        return (
          <button
            key={i}
            onClick={() => setUser(user)}
            disabled={isActive}
            className="w-70 max-w-full bg-blue-500 px-12 py-4 cursor-pointer border-solid disabled:border-2"
          >
            {getButtonLabel(user.subscriptions)}
          </button>
        );
      })}
    </div>
  );
}
