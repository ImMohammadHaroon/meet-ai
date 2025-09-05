"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    })
}) 

export const SignUpView = () => {
    const form = useForm<z.infer<typeof formSchema>>({  // Fixed extra curly brace
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    
    return ( 
        <div className="flex flex-col items-center justify-center w-full">
            <Card className="overflow-hidden p-0 shadow-xl border-0 w-full max-w-[900px] mx-auto"> 
                <CardContent className="grid p-0 md:grid-cols-2">
                    <Form {...form}>
                        <form className="p-6 md:p-10" onSubmit={form.handleSubmit(() => {})}>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col items-center text-center mb-6">
                                    <h1 className="text-3xl font-bold mb-2">
                                        Create Account
                                    </h1>
                                    <p className="text-muted-foreground align-text-balance">
                                        Sign up for a new account
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <FormField
                                        control={form.control} 
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-medium">Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        className="h-12 rounded-md"
                                                        {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control} 
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-medium">Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className="h-12 rounded-md"
                                                        {...field} />
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
                                                <FormLabel className="text-sm font-medium">Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Create a password"
                                                        className="h-12 rounded-md"
                                                        {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit" className="w-full h-12 mt-4 bg-green-600 hover:bg-green-700 rounded-md text-base font-medium">
                                    Sign Up
                                </Button>
                                <div className="text-center text-sm text-muted-foreground">
                                    Already have an account?{" "}
                                    <Link href="/sign-in" className="text-green-600 hover:text-green-700 font-medium">
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                    <div className="bg-gradient-to-br from-green-400 to-green-800 relative hidden md:flex flex-col gap-y-6 items-center justify-center p-10">
                        <img src="/logo.svg" alt="Meet AI Logo" className="h-[120px] w-[120px]"/>
                        <p className="text-3xl font-semibold text-white">Meet AI</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}