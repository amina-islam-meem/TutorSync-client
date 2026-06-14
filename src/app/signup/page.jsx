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
import { Mail, Lock, User, Image } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { data, error } = await authClient.signUp.email({
    email: user.email,
    password: user.password,
    name: user.name,
    image: user.photoURL,
  });

  if (error) {
    toast.error(error.message || "Signup failed");
    return;
  }

  if (data) {
    router.push("/login");
    toast.success("Account created successfully. Please log in.");
  }

  };

  const handleGoogleSignup = async () => {
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
            Create Account
          </h1>
        </div>

        <Card className="backdrop-blur-lg bg-white/80 border border-white/40 rounded-2xl shadow-xl p-8">

          <Form onSubmit={onSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <TextField isRequired name="name">
              <Label>Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Enter your name"
                  className="pl-10 border rounded-lg py-2 w-full"
                />
              </div>
              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField name="photoURL">
              <Label>Photo URL</Label>
              <div className="relative">
                <Image className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Paste your image URL"
                  className="pl-10 border rounded-lg py-2 w-full"
                />
              </div>
            </TextField>

            {/* Email */}
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Enter your email"
                  className="pl-10 border rounded-lg py-2 w-full"
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
                  placeholder="Enter password"
                  className="pl-10 border rounded-lg py-2 w-full"
                />
              </div>
              <FieldError />
            </TextField>

            {/* Confirm Password */}
            <TextField isRequired name="confirmPassword" type="password">
              <Label>Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Confirm password"
                  className="pl-10 border rounded-lg py-2 w-full"
                />
              </div>
              <FieldError />
            </TextField>

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Register
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6 text-gray-400">
            <Separator className="flex-1" />
            <span className="text-sm">OR</span>
            <Separator className="flex-1" />
          </div>

          {/* Google */}
          <Button
            onClick={handleGoogleSignup}
            className="w-full bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-3 py-3 hover:shadow-md transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </Button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </Link>
          </p>

        </Card>
      </div>
    </div>
  );
};

export default SignupPage;