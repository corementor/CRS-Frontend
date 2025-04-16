import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { shareInfoSchema } from "@/lib/schemaValidation";

const ShareInfo = () => {
  const [showError, setShowError] = useState(false);

  const form = useForm<z.infer<typeof shareInfoSchema>>({
    resolver: zodResolver(shareInfoSchema),
    defaultValues: {
      ordinaryShares: { numberOfShares: "0", parValue: "0" },
      nonVotingShares: { numberOfShares: "0", parValue: "0" },
      redeemableShares: { numberOfShares: "0", parValue: "0" },
      preferentialShares: { numberOfShares: "0", parValue: "0" },
    },
  });

  async function onSubmit(values: z.infer<typeof shareInfoSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Error:", error);
      setShowError(true);
    }
  }

  return (
    <div className="w-full min-h-screen">
      <Card className="w-[900px] pt-0">
        <CardHeader className="bg-primary/5 py-3 rounded-t-md">
          <CardTitle>Share Information</CardTitle>
        </CardHeader>

        {showError && (
          <p className="text-red-500 text-center border border-red-500 p-2 rounded-md mx-6 my-2">
            Submission failed. Please try again.
          </p>
        )}

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-6 mb-4 font-semibold">
                  <div>Share Type</div>
                  <div>Number of Shares</div>
                  <div>Par Value (Optional)</div>
                </div>

                {/* Ordinary Shares */}
                <div className="grid grid-cols-3 gap-6 items-center">
                  <FormLabel>Ordinary Shares:</FormLabel>
                  <FormField
                    control={form.control}
                    name="ordinaryShares.numberOfShares"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ordinaryShares.parValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Non Voting Shares */}
                <div className="grid grid-cols-3 gap-6 items-center">
                  <FormLabel>Non Voting Shares:</FormLabel>
                  <FormField
                    control={form.control}
                    name="nonVotingShares.numberOfShares"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nonVotingShares.parValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Redeemable Shares */}
                <div className="grid grid-cols-3 gap-6 items-center">
                  <FormLabel>Redeemable Shares:</FormLabel>
                  <FormField
                    control={form.control}
                    name="redeemableShares.numberOfShares"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="redeemableShares.parValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Preferential Shares */}
                <div className="grid grid-cols-3 gap-6 items-center">
                  <FormLabel>Preferential Shares:</FormLabel>
                  <FormField
                    control={form.control}
                    name="preferentialShares.numberOfShares"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferentialShares.parValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShareInfo;