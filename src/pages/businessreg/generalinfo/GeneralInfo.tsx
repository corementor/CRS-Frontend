import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddressForm from "./AddressForm";
import CompanyDetails from "./CompanyDetails";
import BusinessActivity from "./BusinessActivity";
import { showToast } from "@/components/ShowToast";
import { useNavigate } from "react-router-dom";

const GeneralInfo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 3;

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
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
        <div className="h-0.5 w-8 bg-gray-200" />
        <div
          className={`h-2 w-2 rounded-full ${
            currentStep >= 3 ? "bg-primary" : "bg-gray-200"
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
                onClick={handleNext}
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
            <BusinessActivity />
            <div className="flex justify-between text-muted-foreground">
              <Button
                variant="outline"
                onClick={handleBack}
                className="cursor-pointer"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Step
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                className="cursor-pointer"
              >
                Next Step
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <AddressForm />
            <div className="flex justify-between text-muted-foreground">
              <Button
                variant="outline"
                onClick={handleBack}
                className="cursor-pointer"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Step
              </Button>
              <Button
                type="submit"
                className="cursor-pointer text-white font-bold"
                onClick={async () => {
                  // Set loading state
                  const button = document.activeElement as HTMLButtonElement;
                  if (button) {
                    button.disabled = true;
                    button.innerHTML =
                      '<span class="animate-pulse">Submitting...</span>';
                  }

                  // Simulate API delay
                  await new Promise((resolve) => setTimeout(resolve, 2000));

                  // Show success message
                  showToast.success(
                    "Registration Successful!",
                    "Your business registration has been submitted successfully."
                  );

                  // Navigate after a brief pause
                  setTimeout(() => navigate("/"), 500);
                }}
              >
                Complete Registration
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralInfo;
