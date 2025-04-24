import { Building2, Users, UserCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const companyDetailsSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  registrationType: z.enum([
    "domestic",
    "enterprise",
    "foreign",
    "nameReservation",
  ]),
  companyCategory: z.string().min(1, "Please select a category"),
  companyType: z.string().min(1, "Please select a type"),
  position: z.enum(["chairman", "member"]),
});

const CompanyDetails = () => {
  //   const [showError, setShowError] = useState(false);

  const form = useForm<z.infer<typeof companyDetailsSchema>>({
    resolver: zodResolver(companyDetailsSchema),
    defaultValues: {
      companyName: "",
      registrationType: "domestic",
      companyCategory: "",
      companyType: "",
      position: "member",
    },
  });

  async function onSubmit(values: z.infer<typeof companyDetailsSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Error:", error);
      //   setShowError(true);
    }
  }

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <Card className="shadow-sm">
        <CardHeader className="border-b bg-card">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-muted-foreground" />
            <div className="space-y-0.5">
              <CardTitle className="text-slate-600">Company Details</CardTitle>
              <p className="text-sm text-muted-foreground">
                Please provide the registration details for your company
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Company Name Section */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Enter your company name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter company name"
                          className="w-[400px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <h3 className="font-medium">Registration Category</h3>
                </div>
                <FormField
                  control={form.control}
                  name="registrationType"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-muted-foreground">
                        Please select one of the following category for
                        registration
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="domestic" />
                            <FormLabel className="font-normal">
                              Domestic
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="enterprise" />
                            <FormLabel className="font-normal">
                              Enterprise
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="foreign" />
                            <FormLabel className="font-normal">
                              Foreign
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <h3 className="font-medium">Company Details</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          Company Category
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Please select Category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="category1">Public</SelectItem>
                            <SelectItem value="category2">Private</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="type1">
                              Limited by shares
                            </SelectItem>
                            <SelectItem value="type2">
                              Limited by garantee
                            </SelectItem>
                            <SelectItem value="type1">
                              Limited by shares and garantee
                            </SelectItem>
                            <SelectItem value="type2">Unlimited</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCircle className="h-4 w-4" />
                  <h3 className="font-medium">Your Position</h3>
                </div>
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Please select your position
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[400px]">
                            <SelectValue placeholder="Select your position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="director">Managing Director</SelectItem>
                          <SelectItem value="chairman">Chairman</SelectItem>
                          <SelectItem value="member">Member</SelectItem>
                        </SelectContent>
                      </Select>
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

export default CompanyDetails;
