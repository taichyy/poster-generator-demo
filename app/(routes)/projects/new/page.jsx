"use client"
import Image from "next/image";
import { Circle } from "fabric";
import { useEffect, useState } from "react";
import { Export, CaretDown } from "@phosphor-icons/react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import FabricCanvas from "@/components/fabric-canvas";

const NewProjectPage = () => {
    const [addElements, setAddElements] = useState([]);
    const [background, setBackground] = useState(null);

    useEffect(() => {
        const circle = new Circle({
            left: 100,
            top: 100,
            radius: 50,
            fill: "#34D399",
            stroke: "#065F46",
            strokeWidth: 2,
        });
        setAddElements([circle]);
    }, []);

    return (
        <main className="flex h-[calc(100dvh-56px)] bg-zinc-100 overflow-hidden">

            {/* ── Left panel: settings ─────────────────────────────── */}
            <aside className="w-64 shrink-0 bg-white border-r border-zinc-200 flex flex-col overflow-y-auto">
                <div className="px-4 py-3 border-b border-zinc-100">
                    <span className="text-[11px] font-semibold text-zinc-400 tracking-[0.12em] uppercase">
                        版型設定
                    </span>
                </div>

                <div className="flex-1 px-2 py-2">
                    <Accordion type="single" collapsible defaultValue="bg">
                        <AccordionItem value="bg" className="border-none">
                            <AccordionTrigger className="text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:no-underline py-2.5 px-3 rounded-xl hover:bg-zinc-50 transition-colors [&[data-state=open]>svg]:rotate-180">
                                背景選擇
                            </AccordionTrigger>
                            <AccordionContent className="pb-2 pt-1 px-1">
                                <div className="grid grid-cols-2 gap-2">
                                    {Array.from({ length: 4 }).map((_, i) => {
                                        const src = `/assets/demo-backgrounds/${i + 1}.jpg`;
                                        const active = background === src;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setBackground(src)}
                                                className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-200 active:scale-[0.97] ${
                                                    active
                                                        ? "ring-2 ring-emerald-400 ring-offset-1"
                                                        : "ring-1 ring-zinc-200 hover:ring-zinc-400"
                                                }`}
                                            >
                                                <Image
                                                    src={src}
                                                    alt={`背景樣式 ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </aside>

            {/* ── Canvas area ──────────────────────────────────────── */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Canvas topbar */}
                <div className="flex items-center justify-between px-4 h-12 border-b border-zinc-200 bg-white shrink-0">
                    <span className="text-xs text-zinc-500 font-medium">編輯畫布</span>
                    <button className="inline-flex items-center gap-1.5 h-7 px-3 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200">
                        <Export size={13} weight="bold" />
                        匯出海報
                    </button>
                </div>

                {/* Canvas */}
                <div className="flex-1 p-6 overflow-auto flex items-start justify-center">
                    <div className="shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden">
                        <FabricCanvas
                            addElements={addElements}
                            background={background}
                        />
                    </div>
                </div>
            </div>

        </main>
    );
};

export default NewProjectPage;
