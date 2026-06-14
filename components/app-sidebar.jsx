import { CaretUp, Headset, House, Tray, Gear, User, CreditCard } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const items = [
    {
        title: "功能",
        links: [
            { title: "海報管理", url: "/projects", icon: House },
            { title: "系統設定", url: "/settings", icon: Gear },
        ],
    },
    {
        title: "其他",
        links: [
            { title: "最新消息", url: "/news", icon: Tray },
            { title: "聯絡我們", url: "/contact", icon: Headset },
        ],
    },
];

const LogoMark = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="14" rx="2" fill="#34D399" />
        <rect x="13" y="2" width="9" height="9" rx="2" fill="#34D399" opacity="0.6" />
        <rect x="13" y="13" width="9" height="9" rx="2" fill="#34D399" opacity="0.35" />
    </svg>
);

export async function AppSidebar() {
    const homeText = "回首頁";
    const sideBarData = {
        sidebar_user_name: "使用者名稱",
        sidebar_dropdown_items: [
            { title: "帳戶設定" },
            { title: "帳單查詢" },
            { title: "登　　出" }
        ]
    }
    return (
        <Sidebar>
            {/* Brand header */}
            <div className="flex items-center gap-2.5 px-4 h-14 border-b border-sidebar-border shrink-0">
                <LogoMark />
                <span className="text-sm font-semibold text-zinc-950">海報生成</span>
            </div>

            <SidebarContent>
                {items.map((group, i) => (
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
                                    <span className="flex-1 text-left text-zinc-700">使用者名稱</span>
                                    <CaretUp size={12} className="text-zinc-400" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width] rounded-xl border border-zinc-100 shadow-lg"
                            >
                                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                                    <Link href="/account">帳戶設定</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="text-sm cursor-pointer rounded-lg">
                                    <Link href="/billing">帳單查詢</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-sm text-red-600 cursor-pointer rounded-lg focus:text-red-600 focus:bg-red-50">
                                    登出
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
