import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useWalletQuery } from "@/redux/features/wallets/wallet.api";
import { useForm, type SubmitHandler } from "react-hook-form";

type WithdrawFormValues = {
  amount: string;
};

const Withdraw = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const walletId = userInfo?.data?.walletId;
  console.log(walletId);

  const { data: walletData, isLoading, isError } = useWalletQuery(walletId!, {
    skip: !walletId,
  });

  const form = useForm<WithdrawFormValues>({
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit: SubmitHandler<WithdrawFormValues> = (data) => {
    console.log("Withdraw data:", data);
  };
   

   const wallet = walletData?.data
  return (
    <div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Digital Wallet</h3>
          <p className="text-3xl font-bold mt-2">${wallet?.balance}</p>
          <p className="text-sm mt-1">
            Wallet ID: {wallet?.id?.slice(0, 6)}...{wallet?.id?.slice(-6)}
          </p>
        </div>
        <span className="px-3 py-1 bg-green-500 text-sm rounded-full">
          ACTIVE
        </span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Withdraw
          </Button>
        </form>
      </Form>


    </div>
  );
};

export default Withdraw;
