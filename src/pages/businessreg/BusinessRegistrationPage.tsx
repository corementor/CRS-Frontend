import { cn } from "@/lib/utils";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2, FileText, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { showToast } from "@/components/ShowToast";

const BusinessRegistrationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = [
    "/business-registration/general-info",
    "/business-registration/share-info",
    "/business-registration/attachment",
  ];

  const currentIndex = routes.findIndex((route) =>
    location.pathname.includes(route.split("/").pop()!)
  );

  const handleNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard"); // Or wherever you want to navigate on cancel
  };

  const isActiveLink = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="space-y-6  bg-white p-8 rounded-2xl ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">
            Business Registration
          </h1>
          <p className="text-sm text-muted-foreground">
            Register your business with our simple three-step process
          </p>
        </div>
      </div>

      <Card className="border-none shadow-none">
        <nav className="flex border-none overflow-x-auto">
          <Link
            to="/business-registration/general-info"
            className={cn(
              "flex items-center gap-2 px-4 py-3 relative transition-colors hover:text-primary",
              isActiveLink("general-info")
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            <Building2 className="h-4 w-4" />
            <span>General Information</span>
            {isActiveLink("general-info") && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary " />
            )}
          </Link>

          <Separator orientation="vertical" className="h-6 my-auto" />

          <Link
            to="/business-registration/share-info"
            className={cn(
              "flex items-center gap-2 px-4 py-3 relative transition-colors hover:text-primary",
              isActiveLink("share-info")
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            <FileText className="h-4 w-4" />
            <span>Share Information</span>
            {isActiveLink("share-info") && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>

          <Separator orientation="vertical" className="h-6 my-auto" />

          <Link
            to="/business-registration/attachment"
            className={cn(
              "flex items-center gap-2 px-4 py-3 relative transition-colors hover:text-primary",
              isActiveLink("attachment")
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            <Paperclip className="h-4 w-4" />
            <span>Attachments</span>
            {isActiveLink("attachment") && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
        </nav>

        <div className="p-6">
          <Outlet />

          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t text-muted-foreground">
            <Button variant="outline" onClick={handleCancel}  className="cursor-pointer">
              Cancel
            </Button>

            {currentIndex < routes.length - 1 ? (
              <Button onClick={handleNext}  className="cursor-pointer text-white font-bold">Save & Next</Button>
            ) : (
              <Button onClick={() => showToast.success(
                "Registration Successful!",
                "Your business registration has been submitted successfully."
              )} className="cursor-pointer text-white font-bold">Submit</Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BusinessRegistrationPage;
