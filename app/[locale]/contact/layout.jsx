import { getTranslations } from "next-intl/server";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const ContactLayout = async ({ children }) => {
    const t = await getTranslations('sidebar');

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center h-14 px-4 border-b border-zinc-200 bg-white sticky top-0 z-10 gap-3">
                    <SidebarTrigger className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors" />
                    <div className="h-4 w-px bg-zinc-200" />
                    <span className="text-sm text-zinc-500 font-medium">{t('contact')}</span>
                </div>
                {children}
            </div>
        </SidebarProvider>
    );
};

export default ContactLayout;
