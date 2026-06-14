import Link from "next/link";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Plus } from "@phosphor-icons/react/dist/ssr";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProjectsTableClient from "./(components)/projects-table-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProjectsPage = async ({ searchParams }) => {
    const waitSearch = await searchParams;
    const page = waitSearch?.page || 1;
    const t = await getTranslations('projects');
    const locale = await getLocale();

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
    ];

    const userData = { user_name: "田中フォーチュン" };

    const labels = {
        colId:           t('colId'),
        colName:         t('colName'),
        colUpdated:      t('colUpdated'),
        colCreated:      t('colCreated'),
        colActions:      t('colActions'),
        actionsLabel:    t('actionsLabel'),
        copyId:          t('copyId'),
        copyName:        t('copyName'),
        editPoster:      t('editPoster'),
        copySuccess:     t('copySuccess'),
        search:          t('search'),
        columnSettings:  t('columnSettings'),
        selected:        t('selected'),
        rows:            t('rows'),
        noResults:       t('noResults'),
    };

    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Avatar className="w-9 h-9 border border-zinc-200 shadow-sm">
                        <AvatarImage src="https://picsum.photos/seed/user-tanaka-avatar/80/80" />
                        <AvatarFallback className="text-xs font-semibold bg-emerald-50 text-emerald-700">
                            {userData.user_name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-base font-semibold tracking-tight text-zinc-950">{userData.user_name}</h1>
                        <p className="text-xs text-zinc-400 font-medium">{t('projectCount', { count: projectsData.length })}</p>
                    </div>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200 border-0">
                            <Plus size={14} weight="bold" />
                            {t('newPoster')}
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-2xl border-zinc-100">
                        <DialogHeader>
                            <DialogTitle className="text-base font-semibold tracking-tight">{t('newPosterDialogTitle')}</DialogTitle>
                            <DialogDescription className="text-sm text-zinc-500">{t('newPosterDialogDesc')}</DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="mt-2 gap-2">
                            <Button type="button" variant="outline" className="rounded-lg h-9 text-sm border-zinc-200">
                                {t('cancel')}
                            </Button>
                            <Link href={`/${locale}/projects/new`}>
                                <Button type="button" className="rounded-lg h-9 text-sm bg-zinc-950 hover:bg-zinc-800 text-white">
                                    {t('confirm')}
                                </Button>
                            </Link>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="border-t border-zinc-200 mb-6" />

            <ProjectsTableClient
                data={projectsData}
                page={page}
                locale={locale}
                labels={labels}
            />
        </main>
    );
};

export default ProjectsPage;
