'use client';
import Sidebar from "@/components/ui/Sidebar";
import Events from "./components/Events";
import { useSidebar } from "@/contexts/SidebarProvider";

export default function DashboardPage() {
  const { setTitle } = useSidebar();
  setTitle("Events");
  return (      
        <Sidebar>
            <Events/>
        </Sidebar>
  );
}









