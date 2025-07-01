'use client';
import Sidebar from "@/components/ui/Sidebar";
import MeetingPage from "./components/Meetings";
import { useSidebar } from "@/contexts/SidebarProvider";

export default function DashboardPage() {
  const { setTitle } = useSidebar();
  setTitle("Meetings");
  return (      
        <Sidebar>
          <MeetingPage />
        </Sidebar>
  );
}









