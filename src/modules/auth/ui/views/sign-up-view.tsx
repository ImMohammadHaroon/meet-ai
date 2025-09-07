"use client";
import { email, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FormInput, OctagonAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { on } from "events";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Schema, set } from "zod/v3";
import { tr } from "date-fns/locale";
import { error } from "console";
import Image from "next/image";

const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, { message: "Password is required" }),
});

export const SignUpView = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setError(null);
        authClient.signIn.email(
            {
                email: data.email,
                password: data.password,
            },
            {
                onSuccess: () => {
                    router.push("/");
                },
                onError: ({ error }) => {
                    setError(error.message);
                },
            }
        );
    };

    return (
        <div className="max-w-md mx-auto mt-20 mb-20 p-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl shadow-2xl border border-gray-600">
            <div className="bg-gray-800 rounded-3xl shadow-lg p-12 pt-14 pb-14">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold mb-3 text-center text-white tracking-tight">
                                    Welcome Back
                                </h1>
                                <p className="text-gray-300 text-center mb-7 text-lg">
                                    Sign in to your account
                                </p>
                            </div>
                            <div className="space-y-5">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-white">Email</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    type="email" 
                                                    placeholder="Enter your email" 
                                                    className="rounded-lg border border-gray-600 p-3 text-base bg-gray-700 text-white transition-all duration-200 focus:border-green-500 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-400"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-white">Password</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    type="password" 
                                                    placeholder="*******" 
                                                    className="rounded-lg border border-gray-600 p-3 text-base bg-gray-700 text-white transition-all duration-200 focus:border-green-500 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-400"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {!!error && (
                                <Alert variant="destructive" className="mt-4 bg-red-900/20 border border-red-500">
                                    <OctagonAlert className="h-4 w-4" />
                                    <AlertTitle className="text-red-500">{error}</AlertTitle>
                                </Alert>
                            )}
                            <Button 
                                type="submit"
                                className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg py-3 text-lg shadow-lg shadow-green-500/30 border-none mt-8 w-full transition-all duration-200 hover:from-green-700 hover:to-green-500 hover:shadow-green-500/40"
                            >
                                Sign In
                            </Button>
                            <div className="my-5 mb-2 text-center">
                                <span className="text-gray-300 text-base">or continue with</span>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                    <Button 
                                        variant="outline" 
                                        type="button"
                                        className="rounded-lg border border-gray-600 bg-gray-700 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 w-full hover:bg-gray-600 hover:border-gray-500"
                                    >
                                        <Image src="/google.svg" alt="Google" width={20} height={20} />
                                        Google
                                    </Button>
                                    <Button 
                                        variant="outline" 
                                        type="button"
                                        className="rounded-lg border border-gray-600 bg-gray-700 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 w-full hover:bg-gray-600 hover:border-gray-500"
                                    >
                                        <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                                        GitHub
                                    </Button>
                                </div>
                            </div>
                            <p className="text-center mt-6 text-gray-300">
                                Don't have an account?{" "}
                                <Link href="/sign-up" className="text-green-400 underline font-medium hover:text-green-300 transition-colors duration-200">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}