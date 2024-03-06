"use client"
 
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import toast from "react-hot-toast"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { dateFormatter, statusFormatter } from "@/lib/utils"
import Link from "next/link"

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
      cell: ({ row }) => {
        const data = row.original
        return (
          <div>
            {data.id}
          </div>
        )
      },
      header: "專案ID",
      id : "海報ID",
      accessorKey : "id"
  },
    {
        cell: ({ row }) => {
          const data = row.original
          return (
            <div className="whitespace-nowrap">
              {data.name}
            </div>
          )
        },
        header: "海報名稱",
        id : "海報名稱",
        accessorKey : "name"
    },
    {
        cell: ({ row }) => {
            const data = row.original
            
            return (
                <div>{dateFormatter(data.updatedAt)}</div>
            )
        },
        header: "最後更新時間",
    },
    {
        cell: ({ row }) => {
            const data = row.original
            
            return (
                <div>{dateFormatter(data.createdAt)}</div>
            )
        },
        header: "建立時間",
    },
    {
      cell: ({ row }) => {
        const data = row.original
        
        return (
            <div className="text-center">{statusFormatter(data.status)}</div>
        )
      },
      header: ()=>{
        return (
          <div className="text-center">狀態</div>
        )
      },
      id:"狀態"
    },
    {
        id: "操作",
        cell: ({ row }) => {
          const data = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>操作</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={
                    () => {navigator.clipboard.writeText(data.id)
                    toast.success("複製成功")}
                  }
                >
                  複製專案ID
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={
                    () => {navigator.clipboard.writeText(data.name)
                    toast.success("複製成功")}
                  }
                >
                  複製海報名稱
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/projects/${data.id}`} className="w-full">
                    海報編輯
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]
  