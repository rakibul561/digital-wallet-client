/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Component from "@/components/ui/Password";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";



export function LoginForm({

  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {

  
   const [login] = useLoginMutation();


   const navigate  = useNavigate();


  const form = useForm({
  
    defaultValues: {
     
      email: "",
      password: "",
    },
  });



  const onSubmit:SubmitHandler<FieldValues> = async (data) => {

     const userInfo = {

      email: data.email,
      password: data.password,

    };
   try {
    const result = await login(userInfo).unwrap();
    console.log(result);
    toast.success("Login Succesfull")
    navigate('/')
    
      

   } catch (error) {
     console.log(error)
      toast.error( "Login Failed")

     
   }
  };



  return (
         <div className={cn("flex  flex-col gap-6", className)} {...props}>
      <div className="flex flex-col  items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to create an account
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
           

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                  <Component {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/register" className="underline underline-offset-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
