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
  Search,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    `px-4 py-2 rounded-lg flex items-center gap-3 ${
      isActive
        ? "bg-primary text-white font-medium text-sm"
        : "text-black hover:bg-primary hover:text-white font-medium text-sm"
    }`;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white ">
        <div className="flex h-14 items-center gap-2 px-8 ">
          <img src={logo} alt="CRS" className="w-6 h-6" />
          <span className="font-bold text-primary">CRS</span>
        </div>

        <div className="p-4 mt-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Overview
              </h3>
              <nav className="space-y-2">
                <NavLink to={"/dashboard"} className={getLinkClassName}>
                  <Home className="w-4 h-4" />
                  <span className="text-sm font-medium">Home</span>
                </NavLink>
                <NavLink
                  to={"/business-registration"}
                  className={getLinkClassName}
                >
                  <Users className="w-4 h-4" />
                  Register your business
                </NavLink>
                <span className="text-xs font-semibold text-gray-500 uppercase mb-2">
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
                <span className="text-xs font-semibold text-gray-500 uppercase mb-2">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-14 px-6 flex items-center justify-end">
          {/* <div className="flex-1 max-w-xl ">
            <div className="relative ">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search your course..."
                className="pl-10 w-full bg-white shadow-sm border-0"
              />
            </div>
          </div> */}

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 hover:bg-primary/5 cursor-pointer
cursor-pointer"
            >
              <Bell className="h-4 w-4 text-black" />
              <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-red-400 rounded-full" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-primary/5 cursor-pointer
cursor-pointer"
            >
              <HelpCircle className="h-4 w-4 text-black " />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-primary/5 cursor-pointer
cursor-pointer"
            >
              <Settings className="h-4 w-4 text-black " />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full cursor-pointer hover:bg-gray-100"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@username"
                    />
                    <AvatarFallback className="bg-gray-200">UN</AvatarFallback>
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

        <ScrollArea className="mx-auto w-full h-[calc(100vh-70px)] overflow-hidden">
          <div className="px-8 py-4 ">
            <Outlet />
            <Toaster />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AppLayout;
