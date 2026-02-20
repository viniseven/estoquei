import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChartSpline, Package, ShoppingBasket } from "lucide-react";

export default function AppSidebar() {
  return (
    <Sidebar className="bg-sidebar-primary border-none">
      <SidebarHeader className="py-6 px-8">
        <p className="text-3xl font-black text-neon">ESTOQUEI</p>
      </SidebarHeader>
      <SidebarContent className="text-gray-sixth font-semibold">
        <SidebarGroup className="p-0 px-2">
          <SidebarMenu className="flex flex-col gap-3">
            <SidebarMenuItem className="hover:bg-gray-primary rounded-lg">
              <SidebarMenuButton className="py-6">
                <a href="" className="flex w-full gap-2">
                  <ChartSpline />
                  Dashboard
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="hover:bg-gray-primary rounded-lg">
              <SidebarMenuButton className="py-6">
                <a href="" className="flex w-full gap-2">
                  <Package />
                  Produtos
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="hover:bg-gray-primary rounded-lg">
              <SidebarMenuButton className="py-6">
                <a href="" className="flex w-full gap-2">
                  <ShoppingBasket />
                  Vendas
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
