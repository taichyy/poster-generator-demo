import { ChevronUp, Headphones, Home, Inbox, Settings, User2 } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

// Menu items.
const items = [
    {
        title: "功能",
        links: [
            {
                title: "海報管理",
                url: "/projects",
                icon: Home,
            },
            {
                title: "系統設定",
                url: "#",
                icon: Settings,
            },
        ]
    },
    {
        title: "其他",
        links: [
            {
                title: "最新消息",
                url: "#",
                icon: Inbox,
            },
            {
                title: "聯絡我們",
                url: "#",
                icon: Headphones,
            },
        ]
    }
]

export async function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                {items.map((group, index) => (
                    <SidebarGroup key={index}>
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.links.map((item, index) => (
                                    <SidebarMenuItem key={index}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
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
                                <SidebarMenuButton>
                                    <User2 /> 使用者名稱
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>帳戶設定</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>帳單查詢</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>登　　出</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
