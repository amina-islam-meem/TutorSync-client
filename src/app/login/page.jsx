"use client";

import { Card, Separator } from "@heroui/react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Login successful");
      router.push("/");
      router.refresh();
    }
    if (error) {
      toast.error(error.message || "Login failed");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Login
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Access your TutorSync account
          </p>
        </div>

        {/* Glass Card */}
        <Card className="backdrop-blur-lg bg-white/80 border border-white/40 rounded-2xl shadow-xl p-8">
          <Form onSubmit={onSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Enter your email"
                  className="pl-10 border rounded-lg py-2 w-full focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Enter your password"
                  className="pl-10 border rounded-lg py-2 w-full focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <FieldError />
            </TextField>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Login
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6 text-gray-400">
            <Separator className="flex-1" />
            <span className="text-sm">OR</span>
            <Separator className="flex-1" />
          </div>

          {/* Google Button */}
          <Button
            onClick={handleGoogleSignin}
            className="w-full bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-3 py-3 hover:shadow-md transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </Button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-indigo-600 font-medium hover:underline">
              Register
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;