import { useFieldArray, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FieldDescription } from "@/components/ui/field";

import MenuItemInput from "./MenuItemInput";
import type { RestaurantFormData } from "./ManageRestaurantForm";

const MenuSection = () => {
  const { control } = useFormContext<RestaurantFormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>

        <FieldDescription>
          Create your menu and give each item a name and a price.
        </FieldDescription>
      </div>

      <div className="space-y-3">
        {fields.map((field, index) => (
          <MenuItemInput
            key={field.id}
            index={index}
            removeMenuItem={() => remove(index)}
          />
        ))}
      </div>

      <Button
        type="button"
        className="w-fit"
        onClick={() =>
          append({
            name: "",
            price: 0,
          })
        }
      >
        Add Menu Item
      </Button>
    </div>
  );
};

export default MenuSection;