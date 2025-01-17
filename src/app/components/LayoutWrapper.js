'use client';
import { usePathname } from 'next/navigation';
import Sidebar from "../components/common/Sidebar";
import FloatingChatbot from "../Query-resolver/page";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Define paths where you want to hide the sidebar
  const hideSidebarPaths = ['/LandingPage'];
  const shouldShowSidebar = !hideSidebarPaths.includes(pathname);

  return (
    <main className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {shouldShowSidebar && <Sidebar />}
      <div className="flex flex-col flex-1 h-full overflow-y-auto">
        {children}
        <FloatingChatbot />
      </div>
    </main>
  );
}