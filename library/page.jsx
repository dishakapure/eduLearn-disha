'use client';
import Sidebar from "@/components/ui/Sidebar";
import Library from "./components/Library";
import { useSidebar } from "@/contexts/SidebarProvider";

export default function DashboardPage() {
  const { setTitle } = useSidebar();
  setTitle("Library");
  return (      
        <Sidebar>
          <Library />
        </Sidebar>
  );
}









