import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddressForm from "./AddressForm";
import CompanyDetails from "./CompanyDetails";

const GeneralInfo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // const [companyDetailsCompleted, setCompanyDetailsCompleted] = useState(false);

  // const handleCompanyDetailsSubmit = (data: any) => {
  //   console.log("Company Details:", data);
  //   setCompanyDetailsCompleted(true);
  //   setCurrentStep(2);
  // };

  // const handleAddressSubmit = (data: any) => {
  //   console.log("Address Details:", data);
  //   // Handle final submission or next step
  // };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-6">
        <div
          className={`h-2 w-2 rounded-full ${
            currentStep >= 1 ? "bg-primary" : "bg-gray-200"
          }`}
        />
        <div className="h-0.5 w-8 bg-gray-200" />
        <div
          className={`h-2 w-2 rounded-full ${
            currentStep >= 2 ? "bg-primary" : "bg-gray-200"
          }`}
        />
      </div>

      {/* Form Steps */}
      <div className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-6">
            <CompanyDetails />
            <div className="flex justify-end gap-4 text-muted-foreground">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(2)}
              className="cursor-pointer"
              >
                Next Step
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <AddressForm />
            <div className="flex justify-between text-muted-foreground">
              <Button variant="outline" onClick={handleBack}  className="cursor-pointer">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button type="submit"  className="cursor-pointer">Save</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralInfo;
