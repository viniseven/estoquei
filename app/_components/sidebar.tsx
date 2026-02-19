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

function AppSidebar() {
  return (
    <Sidebar className="bg-sidebar-primary border-none px-8">
      <SidebarHeader className="py-6">
        <h1 className="text-2xl font-black text-neon">ESTOQUEI</h1>
      </SidebarHeader>
      <SidebarContent className="text-gray-sixth">
        <SidebarGroup className="p-0 text-">
          <SidebarMenu className="flex flex-col gap-3">
            <SidebarMenuItem>
              <SidebarMenuButton>
                <a href="" className="flex w-full gap-2">
                  <ChartSpline />
                  Dashboard
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <a href="" className="flex w-full gap-2">
                  <Package />
                  Produtos
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
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

export default AppSidebar;
