import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signInSchema } from "@/lib/schemaValidation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import backgroundImage from "@/assets/login-background.jpg";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [showError, setShowError] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
    setIsSubmitting(true);
    navigate("/");
    // try {
    //   const response = await axios.post(
    //     `${Api.BASE_URL}/${Api.AUTH_LOGIN}`,
    //     values
    //   );
    //   const { data } = response;
    //   localStorage.setItem("token", data.token);
    //   setToken(data.token);
    //   setIsSubmitting(false);

    //   navigate("/dashboard");
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // } catch (error: any) {
    //   console.error("Error:", error);
    //   setShowError(true);
    //   setIsSubmitting(false);
    // } finally {
    //   setIsSubmitting(false);
    // }
    form.reset();
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex h-14 items-center px-6 lg:h-[60px] bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="flex items-center gap-3 font-bold">
          <img
            src={logo}
            alt="Company Logo"
            className="w-8 h-8 object-contain"
          />
          <span>CRS</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full min-h-screen flex justify-center items-center pt-14"
        style={{
          background: `url(${backgroundImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        {/* Add an overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-orange-500/30 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="relative z-10"
        >
          <Card className="w-[500px] shadow-lg backdrop-blur-md bg-white/95">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-2xl font-bold">
                Sign in to your account
              </CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            {/* 
            {showError && (
              <p className="text-red-500 text-center border border-red-500 p-2 rounded-md mx-6 my-2 bg-red-50">
                Invalid credentials
              </p>
            )} */}

            <CardContent className="space-y-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="m@example.com"
                            {...field}
                            className="h-11"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              {...field}
                              className="h-11"
                            />
                            <button
                              type="button"
                              className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                              onClick={toggleShowPassword}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <EyeIcon className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    {isSubmitting ? (
                      <Button disabled className="w-full h-11">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full h-11 text-white font-bold cursor-pointer"
                      >
                        Sign In
                      </Button>
                    )}

                    <div className="text-center text-sm text-muted-foreground">
                      <a
                        href="/forgot-password"
                        className="hover:text-primary underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <a
                        href="/register"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
};

export default LoginPage;
