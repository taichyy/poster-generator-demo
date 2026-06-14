import { CreditCard, Receipt, ArrowRight, CheckCircle, Warning } from "@phosphor-icons/react/dist/ssr";

const currentPlan = {
    name: "Pro 方案",
    price: "NT$599",
    period: "月",
    renewsAt: "2026-07-14",
    status: "active",
    features: ["無限海報專案", "4K 解析度匯出", "批次匯出 (最多 20 份)", "優先客服支援"],
};

const invoices = [
    { id: "INV-2026-006", date: "2026-06-01", amount: "NT$599", status: "paid", plan: "Pro 方案" },
    { id: "INV-2026-005", date: "2026-05-01", amount: "NT$599", status: "paid", plan: "Pro 方案" },
    { id: "INV-2026-004", date: "2026-04-01", amount: "NT$599", status: "paid", plan: "Pro 方案" },
    { id: "INV-2026-003", date: "2026-03-01", amount: "NT$299", status: "paid", plan: "Starter 方案" },
    { id: "INV-2026-002", date: "2026-02-01", amount: "NT$299", status: "paid", plan: "Starter 方案" },
    { id: "INV-2026-001", date: "2026-01-01", amount: "NT$0", status: "paid", plan: "試用期" },
];

const plans = [
    {
        name: "免費版",
        price: "NT$0",
        period: "",
        current: false,
        features: ["最多 3 個海報專案", "1× 解析度匯出", "基本版型"],
    },
    {
        name: "Starter",
        price: "NT$299",
        period: "/月",
        current: false,
        features: ["最多 20 個海報專案", "2× 解析度匯出", "所有版型", "電子郵件支援"],
    },
    {
        name: "Pro",
        price: "NT$599",
        period: "/月",
        current: true,
        features: ["無限海報專案", "4K 解析度匯出", "批次匯出", "優先客服支援"],
    },
];

const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
};

const BillingPage = () => {
    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            {/* Page header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center">
                    <CreditCard size={18} weight="duotone" className="text-zinc-600" />
                </div>
                <div>
                    <h1 className="text-base font-semibold tracking-tight text-zinc-950">帳單查詢</h1>
                    <p className="text-xs text-zinc-400 font-medium">查看目前方案與過往帳單紀錄</p>
                </div>
            </div>

            <div className="border-t border-zinc-200 mb-6" />

            <div className="flex flex-col gap-6 max-w-3xl">

                {/* Current plan */}
                <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-5">
                    <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">目前方案</h2>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg font-semibold text-zinc-950">{currentPlan.name}</span>
                                <span className="inline-flex items-center gap-1 h-5 px-2 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-700">
                                    <CheckCircle size={10} weight="fill" />
                                    使用中
                                </span>
                            </div>
                            <p className="text-sm text-zinc-500 mb-3">
                                <span className="text-base font-semibold text-zinc-900">{currentPlan.price}</span>
                                <span className="text-zinc-400"> / {currentPlan.period}</span>
                                <span className="text-zinc-400 ml-2">續訂日期：{formatDate(currentPlan.renewsAt)}</span>
                            </p>
                            <ul className="flex flex-col gap-1">
                                {currentPlan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-1.5 text-xs text-zinc-600">
                                        <CheckCircle size={12} weight="fill" className="text-emerald-400 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2 shrink-0">
                            <button className="h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200">
                                升級方案
                            </button>
                            <button className="h-9 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-500 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200">
                                取消訂閱
                            </button>
                        </div>
                    </div>
                </div>

                {/* Payment method */}
                <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-5">
                    <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">付款方式</h2>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-7 rounded-md bg-zinc-100 flex items-center justify-center">
                                <CreditCard size={16} weight="duotone" className="text-zinc-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-zinc-800">Visa 結尾 4242</p>
                                <p className="text-xs text-zinc-400">到期：08 / 2028</p>
                            </div>
                        </div>
                        <button className="h-8 px-3 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                            更換卡片
                        </button>
                    </div>
                </div>

                {/* Plan comparison */}
                <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-5">
                    <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">方案比較</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`rounded-xl border px-4 py-4 ${
                                    plan.current
                                        ? "border-emerald-300 bg-emerald-50/50"
                                        : "border-zinc-200 bg-zinc-50/30"
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-zinc-800">{plan.name}</span>
                                    {plan.current && (
                                        <span className="h-5 px-1.5 rounded text-[10px] font-bold bg-emerald-400 text-white">目前</span>
                                    )}
                                </div>
                                <p className="text-base font-semibold text-zinc-950 mb-3">
                                    {plan.price}<span className="text-xs font-normal text-zinc-400">{plan.period}</span>
                                </p>
                                <ul className="flex flex-col gap-1.5 mb-4">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-1.5 text-xs text-zinc-600">
                                            <CheckCircle size={11} weight="fill" className="text-emerald-400 mt-0.5 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                {!plan.current && (
                                    <button className="w-full h-8 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-700 hover:bg-white active:scale-[0.98] transition-all duration-200">
                                        選擇此方案
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Invoice history */}
                <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">帳單紀錄</h2>
                        <button className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-800 transition-colors">
                            <Receipt size={12} weight="bold" />
                            全部下載
                        </button>
                    </div>
                    <div className="flex flex-col">
                        {invoices.map((inv, i) => (
                            <div
                                key={inv.id}
                                className={`flex items-center justify-between py-3 ${i < invoices.length - 1 ? "border-b border-zinc-100" : ""}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                                        <Receipt size={13} weight="duotone" className="text-zinc-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-zinc-800">{inv.id}</p>
                                        <p className="text-xs text-zinc-400">{inv.plan} · {formatDate(inv.date)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-semibold text-zinc-800">{inv.amount}</span>
                                    <span className="inline-flex items-center h-5 px-2 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-700">
                                        已付款
                                    </span>
                                    <button className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-700 transition-colors">
                                        PDF
                                        <ArrowRight size={11} weight="bold" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
};

export default BillingPage;
