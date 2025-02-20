"use client";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../ui/Inputs/Form-Input";
import { FORM_TYPE } from "../Types";
import FormButton from "../ui/Button/FormButton";

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

  const submit: SubmitHandler<FieldValues> = (data) => {};

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
          <FormButton disabled={loading} type="submit" fullWidth>
            {formType === "Login" ? "Sign in" : "Register"}
          </FormButton>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
