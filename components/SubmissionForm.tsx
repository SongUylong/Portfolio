"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { TextMorph } from "./ui/text-morph";

const formSchema = z.object({
  subject: z.string().min(2, { message: "Add a short subject." }).max(200),
  message: z.string().min(5, { message: "Message is too short." }).max(2000),
});

export type FormDataType = z.infer<typeof formSchema>;

const CONTACT_EMAIL = "uylongsong@gmail.com";

/** Opens Gmail compose: https://mail.google.com/mail/?view=cm — uses `su` for subject. */
function buildGmailComposeUrl(values: FormDataType): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
    su: values.subject,
    body: values.message,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}
interface SubmissionFormProps {
  handleVisible: (visible: boolean) => void;
}
export function SubmissionForm({ handleVisible }: SubmissionFormProps) {
  const { toast } = useToast();
  const form = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });
  function onSubmit(values: FormDataType) {
    handleVisible(true);
    try {
      const url = buildGmailComposeUrl(values);
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win) {
        toast({
          title: "Pop-up blocked",
          description: "Allow pop-ups for this site to open Gmail, or email manually.",
          variant: "destructive",
        });
        return;
      }
      form.reset();
      toast({
        title: "Opening Gmail",
        description: "Compose is prefilled—sign in to Gmail if needed, then send.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Could not open Gmail",
        description: "Try again or open Gmail and email manually.",
        variant: "destructive",
      });
    } finally {
      window.setTimeout(() => handleVisible(false), 400);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium">Subject</FormLabel>
              <FormControl>
                <Input {...field} className="h-10 text-base" />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium">Message</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-[120px] text-base" />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          aria-label='Load'
          className='relative ml-1 flex h-10 scale-100 select-none appearance-none items-center justify-center overflow-hidden rounded-lg border border-zinc-950/10 bg-white px-4 text-base font-medium text-zinc-950 focus-visible:ring-2 active:scale-[0.96] dark:border-zinc-50/10'
        >
          <TextMorph>{form.formState.isSubmitting ? "Opening…" : "Send Message"}</TextMorph>
        </Button>
      </form>
    </Form>
  );
}
