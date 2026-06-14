"use client"

import Link from "next/link";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { formatDate } from "date-fns";
import { MoreHorizontal } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";

// Columns are built inside the component so they can access translated labels via closure
function buildColumns(labels, locale) {
    return [
        {
            accessorKey: "project_id",
            id: labels.colId,
            header: labels.colId,
            cell: ({ row }) => <div>{row.original.project_id}</div>,
        },
        {
            accessorKey: "project_name",
            id: labels.colName,
            header: labels.colName,
            cell: ({ row }) => <div className="whitespace-nowrap">{row.original.project_name}</div>,
        },
        {
            header: labels.colUpdated,
            cell: ({ row }) => {
                const d = row.original;
                return <div>{d?.project_updated_at && formatDate(d.project_updated_at, "yyyy-MM-dd HH:mm:ss")}</div>;
            },
        },
        {
            header: labels.colCreated,
            cell: ({ row }) => {
                const d = row.original;
                return <div>{d?.project_created_at && formatDate(d.project_created_at, "yyyy-MM-dd HH:mm:ss")}</div>;
            },
        },
        {
            id: labels.colActions,
            cell: ({ row }) => {
                const data = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="p-0 w-8 h-8">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>{labels.actionsLabel}</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => { navigator.clipboard.writeText(data.project_id); toast.success(labels.copySuccess); }}>
                                {labels.copyId}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { navigator.clipboard.writeText(data.project_name); toast.success(labels.copySuccess); }}>
                                {labels.copyName}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={`/${locale}/projects/${data.project_id}`} className="w-full">
                                    {labels.editPoster}
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];
}

const ProjectsTableClient = ({ data, page, locale, labels }) => {
    const columns = useMemo(() => buildColumns(labels, locale), [labels, locale]);

    return (
        <DataTable
            columns={columns}
            data={data}
            page={page}
            total={data.length}
            labels={labels}
        />
    );
}

export default ProjectsTableClient;