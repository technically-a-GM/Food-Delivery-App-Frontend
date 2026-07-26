import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import type { User } from "@/types";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};

const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = "User Profile",
  buttonText = "Submit",
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <form
      onSubmit={form.handleSubmit(onSave)}
      className="space-y-4 rounded-lg bg-gray-50 p-4 md:p-10"
    >
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>

        <FieldDescription>
          View and change your profile information here
        </FieldDescription>
      </div>

      {/* Email */}
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Email</FieldLabel>

            <Input
              {...field}
              id="email"
              disabled
              className="bg-white"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      {/* Name */}
      <Controller
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="name">Name</FieldLabel>

            <Input
              {...field}
              id="name"
              className="bg-white"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <div className="flex flex-col gap-4 md:flex-row">
        {/* Address */}
        <Controller
          control={form.control}
          name="addressLine1"
          render={({ field, fieldState }) => (
            <Field
              className="flex-1"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel htmlFor="addressLine1">
                Address Line 1
              </FieldLabel>

              <Input
                {...field}
                id="addressLine1"
                className="bg-white"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* City */}
        <Controller
          control={form.control}
          name="city"
          render={({ field, fieldState }) => (
            <Field
              className="flex-1"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel htmlFor="city">City</FieldLabel>

              <Input
                {...field}
                id="city"
                className="bg-white"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Country */}
        <Controller
          control={form.control}
          name="country"
          render={({ field, fieldState }) => (
            <Field
              className="flex-1"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel htmlFor="country">
                Country
              </FieldLabel>

              <Input
                {...field}
                id="country"
                className="bg-white"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </div>

      {isLoading ? (
        <LoadingButton />
      ) : (
        <Button
          type="submit"
          className="bg-orange-500"
        >
          {buttonText}
        </Button>
      )}
    </form>
  );
};

export default UserProfileForm;