import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  useFormContext,
  type ControllerRenderProps,
} from "react-hook-form";

import type { RestaurantFormData } from "./ManageRestaurantForm";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<RestaurantFormData, "cuisines">;
};

const CuisineCheckbox = ({ cuisine, field }: Props) => {
  const {
    formState: { errors },
  } = useFormContext<RestaurantFormData>();

  const invalid = !!errors.cuisines;

  return (
    <Field orientation="horizontal" className="gap-2">
      <Checkbox
        className={cn(
          "bg-white",
          invalid && "border-destructive"
        )}
        checked={field.value.includes(cuisine)}
        onCheckedChange={(checked) => {
          if (checked) {
            field.onChange([...field.value, cuisine]);
          } else {
            field.onChange(
              field.value.filter((value) => value !== cuisine)
            );
          }
        }}
      />

      <FieldLabel
        className={cn(
          "font-normal cursor-pointer",
          invalid && "text-destructive"
        )}
      >
        {cuisine}
      </FieldLabel>
    </Field>
  );
};

export default CuisineCheckbox;