import { MegaphoneSimple, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const newsItems = [
    {
        id: 1,
        category: "新功能",
        categoryColor: "bg-emerald-100 text-emerald-700",
        title: "全新海報版型上線：動漫風格系列",
        summary: "新增 12 款動漫主題版型，支援橫式與直式格式，適合各類一番賞活動使用。",
        date: "2026-06-10",
        isNew: true,
    },
    {
        id: 2,
        category: "功能更新",
        categoryColor: "bg-blue-100 text-blue-700",
        title: "匯出解析度升級至 4K",
        summary: "Pro 方案以上用戶現可將海報匯出為最高 4K 解析度，適合大型輸出與印刷需求。",
        date: "2026-06-03",
        isNew: true,
    },
    {
        id: 3,
        category: "維護公告",
        categoryColor: "bg-amber-100 text-amber-700",
        title: "6/15 凌晨系統維護通知",
        summary: "本系統將於 2026 年 6 月 15 日 01:00 至 03:00 進行例行維護，期間服務暫停。",
        date: "2026-05-28",
        isNew: false,
    },
    {
        id: 4,
        category: "新功能",
        categoryColor: "bg-emerald-100 text-emerald-700",
        title: "批次匯出功能正式開放",
        summary: "支援一次選取多份海報進行批次下載，大幅節省整理時間，最多可同時匯出 20 份。",
        date: "2026-05-20",
        isNew: false,
    },
    {
        id: 5,
        category: "功能更新",
        categoryColor: "bg-blue-100 text-blue-700",
        title: "物件對齊輔助線更新",
        summary: "畫布編輯器現支援智慧對齊輔助線，移動物件時自動顯示中心線與邊緣對齊提示。",
        date: "2026-05-12",
        isNew: false,
    },
    {
        id: 6,
        category: "業務公告",
        categoryColor: "bg-zinc-100 text-zinc-600",
        title: "方案定價調整說明",
        summary: "為維持服務品質，Starter 方案將於 7 月起每月調整為 NT$299，現有用戶享有 3 個月緩衝期。",
        date: "2026-05-01",
        isNew: false,
    },
];

const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
};

const NewsPage = () => {
    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            {/* Page header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center">
                        <MegaphoneSimple size={18} weight="duotone" className="text-zinc-600" />
                    </div>
                    <div>
                        <h1 className="text-base font-semibold tracking-tight text-zinc-950">最新消息</h1>
                        <p className="text-xs text-zinc-400 font-medium">{newsItems.filter((n) => n.isNew).length} 則未讀</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-zinc-200 mb-6" />

            {/* News list */}
            <div className="flex flex-col gap-3 max-w-2xl">
                {newsItems.map((item) => (
                    <div
                        key={item.id}
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
                                            NEW
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-sm font-semibold text-zinc-900 leading-snug mb-1">
                                    {item.title}
                                </h2>
                                <p className="text-xs text-zinc-500 leading-relaxed">
                                    {item.summary}
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col items-end gap-2 pt-0.5">
                                <span className="text-[11px] text-zinc-400 font-medium whitespace-nowrap">
                                    {formatDate(item.date)}
                                </span>
                                <ArrowRight
                                    size={14}
                                    weight="bold"
                                    className="text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-0.5 transition-all duration-200"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load more */}
            <div className="mt-6 max-w-2xl">
                <button className="w-full h-9 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 active:scale-[0.99] transition-all duration-200">
                    載入更多
                </button>
            </div>
        </main>
    );
};

export default NewsPage;
