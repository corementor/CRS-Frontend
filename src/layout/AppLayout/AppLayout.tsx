import {
  Book,
  HeartPulse,
  Home,
  Landmark,
  Snowflake,
  Users,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/logo.png";
import { Toaster } from "@/components/ui/sonner";

const AppLayout = () => {
  const navigate = useNavigate();
  async function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded flex items-center gap-2 ${
      isActive
        ? "text-primary font-medium hover:bg-primary/5 hover:text-primary"
        : "text-muted-foreground font-light hover:bg-primary/5 hover:text-primary"
    }`;

  return (
    <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="border-r bg-card/50 backdrop-blur-md lg:backdrop-blur-0 border-muted/50 shadow-sm flex flex-col">
        <div className="flex h-14 items-center gap-3 px-4 lg:h-[60px] lg:px-6 font-bold border-b ">
          <img
            src={logo}
            alt="Company Logo"
            className="w-8 h-8 object-contain"
          />
          <span>CRS</span>
        </div>
        <div className="flex flex-col h-[calc(100vh-70px)] lg:span-1 text-sm font-medium">
          <nav className="flex flex-1 flex-col gap-2 px-4 py-4 lg:px-3">
            <span className="text-sm font-medium text-muted-foreground">
              Overview
            </span>
            <NavLink to={"/dashboard"} className={getLinkClassName}>
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </NavLink>
            <NavLink to={"/business-registration"} className={getLinkClassName}>
              <Users className="w-4 h-4" />
              Register your business
            </NavLink>
            <span className="text-sm font-medium text-muted-foreground mt-4">
              All Documents
            </span>
            <NavLink to={"/education"} className={getLinkClassName}>
              <Book className="w-4 h-4" />
              Annual return
            </NavLink>
            <NavLink to={"/health"} className={getLinkClassName}>
              <HeartPulse className="w-4 h-4" />
              Certificates
            </NavLink>
            <span className="text-sm font-medium text-muted-foreground mt-4">
              Other
            </span>
            <NavLink to={"/defense"} className={getLinkClassName}>
              <Snowflake className="w-4 h-4" />
              Contact us
            </NavLink>
            <NavLink to={"/infrastructure"} className={getLinkClassName}>
              <Landmark className="w-4 h-4" />
              Profile
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col">
        <header className="h-14 lg:h-[60px] border-b shadow px-6 flex items-center gap-4">
          <div className="flex-1 flex items-center gap-4">
            {/* <div className="relative w-96">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 w-full h-9 bg-transparent"
              />
            </div> */}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative h-9 w-9 hover:bg-primary/5">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-red-400 rounded-full" />
            </Button>

            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary/5">
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </Button>

            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary/5">
              <Settings className="h-4 w-4 text-muted-foreground" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@username" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        {/* Header */}

        {/* Main Content */}
        <ScrollArea className="mx-auto w-full h-[calc(100vh-70px)] overflow-hidden">
          <div className="px-8 py-4">
            <Outlet />
            <Toaster />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AppLayout;
