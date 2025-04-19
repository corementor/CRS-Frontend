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
import { Coins, Share2, FileCheck } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";


const ShareInfo = () => {
  // const [showError, setShowError] = useState(false);

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
      // setShowError(true);
    }
  }

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <Card className="shadow-sm">
        <CardHeader className="border-b bg-card">
          <div className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-muted-foreground" />
            <div className="space-y-0.5">
              <CardTitle className="text-slate-600">
                Share Information
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Please provide the share capital and share types for your
                business
              </p>
            </div>
          </div>
        </CardHeader>
        {/* 
        {showError && (
          <Alert variant="destructive" className="mx-6 my-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Submission failed. Please try again.
            </AlertDescription>
          </Alert>
        )} */}

        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Ordinary and Non-Voting Shares */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  <h3 className="font-medium">Regular Shares</h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-sm text-muted-foreground font-medium">
                    Share Type
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Number of Shares
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Par Value (Optional)
                  </div>
                </div>

                {/* Ordinary Shares */}
                <div className="grid grid-cols-3 gap-4 items-center">
                  <FormLabel className="text-muted-foreground">
                    Ordinary Shares
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="ordinaryShares.numberOfShares"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter number"
                            {...field}
                          />
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
                          <Input
                            type="number"
                            placeholder="Enter value"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Non Voting Shares */}
                <div className="grid grid-cols-3 gap-4 items-center">
                  <FormLabel className="text-muted-foreground">
                    Non-Voting Shares
                  </FormLabel>
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
              </div>

              {/* Special Shares */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileCheck className="h-4 w-4" />
                  <h3 className="font-medium">Special Share Types</h3>
                </div>

                {/* Redeemable Shares */}
                <div className="grid grid-cols-3 gap-4 items-center">
                  <FormLabel className="text-muted-foreground">
                    Redeemable Shares
                  </FormLabel>
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
                <div className="grid grid-cols-3 gap-4 items-center">
                  <FormLabel className="text-muted-foreground">
                    Preferential Shares
                  </FormLabel>
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

              {/* <div className="flex items-center justify-end gap-4 pt-6 border-t">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit">
                  Save Share Information
                </Button>
              </div> */}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShareInfo;
