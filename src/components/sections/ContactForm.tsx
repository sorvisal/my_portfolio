"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be 2000 characters or fewer."),
});

type ContactValues = z.infer<typeof contactSchema>;

const inputClasses =
  "min-h-11 w-full rounded-control border border-border bg-background px-3.5 py-2.5 text-base shadow-card placeholder:text-muted focus-visible:border-accent aria-[invalid=true]:border-red-500";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ recipient }: { recipient?: string }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (values: ContactValues) => {
    if (!recipient) return;
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.assign(`mailto:${recipient}?subject=${subject}&body=${body}`);
    setSent(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-card border border-border bg-background p-6 shadow-card"
    >
      <Field id="name" label="Name" error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClasses}
          {...register("name")}
        />
      </Field>

      <Field id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClasses}
          {...register("email")}
        />
      </Field>

      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputClasses, "resize-y")}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" className="w-full" disabled={!recipient}>
        <Send className="size-4" aria-hidden="true" />
        Send message
      </Button>

      <div role="status" aria-live="polite" aria-atomic="true" className="text-sm">
        {!recipient && <p className="text-muted">Contact details are not available yet.</p>}
        {sent && (
          <p className="text-accent">Your email app should open with the message ready to send.</p>
        )}
      </div>
    </form>
  );
}