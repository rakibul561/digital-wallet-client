/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Loading from "@/loading";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useWalletQuery, useWithdrawMutation } from "@/redux/features/wallets/wallet.api";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type WithdrawFormValues = {
  amount: string;
};

const Withdraw = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const walletId = userInfo?.data?.walletId;
  

  

  const [wallets] = useWithdrawMutation()

  const { data: walletData, isLoading, } = useWalletQuery(walletId!, {
    skip: !walletId,
  });


  const form = useForm<WithdrawFormValues>({
    defaultValues: {
      amount: "",
    },
  });

  if(isLoading){
    return <Loading/>
  }

  const onSubmit: SubmitHandler<WithdrawFormValues> = async (data) => {
   
    console.log(data)
    try {
      const res = await wallets({
        amount:(data.amount)
      }).unwrap();
      console.log(res
        
      )
      toast.success("Withdraw succesfully")
    } catch (error) {
      console.log(error)
    }
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
