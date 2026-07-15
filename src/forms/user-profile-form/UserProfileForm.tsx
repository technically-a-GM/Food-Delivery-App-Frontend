import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
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
import { useEffect } from "react";


const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});


type UserFormData = z.infer<typeof formSchema>;


type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  currentUser : User;
};


const UserProfileForm = ({ onSave, isLoading ,currentUser}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),

    defaultValues: currentUser,
  });

  useEffect(() =>{

    form.reset(currentUser);

  },[currentUser , form]);

  return (
    <form
      onSubmit={form.handleSubmit(onSave)}
      className="space-y-4 bg-gray-50 rounded-lg md:p-10 p-4"
    >
      <div>
        <h2 className="text-2xl font-bold">
          User Profile Form
        </h2>

        <FieldDescription>
          View and change your profile information here
        </FieldDescription>
      </div>


      
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">
              Email
            </FieldLabel>

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


      {/* NAME */}
      <Controller
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="name">
              Name
            </FieldLabel>

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


      <div className="flex flex-col md:flex-row gap-4">

        {/* ADDRESS LINE 1 */}
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


        {/* CITY */}
        <Controller
          control={form.control}
          name="city"
          render={({ field, fieldState }) => (
            <Field
              className="flex-1"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel htmlFor="city">
                City
              </FieldLabel>

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


        {/* COUNTRY */}
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
          Submit
        </Button>
      )}
    </form>
  );
};


export default UserProfileForm;