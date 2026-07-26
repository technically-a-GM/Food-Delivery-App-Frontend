import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";
import { useEffect } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Field, FieldError } from "./ui/field";

const formSchema = z.object({
  searchQuery: z.string().min(1, "Please enter a search term"),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({
  onSubmit,
  onReset,
  placeHolder,
  searchQuery,
}: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: searchQuery ?? "",
    },
  });

  useEffect(() => {
    form.reset({
      searchQuery: searchQuery ?? "",
    });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    onReset?.();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={`flex items-center gap-3 justify-between border-2 rounded-full p-3 mx-10 ${
        form.formState.errors.searchQuery ? "border-red-500" : ""
      }`}
    >
      <Search
        strokeWidth={2.5}
        size={30}
        className="ml-1 hidden text-orange-500 md:block"
      />

      <Controller
        control={form.control}
        name="searchQuery"
        render={({ field, fieldState }) => (
          <Field className="flex-1" data-invalid={fieldState.invalid}>
            <Input
              {...field}
              placeholder={placeHolder}
              className="border-none shadow-none text-xl focus-visible:ring-0"
            />

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <Button
        type="button"
        variant="outline"
        onClick={handleReset}
        className="rounded-full"
      >
        Reset
      </Button>

      <Button
        type="submit"
        className="rounded-full bg-orange-500"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;