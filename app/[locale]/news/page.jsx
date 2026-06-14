import { getTranslations } from "next-intl/server";
import { MegaphoneSimple, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
};

const NewsPage = async () => {
    const t = await getTranslations('news');
    const items = t.raw('items');
    const unreadCount = items.filter((n) => n.isNew).length;

    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center">
                        <MegaphoneSimple size={18} weight="duotone" className="text-zinc-600" />
                    </div>
                    <div>
                        <h1 className="text-base font-semibold tracking-tight text-zinc-950">{t('pageTitle')}</h1>
                        <p className="text-xs text-zinc-400 font-medium">{t('unread', { count: unreadCount })}</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-zinc-200 mb-6" />

            <div className="flex flex-col gap-3 max-w-2xl">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`group bg-white rounded-xl border px-5 py-4 hover:border-zinc-300 transition-all duration-200 cursor-pointer ${
                            item.isNew ? "border-zinc-200 shadow-sm" : "border-zinc-100"
                        }`}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`inline-flex items-center h-5 px-2 rounded-md text-[11px] font-semibold ${item.categoryColor}`}>
                                        {item.category}
                                    </span>
                                    {item.isNew && (
                                        <span className="inline-flex items-center h-5 px-2 rounded-md text-[11px] font-semibold bg-zinc-950 text-white">
                                            {t('new')}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-sm font-semibold text-zinc-900 leading-snug mb-1">{item.title}</h2>
                                <p className="text-xs text-zinc-500 leading-relaxed">{item.summary}</p>
                            </div>
                            <div className="shrink-0 flex flex-col items-end gap-2 pt-0.5">
                                <span className="text-[11px] text-zinc-400 font-medium whitespace-nowrap">{formatDate(item.date)}</span>
                                <ArrowRight size={14} weight="bold" className="text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-0.5 transition-all duration-200" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 max-w-2xl">
                <button className="w-full h-9 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 active:scale-[0.99] transition-all duration-200">
                    {t('loadMore')}
                </button>
            </div>
        </main>
    );
};

export default NewsPage;
