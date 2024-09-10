"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  client: z.string().min(4).max(20),
});

export default function StockForm() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "create new product successfully.",
      description: "page will redirect to home page.",
      action: (
        <ToastAction
          altText="done"
          onClick={() => {
            router.push("/");
          }}
        >
          done
        </ToastAction>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto bg-white p-8 rounded-lg mt-4"
      >
        <FormField
          control={form.control}
          name="client"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-bold">
                Product name
              </FormLabel>
              <FormDescription className="text-sm font-semibold text-neutral-500">
                Product name
              </FormDescription>
              <FormControl>
                <Input placeholder="Product" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <div className="flex justify-end items-center">
          <Button type="submit" variant={"default"} className="font-bold w-48">
            Enter
          </Button>
        </div> */}
      </form>
    </Form>
  );
}
