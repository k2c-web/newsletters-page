import cn from "classnames";
import { FC } from "react";

interface CallToActionProps {
  wording: string;
  onClick?: () => void;
  className?: string;
}

export const CallToAction: FC<CallToActionProps> = ({
  wording,
  onClick,
  className,
}) => (
  <button
    onClick={onClick ? onClick : undefined}
    className={cn("px-4 py-2 rounded cursor-pointer", className)}
  >
    {wording}
  </button>
);
