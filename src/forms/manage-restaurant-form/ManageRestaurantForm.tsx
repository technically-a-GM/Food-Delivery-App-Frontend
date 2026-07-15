import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

import DetailsSection from "./DetailsSection";
import CuisinesSection from "./CuisineSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";

import type { Restaurant } from "@/types";

export const formSchema = z
  .object({
    restaurantName: z
      .string()
      .min(1, "Restaurant name is required"),

    city: z
      .string()
      .min(1, "City is required"),

    country: z
      .string()
      .min(1, "Country is required"),

    deliveryPrice: z.coerce
      .number()
      .min(1, "Delivery price is required"),

    estimatedDeliveryTime: z.coerce
      .number()
      .min(1, "Estimated delivery time is required"),

    cuisines: z
      .array(z.string())
      .min(1, "Please select at least one cuisine"),

    menuItems: z.array(
      z.object({
        name: z.string().min(1, "Name is required"),
        price: z.coerce.number().min(1, "Price is required"),
      })
    ),

    imageUrl: z.string().optional(),

    imageFile: z
      .instanceof(File)
      .optional(),
  })
  .refine(
    (data) => !!(data.imageUrl || data.imageFile),
    {
      path: ["imageFile"],
      message: "Either image URL or image file must be provided",
    }
  );

export type RestaurantFormData = z.output<typeof formSchema>;
type Props = {
  restaurant?: Restaurant;
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({
  restaurant,
  onSave,
  isLoading,
}: Props) => {
  const form = useForm<
  z.input<typeof formSchema>,
  any,
  z.output<typeof formSchema>
>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    cuisines: [],
    menuItems: [{ name: "", price: 0 }],
  },
});

  useEffect(() => {
    if (!restaurant) return;

    const deliveryPriceFormatted = parseInt(
      (restaurant.deliveryPrice / 100).toFixed(2)
    );

    const menuItemsFormatted = restaurant.menuItems.map((item) => ({
      ...item,
      price: parseInt((item.price / 100).toFixed(2)),
    }));

    form.reset({
      ...restaurant,
      deliveryPrice: deliveryPriceFormatted,
      menuItems: menuItemsFormatted,
    });
  }, [restaurant, form]);

  const onSubmit = (values: RestaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", values.restaurantName);
    formData.append("city", values.city);
    formData.append("country", values.country);

    formData.append(
      "deliveryPrice",
      (values.deliveryPrice * 100).toString()
    );

    formData.append(
      "estimatedDeliveryTime",
      values.estimatedDeliveryTime.toString()
    );

    values.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });

    values.menuItems.forEach((item, index) => {
      formData.append(`menuItems[${index}][name]`, item.name);

      formData.append(
        `menuItems[${index}][price]`,
        (item.price * 100).toString()
      );
    });

    if (values.imageFile) {
      formData.append("imageFile", values.imageFile);
    }

    onSave(formData);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-lg bg-gray-50 p-10"
      >
        <DetailsSection />

        <Separator />

        <CuisinesSection />

        <Separator />

        <MenuSection />

        <Separator />

        <ImageSection />

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </FormProvider>
  );
};

export default ManageRestaurantForm;