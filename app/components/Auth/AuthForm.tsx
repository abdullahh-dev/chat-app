"use client";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../Inputs/Form-Input";
import { FORM_TYPE } from "../Types";

const AuthForm = () => {
  const [formType, setFormType] = useState<FORM_TYPE>("Login");
  const [loading, setLoading] = useState<boolean>(false);

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

  const submit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    if (formType === "Login") {
    }

    if (formType === "Register") {
    }
  };

  const socialAction = (action: string) => {
    setLoading(true);
  };

  return (
    <section className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-fog-white backdrop-blur-md shadow-sm sm:rounded-lg border border-border sm:px-10">
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          {formType === "Register" && (
            <FormInput
              id="name"
              placeholder="Enter your name"
              label="Name"
              register={register}
              errors={errors}
            />
          )}
          <FormInput
            id="email"
            label="Email"
            placeholder="Enter your email address"
            register={register}
            errors={errors}
          />
          <FormInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            register={register}
            errors={errors}
          />
          <button></button>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
