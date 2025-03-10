import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { columns } from "./columns"
import { Button } from "@/components/ui/button";
import { DataTable } from "./(components)/data-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProjectsPage = async ({
    searchParams,
}) => {
    const waitSearch = await searchParams
    const page = waitSearch?.page || 1

    const projectsData = [
        {
            project_id: "0000000393",
            project_name: "DEMO商品名稱 350/1700/3200",
            project_created_at: "2023-02-19T13:30:00.000Z",
            project_updated_at: "2023-02-19T13:30:00.000Z",
        },
        {
            project_id: "0000000395",
            project_name: "DEMO商品名稱2 350/1700",
            project_created_at: "2023-02-19T13:40:00.000Z",
            project_updated_at: "2023-02-19T15:30:00.000Z",
        },
    ]

    const userData = {
        user_avatar: "mock-uuid-ABCDE",
        user_name: "一番くじ"
    }

    return (
        <main className="flex flex-col px-5 py-5 w-full min-h-screen">
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center ml-2 md:ml-0">
                        <h2 className="font-semibold text-slate-800 text-xl">
                            {userData.user_name}
                        </h2>
                    </div>
                </div>
                <Dialog>
                    <Tooltip>
                        <TooltipTrigger asChild className="cursor-pointer">
                            <DialogTrigger asChild>
                                <PlusCircle />
                            </DialogTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>新增海報</p>
                        </TooltipContent>
                    </Tooltip>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                新增海報
                            </DialogTitle>
                            <DialogDescription>
                                確定後將進入海報設定流程
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button type="button" variant="outline">
                                取消
                            </Button>
                            <Link href="/projects/new">
                                <Button type="button">
                                    確定
                                </Button>
                            </Link>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <DataTable
                columns={columns}
                data={projectsData}
                page={page}
                total={projectsData.length}
            />
        </main>
    );
}

export default ProjectsPage;