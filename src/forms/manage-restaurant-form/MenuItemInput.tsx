import { Controller, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import type { RestaurantFormData } from "./ManageRestaurantForm";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext<RestaurantFormData>();

  return (
    <div className="flex gap-3">
      {/* Name */}
      <Controller
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field, fieldState }) => (
          <Field className="w-60" data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={`menuItems.${index}.name`}>
              Name
            </FieldLabel>

            <Input
              {...field}
              id={`menuItems.${index}.name`}
              placeholder="Cheese Pizza"
              className="bg-white"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.error && (
              <FieldError
                errors={[{ message: fieldState.error.message }]}
              />
            )}
          </Field>
        )}
      />

      {/* Price */}
      <Controller
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field, fieldState }) => (
          <Field className="w-44" data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={`menuItems.${index}.price`}>
              Price (£)
            </FieldLabel>

            <Input
              {...field}
              id={`menuItems.${index}.price`}
              type="number"
              placeholder="8.00"
              className="bg-white"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.error && (
              <FieldError
                errors={[{ message: fieldState.error.message }]}
              />
            )}
          </Field>
        )}
      />

      {/* Remove Button */}
      <div className="flex items-start pt-7">
        <Button
          type="button"
          variant="destructive"
          onClick={removeMenuItem}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default MenuItemInput;