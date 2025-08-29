/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUserDataQuery } from "@/redux/features/auth/auth.api";
import {  useCashOutMutation } from "@/redux/features/wallets/wallet.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


interface ISEND {
  amount: string;
  userId: string;
}

const cashOut = () => {
  const { data: userData } = useUserDataQuery(undefined);

  const [cashOut] = useCashOutMutation()

  

  const userOptions =
    userData?.data?.data?.map((user: { _id: string; name: string }) => ({
      value: user._id,
      label: user.name,
    })) || [];

  const form = useForm<ISEND>({
    defaultValues: {
      amount: "",
      userId: "",
    },
  });

  const onSubmit = async (data: ISEND) => {
      const userInfo = {
        amount:data?.amount,
        userId:data?.userId
      }

      try {

        const res = await cashOut(userInfo).unwrap();
        console.log(res)
        toast.success("cash out succesfull")
        
      } catch (error) {
        console.log(error)
        toast.error("something went wrong please try again")
      }
  };

  return (
    <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Cash Out</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Amount Field */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder="Enter amount"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Receiver Field */}
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receiver</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a user" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {userOptions.map(user => (
                      <SelectItem key={user.value} value={user.value}>
                        {user.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            CashOut
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default cashOut;
