import { Controller, useFormContext } from "react-hook-form";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";

import type { RestaurantFormData } from "./ManageRestaurantForm";

const ImageSection = () => {
  const { control, watch } = useFormContext<RestaurantFormData>();

  const existingImageUrl = watch("imageUrl");

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>

        <FieldDescription>
          Add an image that will be displayed on your restaurant listing in the
          search results. Adding a new image will overwrite the existing one.
        </FieldDescription>
      </div>

      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              alt="Restaurant"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        )}

        <Controller
          control={control}
          name="imageFile"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                type="file"
                accept=".jpg,.jpeg,.png"
                className="bg-white"
                aria-invalid={fieldState.invalid}
                onChange={(event) =>
                  field.onChange(
                    event.target.files?.[0] ?? undefined
                  )
                }
              />

              {fieldState.error && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;