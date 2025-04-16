import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Link, Outlet, useLocation } from "react-router-dom"

const BusinessRegistrationPage = () => {
  const location = useLocation()
  
  const isActiveLink = (path: string) => {
    return location.pathname.includes(path)
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Business Registration</h1>
      
      <div className="flex gap-4 mb-8">
        <Link 
          to="/business-registration/general-info"
          className={cn(
            "transition-all",
            isActiveLink("general-info") 
              ? "text-primary" 
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {isActiveLink("general-info") ? (
            <Badge>General Information</Badge>
          ) : (
            "General Information"
          )}
        </Link>

        <Link 
          to="/business-registration/share-info"
          className={cn(
            "transition-all",
            isActiveLink("share-info") 
              ? "text-primary" 
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {isActiveLink("share-info") ? (
            <Badge>Share Information</Badge>
          ) : (
            "Share Information"
          )}
        </Link>

        <Link 
          to="/business-registration/attachment"
          className={cn(
            "transition-all",
            isActiveLink("attachment") 
              ? "text-primary" 
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {isActiveLink("attachment") ? (
            <Badge>Attachments</Badge>
          ) : (
            "Attachments"
          )}
        </Link>
      </div>
      
      <Outlet />
    </div>
  )
}

export default BusinessRegistrationPage