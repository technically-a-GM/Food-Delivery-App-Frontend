import { Controller, useFormContext } from "react-hook-form";

import { cuisineList } from "@/config/restaurant-options-config";
import CuisineCheckbox from "./CuisineCheckbox";

import {
  FieldDescription,
  FieldError,
} from "@/components/ui/field";

import type { RestaurantFormData } from "./ManageRestaurantForm";

const CuisinesSection = () => {
  const { control } = useFormContext<RestaurantFormData>();

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>

        <FieldDescription>
          Select the cuisines that your restaurant serves
        </FieldDescription>
      </div>

      <Controller
        control={control}
        name="cuisines"
        render={({ field, fieldState }) => (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cuisineList.map((cuisine) => (
                <CuisineCheckbox
                  key={cuisine}
                  cuisine={cuisine}
                  field={field}
                />
              ))}
            </div>

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </>
        )}
      />
    </div>
  );
};

export default CuisinesSection;