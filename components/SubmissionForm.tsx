"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { TextMorph } from "./ui/text-morph";
const formSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(5).max(500),
});
interface SubmissionFormProps {
  handleVisible: (visible: boolean) => void;
}
export function SubmissionForm({ handleVisible }: SubmissionFormProps) {
  const { toast } = useToast();
  const form = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: FormDataType) {
    try {
      handleVisible(true);
      const res: Response = await fetch("/api/contact", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        form.reset();
        toast({
          title: "Message sent!",
        });
        handleVisible(false);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FormField
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">First Name</FormLabel>
                <FormControl>
                  <Input {...field} className="h-8 text-sm" />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Last Name</FormLabel>
                <FormControl>
                  <Input {...field} className="h-8 text-sm" />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Email</FormLabel>
              <FormControl>
                <Input {...field} className="h-8 text-sm" />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Your message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[80px] text-sm"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          aria-label='Load'
          className='relative ml-1 flex h-8 scale-100 select-none appearance-none items-center justify-center overflow-hidden rounded-lg border border-zinc-950/10 bg-white px-3 text-xs text-zinc-950 focus-visible:ring-2 active:scale-[0.96] dark:border-zinc-50/10'
        >
          <TextMorph>{form.formState.isSubmitting ? "Sending..." : "Send Message"}</TextMorph>
        </Button>
      </form>
    </Form>
  );
}
export type FormDataType = z.infer<typeof formSchema>; //extract type from formSchema
