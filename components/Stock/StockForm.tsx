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
import { createStockAction } from "@/lib/action";

const formSchema = z.object({
  product: z.string().min(4).max(20),
  mediumAmount: z.string().min(0).max(100),
  smallAmount: z.string().min(0).max(100),
  price_small: z.string().min(0).max(100),
  price_medium: z.string().min(0).max(100),
});

export default function StockForm() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
      mediumAmount: "0",
      smallAmount: "0",
      price_small: "0",
      price_medium: "0",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // createStockAction(values);
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
    // function wait(duration: number) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve("等待完成");
    //     }, duration);
    //   });
    // }

    // wait(3000).then(() => {
    //   router.push("/");
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto bg-white p-8 rounded-lg mt-4"
      >
        <FormField
          control={form.control}
          name="product"
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
        <FormField
          control={form.control}
          name="smallAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-bold">
                Amount for small
              </FormLabel>
              <FormDescription className="text-sm font-semibold text-neutral-500">
                How many numbers are your products in small.
              </FormDescription>
              <FormControl>
                <Input placeholder="Amount for small size" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mediumAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-bold">
                Amount for medium
              </FormLabel>
              <FormDescription className="text-sm font-semibold text-neutral-500">
                How many numbers are your products in medium.
              </FormDescription>
              <FormControl>
                <Input placeholder="Amount for medium size" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price_small"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-bold">
                Price for product in small
              </FormLabel>
              <FormDescription className="text-sm font-semibold text-neutral-500">
                How much is your product in small size per one.
              </FormDescription>
              <FormControl>
                <Input placeholder="price for small size" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price_medium"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-bold">
                Price for product in medium
              </FormLabel>
              <FormDescription className="text-sm font-semibold text-neutral-500">
                How much is your product in medium size per one.
              </FormDescription>
              <FormControl>
                <Input placeholder="price for medium size" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center">
          <Button type="submit" variant={"default"} className="font-bold w-48">
            Enter
          </Button>
        </div>
      </form>
    </Form>
  );
}
