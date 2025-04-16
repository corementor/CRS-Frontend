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
import { attachmentSchema } from "@/lib/schemaValidation";

const Attachment = () => {
  const [showError, setShowError] = useState(false);

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
      setShowError(true);
    }
  }

  return (
    <div className="w-full min-h-screen">
      <Card className="w-[900px] pt-0">
        <CardHeader className="bg-primary/5 py-3 rounded-t-md">
          <CardTitle>List of Attachments</CardTitle>
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
                <FormField
                  control={form.control}
                  name="articleOfAssociation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Article of Association</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file ? file.name : "");
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="other1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other 1</FormLabel>
                      <FormControl>
                        <Input 
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file ? file.name : "");
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="other2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other 2</FormLabel>
                      <FormControl>
                        <Input 
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file ? file.name : "");
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="other3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other 3</FormLabel>
                      <FormControl>
                        <Input 
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file ? file.name : "");
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attachment;