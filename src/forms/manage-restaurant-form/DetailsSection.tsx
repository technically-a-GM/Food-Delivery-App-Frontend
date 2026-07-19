import { Controller, useFormContext } from "react-hook-form";

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

            <input
              {...field}
              id="restaurantName"
              className="w-full rounded-md border border-gray-300 bg-white p-2"
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

              <input
                {...field}
                id="city"
                className="w-full rounded-md border border-gray-300 bg-white p-2"
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

              <input
                {...field}
                id="country"
                className="w-full rounded-md border border-gray-300 bg-white p-2"
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

            <input
              {...field}
              id="deliveryPrice"
              type="number"
              className="w-full rounded-md border border-gray-300 bg-white p-2"
              placeholder="1.50"
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

            <input
              {...field}
              id="estimatedDeliveryTime"
              type="number"
              className="w-full rounded-md border border-gray-300 bg-white p-2"
              placeholder="30"
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