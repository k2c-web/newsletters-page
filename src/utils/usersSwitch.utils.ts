import { User } from "@/types/user";

export const getButtonLabel = (subscriptions: User["subscriptions"]) => {
  switch (subscriptions.length) {
    case 1:
      return "Droit unique";
    case 2:
      return "Droits Multiples";
    default:
      return "Aucun droit";
  }
};
