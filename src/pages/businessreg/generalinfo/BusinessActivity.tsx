import { Factory, Plus, MinusCircle, Briefcase } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const businessActivitySchema = z.object({
  businessSector: z.string().min(1, "Please select a business sector"),
  selectedLines: z
    .array(z.string())
    .min(1, "Please select at least one business line"),
  mainActivity: z.string().min(1, "Please select your main business activity"),
});

const businessLines = {
  a: [
    {
      code: "A0111",
      name: "Growing of cereals (except rice), leguminous crops and oil seeds",
    },
    { code: "A0112", name: "Growing of rice" },
    {
      code: "A0113",
      name: "Growing of vegetables and melons, roots and tubers",
    },
    { code: "A0114", name: "Growing of sugar cane" },
    { code: "A0115", name: "Growing of tobacco" },
    { code: "A0116", name: "Growing of fibre crops" },
    { code: "A0119", name: "Growing of other non-perennial crops" },
    { code: "A0121", name: "Growing of grapes" },
  ],
  // Add other sectors as needed
};

const businessSectors = [
  { value: "a", label: "A - Agriculture, forestry and fishing" },
  { value: "b", label: "B - Mining and quarrying" },
  { value: "c", label: "C - Manufacturing" },
  {
    value: "d",
    label: "D - Electricity, gas, steam and air conditioning supply",
  },
  {
    value: "e",
    label:
      "E - Water supply; sewerage, waste management and remediation activities",
  },
  { value: "f", label: "F - Construction" },
  {
    value: "g",
    label:
      "G - Wholesale and retail trade; repair of motor vehicles and motorcycles",
  },
  { value: "h", label: "H - Transportation and storage" },
  { value: "i", label: "I - Accommodation and food service activities" },
  { value: "j", label: "J - Information and communication" },
  { value: "k", label: "K - Financial and insurance activities" },
  { value: "l", label: "L - Real estate activities" },
  {
    value: "m",
    label: "M - Professional, scientific and technical activities",
  },
  { value: "n", label: "N - Administrative and support service activities" },
  {
    value: "o",
    label: "O - Public administration and defence; compulsory social security",
  },
  { value: "p", label: "P - Education" },
  { value: "q", label: "Q - Human health and social work activities" },
  { value: "r", label: "R - Arts, entertainment and recreation" },
  { value: "s", label: "S - Other service activities" },
];

const BusinessActivity = () => {
  const form = useForm<z.infer<typeof businessActivitySchema>>({
    resolver: zodResolver(businessActivitySchema),
    defaultValues: {
      businessSector: "",
      selectedLines: [],
      mainActivity: "",
    },
  });

  const [availableBusinessLines, setAvailableBusinessLines] = useState<
    Array<{ code: string; name: string }>
  >([]);
  const [selectedLines, setSelectedLines] = useState<
    Array<{ code: string; name: string }>
  >([]);

  const onSubmit = async (values: z.infer<typeof businessActivitySchema>) => {
    console.log(values);
  };

  useEffect(() => {
    const sectorLines =
      businessLines[
        form.getValues("businessSector") as keyof typeof businessLines
      ] || [];
    setAvailableBusinessLines(sectorLines);
  }, [form.watch("businessSector")]);

  const handleAddBusinessLine = (line: { code: string; name: string }) => {
    setSelectedLines([...selectedLines, line]);
    setAvailableBusinessLines(
      availableBusinessLines.filter((l) => l.code !== line.code)
    );
  };

  const handleRemoveBusinessLine = (line: { code: string; name: string }) => {
    setSelectedLines(selectedLines.filter((l) => l.code !== line.code));
    setAvailableBusinessLines([...availableBusinessLines, line]);
  };

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <Card className="shadow-none">
        <CardHeader className="border-b bg-card">
          <div className="flex items-center gap-2">
            <Factory className="h-5 w-5 text-muted-foreground" />
            <div className="space-y-0.5">
              <CardTitle className="text-slate-600">
                Business Activity
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Select your business sector and activities
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Business Sector Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <h3 className="font-medium">Business Sector</h3>
                </div>
                <FormField
                  control={form.control}
                  name="businessSector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Select Business Sector
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[400px]">
                            <SelectValue placeholder="Please Select a Business Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {businessSectors.map((sector) => (
                            <SelectItem key={sector.value} value={sector.value}>
                              {sector.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Business Lines Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Select Business Line
                      </h3>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2 min-h-[200px] overflow-y-auto">
                      {availableBusinessLines.map((line) => (
                        <Button
                          key={line.code}
                          variant="ghost"
                          className="w-full justify-start text-left font-normal hover:bg-accent"
                          onClick={() => handleAddBusinessLine(line)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {line.code} - {line.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Selected Business Line
                      </h3>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2 min-h-[200px] overflow-y-auto">
                      {selectedLines.map((line) => (
                        <Button
                          key={line.code}
                          variant="ghost"
                          className="w-full justify-start text-left font-normal hover:bg-accent"
                          onClick={() => handleRemoveBusinessLine(line)}
                        >
                          <MinusCircle className="h-4 w-4 mr-2 text-destructive" />
                          {line.code} - {line.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Business Activity Section */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="mainActivity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Select Main Business Activity
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[400px]">
                            <SelectValue placeholder="Select your main business activity" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* This should be populated from selected business lines */}
                          <SelectItem value="c1030">
                            C1030 - Processing and preserving of fruit and
                            vegetables
                          </SelectItem>
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

export default BusinessActivity;
