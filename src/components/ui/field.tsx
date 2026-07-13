import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

function Field({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function FieldError({
  errors,
  className,
}: {
  errors?: { message?: string }[];
  className?: string;
}) {
  if (!errors?.length) return null;

  const messages = [...new Set(errors.map((e) => e?.message).filter(Boolean))];

  return (
    <p
      className={cn(
        "text-sm font-medium text-destructive",
        className
      )}
    >
      {messages[0]}
    </p>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
};