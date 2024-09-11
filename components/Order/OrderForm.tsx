"use client";
import OrderModal from "./OrderModal";
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

const dataSchema = {
  client: z.string().min(4).max(20),
};
const formSchema = z.object(dataSchema);
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
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg mt-2">
      <div className="flex justify-end mb-2">
        <OrderModal />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-bold">
                  Enter Client
                </FormLabel>
                <FormDescription className="text-sm font-semibold text-neutral-500">
                  Client
                </FormDescription>
                <FormControl>
                  <Input placeholder="client" {...field} />
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
    </div>
  );
}
