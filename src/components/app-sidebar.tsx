import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/icons/Logo";
import { Link, useLocation } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utlis/getSliderbarItems";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const role = userData?.data?.role ?? "No role found";
  const data = { navMain: getSidebarItems(role) };

  // ✅ বর্তমান পেজ লোকেশন চেক করার জন্য
  const location = useLocation();

  return (
    <Sidebar {...props}>
      {/* === Header === */}
      <SidebarHeader>
        <div className="flex gap-4 p-1 items-center">
          <Link to="/" className="text-white hover:text-primary/90">
            <Logo />
          </Link>
          <h2 className="text-xl font-bold text-[#FF4D00]">Easy Pay</h2>
        </div>
      </SidebarHeader>

      {/* === Sidebar Content === */}
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                
                  const isActive = location.pathname === item.url;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          to={item.url}
                          className={`block px-4 py-2 rounded-md transition-all duration-200 
                            ${
                              isActive
                                ? "bg-[#FF4D00] text-white shadow-md"
                                : " hover:bg-gray-100 hover:text-[#FF4D00]"
                            }`}
                        >
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
