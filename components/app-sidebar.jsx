import Link from "next/link";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { CaretUp, Headset, House, Tray, Gear, User } from "@phosphor-icons/react/dist/ssr";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar";

export const AppSidebar = async () => {
    const t = await getTranslations('sidebar');
    const locale = await getLocale();

    const groups = [
        {
            title: t('groupFeatures'),
            links: [
                { title: t('projects'), url: `/${locale}/projects`, icon: House },
                { title: t('settings'), url: `/${locale}/settings`, icon: Gear },
            ],
        },
        {
            title: t('groupOther'),
            links: [
                { title: t('news'),    url: `/${locale}/news`,    icon: Tray },
                { title: t('contact'), url: `/${locale}/contact`, icon: Headset },
            ],
        },
    ];

    return (
        <Sidebar>
            <Link href={`/${locale}/`} className="cursor-pointer">
                <div className="flex items-center gap-2.5 px-4 h-14 border-b border-sidebar-border shrink-0 bg-zinc-950">
                    <Image src="/logo-main.png" alt="一番賞海報生成器" width={110} height={32} className="h-8 w-auto object-contain" />
                </div>
            </Link>

            <SidebarContent>
                {groups.map((group, i) => (
                    <SidebarGroup key={i}>
                        <SidebarGroupLabel className="text-[10.5px] tracking-[0.14em] text-zinc-400 uppercase font-medium">
                            {group.title}
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.links.map((item, j) => (
                                    <SidebarMenuItem key={j}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                                href={item.url}
                                                className="flex items-center gap-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 rounded-lg px-3 h-9 transition-colors"
                                            >
                                                <item.icon size={15} weight="duotone" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="flex items-center gap-2.5 w-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-lg px-3 h-10">
                                    <User size={15} weight="duotone" />
                                    <span className="flex-1 text-left text-zinc-700">{t('username')}</span>
                                    <CaretUp size={12} className="text-zinc-400" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width] rounded-xl border border-zinc-100 shadow-lg">
                                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                                    <Link href={`/${locale}/account`}>{t('accountSettings')}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                                    <Link href={`/${locale}/billing`}>{t('billing')}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="text-sm text-red-600 cursor-pointer rounded-lg focus:text-red-600 focus:bg-red-50">
                                    <Link href={`/${locale}/login`}>
                                        {t('logout')}
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
