import { FC } from "react";
import { ButtonProps } from "../../Types";
import clsx from "clsx";

const FormButton: FC<ButtonProps> = ({
  type,
  children,
  fullWidth,
  onClick,
  variant = "primary",
  disabled,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(
          `mt-3 rounded-md px-2 py-1 font-semibold
          text-white
            `,
          fullWidth && "w-full",
          disabled && "!bg-gray-400 cursor-default",
          variant === "primary" && "bg-emerald-700 hover:bg-emerald-800",
          variant === "secondary" && "bg-gray-300",
          variant === "danger" && "bg-rose-500"
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default FormButton;
