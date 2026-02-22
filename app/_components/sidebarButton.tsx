"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarButton({ children, href }: SidebarButtonProps) {
  const pathname = usePathname();
  return (
    <Button
      asChild
      className={`hover:bg-sidebar-hover-light w-full text-lg ${pathname == href ? "bg-sidebar-hover-light text-neon" : ""}`}
      variant={pathname == href ? "secondary" : "ghost"}
    >
      <Link href={href} className="flex justify-start gap-2">
        {children}
      </Link>
    </Button>
  );
}
