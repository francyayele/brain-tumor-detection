"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserIcon as EmailIcon, ChromeIcon as GoogleIcon } from "lucide-react"; // Updated icons

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", email, password);
    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    console.log("Google login attempt");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-800 via-blue-900 to-teal-800 animate-gradient-x flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-transparent backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl hover:scale-105 transition-all duration-500">
        <CardHeader className="text-center text-white">
          <CardTitle className="text-4xl font-bold">BrainScan AI</CardTitle>
          <CardDescription className="text-lg text-gray-300">
            Please log in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 text-white font-semibold">
              <TabsTrigger value="email" className="hover:text-blue-400 transition duration-300 ease-in-out">
                Email
              </TabsTrigger>
              <TabsTrigger value="google" className="hover:text-blue-400 transition duration-300 ease-in-out">
                Google
              </TabsTrigger>
            </TabsList>

            {/* Email login form */}
            <TabsContent value="email">
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out"
                >
                  <EmailIcon className="mr-2 h-4 w-4" /> Log In with Email
                </Button>
              </form>
            </TabsContent>

            {/* Google login button */}
            <TabsContent value="google">
              <Button
                onClick={handleGoogleLogin}
                className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300 ease-in-out"
                variant="outline"
              >
                <GoogleIcon className="mr-2 h-4 w-4" /> Log In with Google
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center text-gray-300 w-full">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline transition-all duration-300 ease-in-out">
              Create one
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
