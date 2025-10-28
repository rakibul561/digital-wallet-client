/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
import {
  useWalletQuery,
  useWithdrawMutation,
} from "@/redux/features/wallets/wallet.api";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Wallet, Banknote } from "lucide-react";

type WithdrawFormValues = {
  amount: string;
};

const Withdraw = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const walletId = userInfo?.data?.walletId;

  const [withdraw, { isLoading }] = useWithdrawMutation();

  const { data: walletData } = useWalletQuery(walletId!, {
    skip: !walletId,
  });

  const wallet = walletData?.data;
  const balance = wallet?.balance || 0;

  const form = useForm<WithdrawFormValues>({
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit: SubmitHandler<WithdrawFormValues> = async (data) => {
    const amountNum = Number(data.amount);
    if (amountNum <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (amountNum > balance) {
      toast.error(`You cannot withdraw more than your balance (${balance} ৳)`);
      return;
    }

    try {
      const res = await withdraw({ amount: data.amount }).unwrap();
      console.log(res);
      toast.success("Withdraw successful!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-[#ECF3FF] to-[#FDFDFD] py-6 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full">
        {/* Wallet Balance Card */}
        <div className="bg-gradient-to-r from-[#FF4D00] to-[#ff6a26] rounded-3xl shadow-xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1 font-medium">
                Available Balance
              </p>
              <h2 className="text-4xl font-extrabold">
                {balance.toLocaleString()} ৳
              </h2>
              <p className="text-xs opacity-75 mt-1">My Wallet</p>
            </div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <Wallet className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Withdraw Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-2.5 rounded-lg">
              <Banknote className="w-6 h-6 text-[#FF4D00]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Withdraw</h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Amount Input */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      Amount (৳)
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                          ৳
                        </span>
                        <Input
                          className="w-full pl-8 h-12 text-base border-2 border-gray-200 focus:ring-2 focus:ring-[#FF4D00] focus:border-[#FF4D00] rounded-lg transition-all"
                          placeholder="Enter amount"
                          type="number"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-[#FF4D00] to-[#ff6a26] hover:from-[#e24600] hover:to-[#e55a1f] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Banknote className="w-4 h-4" />
                    Withdraw
                  </span>
                )}
              </Button>
            </form>
          </Form>

          {/* Note Section */}
          <div className="mt-6 p-3 bg-orange-50 rounded-lg border border-orange-100">
            <p className="text-sm text-gray-600">
              💡 <span className="font-semibold">Note:</span> You can withdraw up
              to your current balance (৳ {balance.toLocaleString()}).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
