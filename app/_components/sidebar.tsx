import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar";
import { ChartSpline, Package, ShoppingBasket } from "lucide-react";
import SidebarButton from "./sidebarButton";

export default function AppSidebar() {
  return (
    <Sidebar className="bg-sidebar-light border-none">
      <SidebarHeader className="px-8 py-6">
        <p className="text-neon text-3xl font-bold">ESTOQUEI</p>
      </SidebarHeader>
      <SidebarContent className="text-sidebar-foreground-light font-semibold">
        <SidebarGroup className="p-0 px-2">
          <SidebarMenu className="flex flex-col gap-3">
            <SidebarMenuItem className="rounded-lg">
              <SidebarButton href="/">
                <ChartSpline />
                Dashboard
              </SidebarButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="rounded-lg">
              <SidebarButton href="/products">
                <Package />
                Produtos
              </SidebarButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="rounded-lg">
              <SidebarButton href="/sales">
                <ShoppingBasket />
                Vendas
              </SidebarButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
