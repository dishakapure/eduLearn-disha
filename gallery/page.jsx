'use client';
import Sidebar from "@/components/ui/Sidebar";
import Gallery from "./components/Gallery";
import { useSidebar } from "@/contexts/SidebarProvider";

export default function DashboardPage() {
  const { setTitle } = useSidebar();
  setTitle("Gallery");
  return (      
        <Sidebar>
          <Gallery />
        </Sidebar>
  );
}









