"use client"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import * as React from "react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PaginationButtons } from "@/components/pagination-buttons"

export function DataTable({ columns, data, page, total }) {
    const [sorting, setSorting] = React.useState([])
    const [columnFilters, setColumnFilters] = React.useState([])
    const [columnVisibility, setColumnVisibility] = React.useState({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div>
            <div className="flex md:flex-row flex-col-reverse md:justify-between items-center py-4">
                {/* Can not use english name instead of "海報名稱", 
                    since this is the name displayed in the columns selector, 
                    which has to be "海報名稱" */}
                <Input
                    placeholder="搜尋......"
                    value={(table.getColumn("海報名稱")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("海報名稱")?.setFilterValue(event.target.value)
                    }
                    className="w-full md:max-w-sm"
                />
                <div className="flex justify-end md:justify-normal mb-3 md:mb-0 w-full md:w-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" className="ml-2">
                                欄位設定
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter(
                                    (column) => column.getCanHide()
                                )
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="grid grid-cols-3">
                <div className="hidden md:block" />
                <div className="col-span-3 md:col-span-1">
                    <PaginationButtons
                        type="params"
                        page={page}
                        total={100}
                    />
                </div>
                <div className="flex justify-end items-center col-span-3 md:col-span-1 text-muted-foreground text-sm text-center">
                    {[
                        table.getFilteredRowModel().rows.length,
                        "筆內選取了",
                        table.getFilteredSelectedRowModel().rows.length,
                        "筆"
                    ].join(" ")}
                </div>
            </div>
        </div>
    )
}
