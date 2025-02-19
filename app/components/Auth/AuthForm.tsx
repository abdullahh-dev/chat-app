import React, { useCallback, useState } from "react";
import { FORM_TYPE } from "./types";
import { FieldValues, useForm } from "react-hook-form";

const AuthForm = () => {
  const [formType, setFormType] = useState<FORM_TYPE>("Login");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const toggleFormType = useCallback(() => {
    setFormType(formType === "Login" ? "Register" : "Register");
  }, [formType]);

  return <div>AuthForm</div>;
};

export default AuthForm;
