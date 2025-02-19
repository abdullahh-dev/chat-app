import { FC } from "react";
import { InputProps } from "../../Types";
import clsx from "clsx";

const FormInput: FC<InputProps> = ({
  id,
  label,
  errors,
  type,
  disabled,
  register,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label className="text-gray-200 font-medium" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          disabled={disabled}
          {...register(id, {
            required,
          })}
          placeholder={placeholder}
          className={clsx(
            `form-input block w-full rounded-md border-0 py-1.5
            bg-inherit text-gray-200 shadow-sm ring-1 ring-inset ring-border placeholder:text-gray-500
            focus:ring-gray-200 sm:text-sm sm:leading-6 
            `,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default FormInput;
