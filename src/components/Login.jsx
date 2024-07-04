"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

function Login() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (result.error) {
      console.error("Authentication error:", result.error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Invalid Credentials! please check your details and try again", // Ensure this is a string
        status: "error",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      console.log("Successfully logged in!");
      router.push("/dashboard"); // Redirect to dashboard
    }
  };

  if (session) {
    router.push("/dashboard"); // Redirect to dashboard if already logged in
    return null; // Return null while redirecting
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <Button
          onClick={() => signIn("google")}
          variant="outline"
          className="w-full mt-4"
        >
          Login with Google
        </Button>
      </CardContent>
    </Card>
  );
}

export default Login;
