<<<<<<< HEAD
<<<<<<< Updated upstream
import { Button } from "@/components/ui/button"
=======
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Home() {
   const { data: session, } = authClient.useSession() 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      }
    );
  };
  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session?.user.name}</p>
  <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }
>>>>>>> Stashed changes
=======
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
>>>>>>> 3208fd8f1c80888f5367086ac8216c448d5348a6

  return (
<<<<<<< HEAD
<<<<<<< Updated upstream
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
=======
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg flex flex-col gap-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
      <Input
        className="h-12 px-4 text-base border-gray-300 focus:border-black focus:ring-black"
        placeholder="Name"
=======
    <div>
      <Input
        placeholder="name"
>>>>>>> 3208fd8f1c80888f5367086ac8216c448d5348a6
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
<<<<<<< HEAD
        className="h-12 px-4 text-base border-gray-300 focus:border-black focus:ring-black"
        placeholder="Email"
=======
        placeholder="email"
>>>>>>> 3208fd8f1c80888f5367086ac8216c448d5348a6
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
<<<<<<< HEAD
        className="h-12 px-4 text-base border-gray-300 focus:border-black focus:ring-black"
        placeholder="Password"
=======
        placeholder="password"
>>>>>>> 3208fd8f1c80888f5367086ac8216c448d5348a6
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<<<<<<< HEAD
      <Button onClick={onSubmit}>Create Account</Button>
>>>>>>> Stashed changes
=======
      <Button>Create Account</Button>
>>>>>>> 3208fd8f1c80888f5367086ac8216c448d5348a6
    </div>
  );
}
