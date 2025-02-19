import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type FORM_TYPE = "Login" | "Register";

export interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder: string;
}
