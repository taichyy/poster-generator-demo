import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

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
            // {
            //     title: "系統設定",
            //     url: "#",
            //     icon: Settings,
            // },
        ]
    },
    // {
    //     title: "其他",
    //     links: [
    //         {
    //             title: "最新消息",
    //             url: "#",
    //             icon: Inbox,
    //         },
    //         {
    //             title: "聯絡我們",
    //             url: "#",
    //             icon: Headphones,
    //         },
    //     ]
    // }
]

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
            <SidebarContent>
                <Link href="/" className="flex mt-8 ml-4">
                    <ArrowLeft />
                    {homeText}
                </Link>
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
            {/* <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> {sideBarData.sidebar_user_name}
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                {sideBarData.sidebar_dropdown_items.map((item, index) => (
                                    <DropdownMenuItem key={index}>
                                        <span>{item.title}</span>
                                    </DropdownMenuItem>
                                ))}     
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter> */}
        </Sidebar>
    )
}
