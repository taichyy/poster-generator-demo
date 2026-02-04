"use client"
import Link from "next/link"
import toast from "react-hot-toast"
import { formatDate } from "date-fns"
import { MoreHorizontal } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export const columns = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "project_id",
        id: "編號",
        header: "編號",
        cell: ({ row }) => {
            const data = row.original
            return (
                <div>
                    {data.project_id}
                </div>
            )
        },
    },
    {
        accessorKey: "project_name",
        id: "海報名稱",
        header: "海報名稱",
        cell: ({ row }) => {
            const data = row.original
            return (
                <div className="whitespace-nowrap">
                    {data.project_name}
                </div>
            )
        },
    },
    {
        header: "最後更新時間",
        cell: ({ row }) => {
            const data = row.original

            return (
                <div>
                    {data?.project_updated_at && (
                        formatDate(data.project_updated_at, "yyyy-MM-dd HH:mm:ss")
                    )}
                </div>
            )
        },
    },
    {
        header: "建立時間",
        cell: ({ row }) => {
            const data = row.original

            return (
                <div>
                    {data?.project_created_at && (
                        formatDate(data.project_created_at, "yyyy-MM-dd HH:mm:ss"
                    ))}
                </div>
            )
        },
    },
    {
        id: "操作",
        cell: ({ row }) => {
            const data = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="p-0 w-8 h-8">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>操作</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                const copy = navigator.clipboard.writeText(data.project_id)
                                copy && toast.success("複製成功")
                            }}
                        >
                            複製海報編號
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                navigator.clipboard.writeText(data.project_name)
                                toast.success("複製成功")
                            }}
                        >
                            複製海報名稱
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={`/projects/${data.project_id}`} className="w-full">
                                海報編輯
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
