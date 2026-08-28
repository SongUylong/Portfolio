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
  name: z.string().min(2, { message: "Please enter your name." }).max(100),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Add a short subject." }).max(200),
  message: z.string().min(5, { message: "Message is too short." }).max(2000),
});

export type FormDataType = z.infer<typeof formSchema>;

const CONTACT_EMAIL = "uylongsong@gmail.com";

interface SubmissionFormProps {
  handleVisible: (visible: boolean) => void;
}

export function SubmissionForm({ handleVisible }: SubmissionFormProps) {
  const { toast } = useToast();
  const form = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormDataType) {
    handleVisible(true);
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            _subject: `[Portfolio Contact] ${values.subject}`,
            message: values.message,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const data = await response.json();

      if (response.ok && data.success !== "false") {
        form.reset();
        toast({
          title: "Message sent successfully!",
          description:
            "Thank you for reaching out. I will get back to you shortly.",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Could not send message",
        description: `Something went wrong. Please email directly to ${CONTACT_EMAIL}.`,
        variant: "destructive",
      });
    } finally {
      window.setTimeout(() => handleVisible(false), 400);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base font-medium">
                  Your Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    className="h-10 text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base font-medium">
                  Your Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@example.com"
                    className="h-10 text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base font-medium">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="h-10 text-base"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base font-medium">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Hello Uylong, I would like to discuss..."
                  className="min-h-[120px] text-base"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          aria-label="Send Message"
          className="relative ml-1 flex h-10 w-full sm:w-auto scale-100 select-none appearance-none items-center justify-center overflow-hidden rounded-lg border border-zinc-950/10 bg-primary text-primary-foreground hover:bg-primary/90 px-6 text-base font-medium focus-visible:ring-2 active:scale-[0.96] shadow-md transition-all"
        >
          <TextMorph>
            {form.formState.isSubmitting ? "Sending…" : "Send Message"}
          </TextMorph>
        </Button>
      </form>
    </Form>
  );
}
