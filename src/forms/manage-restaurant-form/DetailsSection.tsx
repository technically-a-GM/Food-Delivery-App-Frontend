import { Controller, useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import type { RestaurantFormData } from "./ManageRestaurantForm";

const DetailsSection = () => {
  const { control } = useFormContext<RestaurantFormData>();

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>

        <FieldDescription>
          Enter the details about your restaurant
        </FieldDescription>
      </div>

      {/* Restaurant Name */}
      <Controller
        control={control}
        name="restaurantName"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="restaurantName">
              Name
            </FieldLabel>

            <Input
              {...field}
              id="restaurantName"
              className="bg-white"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <div className="flex gap-4">
        {/* City */}
        <Controller
          control={control}
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

        {/* Country */}
        <Controller
          control={control}
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

      {/* Delivery Price */}
      <Controller
        control={control}
        name="deliveryPrice"
        render={({ field, fieldState }) => (
          <Field
            className="max-w-[25%]"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel htmlFor="deliveryPrice">
              Delivery Price (£)
            </FieldLabel>

            <Input
              {...field}
              id="deliveryPrice"
              className="bg-white"
              placeholder="1.50"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      {/* Estimated Delivery Time */}
      <Controller
        control={control}
        name="estimatedDeliveryTime"
        render={({ field, fieldState }) => (
          <Field
            className="max-w-[25%]"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel htmlFor="estimatedDeliveryTime">
              Estimated Delivery Time (minutes)
            </FieldLabel>

            <Input
              {...field}
              id="estimatedDeliveryTime"
              className="bg-white"
              placeholder="30"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />
    </div>
  );
};

export default DetailsSection;