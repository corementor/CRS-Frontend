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
import { attachmentSchema } from "@/lib/schemaValidation";
import { FileText, File, Upload } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Attachment = () => {
  // const [showError, setShowError] = useState(false);

  const form = useForm<z.infer<typeof attachmentSchema>>({
    resolver: zodResolver(attachmentSchema),
    defaultValues: {
      articleOfAssociation: "",
      other1: "",
      other2: "",
      other3: "",
    },
  });

  async function onSubmit(values: z.infer<typeof attachmentSchema>) {
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
            <FileText className="h-5 w-5 text-muted-foreground" />
            <div className="space-y-0.5">
              <CardTitle className="text-slate-600">
                Required Documents
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Please upload all the required documents for your business
                registration
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Required Documents Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <File className="h-4 w-4" />
                  <h3 className="font-medium">Essential Documents</h3>
                </div>
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="articleOfAssociation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          Article of Association
                        </FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="flex-1"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                field.onChange(file ? file.name : "");
                              }}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="cursor-pointer text-muted-foreground"
                            >
                              <Upload className="h-4 w-4" />
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Additional Documents Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <h3 className="font-medium">Additional Documents</h3>
                </div>
                <div className="grid gap-6">
                  {["other1", "other2", "other3"].map((fieldName, index) => (
                    <FormField
                      key={fieldName}
                      control={form.control}
                      name={fieldName as keyof z.infer<typeof attachmentSchema>}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">
                            Additional Document {index + 1}
                          </FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-4">
                              <Input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="flex-1"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  field.onChange(file ? file.name : "");
                                }}
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="cursor-pointer text-muted-foreground"
                              >
                                <Upload className="h-4 w-4" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attachment;
