import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const ProjectsLayout = ({children}) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            {children}
        </SidebarProvider>
    );
}
 
export default ProjectsLayout;