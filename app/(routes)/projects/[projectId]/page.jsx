"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeftCircle, Pencil } from "lucide-react";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import SideBar from "./side-bar";
import { detailData } from "@/lib/data"
import Artboard from "@/components/ui/artboard";
import FlexCard from "@/components/ui/flex-card";
import ImgPicker from "@/components/ui/img-picker";
import BasicTextBox from "@/components/ui/basic-text-box";

const ProjectEditPage = () => {

    // Img picker open state
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(detailData)
    const [bgc, setBgc] = useState(data.bgc)

    return (
        <div className="h-full px-2 py-6 flex-1">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={20} className="hidden md:flex min-w-[200px] max-w-[20%] pt-2 justify-center">
                    <div>
                        <Link href="/projects">
                            <ArrowLeftCircle className="ml-4 mb-2" size={36} />
                        </Link>
                        <SideBar className="hidden md:block" />
                        <FlexCard title="背景圖片" desc="選擇海報背景">
                            <div className="relative" onClick={() => setOpen(true)}>
                                <Image
                                    src={`/posterAssets/images/backgrounds/${bgc}.png`}
                                    alt="當前正在使用之海報背景圖片"
                                    width={100}
                                    height={50}
                                    className="w-full h-auto aspect-video"
                                />
                                <div className="absolute w-full h-full flex items-center justify-center inset-0 bg-black/40 opacity-0 hover:opacity-40 duration-150">
                                    <Pencil className="text-white" size={32} />
                                </div>
                            </div>
                        </FlexCard>
                        <FlexCard title="基本資料 ">
                            <BasicTextBox title="專案名稱" text={data.projectName} />
                            <BasicTextBox title="海報標題名稱" text={data.name} />
                            <BasicTextBox title="海報上方標題" text={data.title} />
                            <BasicTextBox title="每抽價格" text={data.price} />
                            <BasicTextBox title="連抽價格" text={
                                data.promotion.map((data, index) => (
                                    <div key={index}>
                                        {data.quantity < 10 ? ` ${data.quantity}` : data.quantity}抽 {data.price}元
                                    </div>
                                ))}
                            />
                        </FlexCard>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle className="hidden md:flex" />
                <ResizablePanel defaultSize={80} className="ml-2 w-full md:w-auto">
                    {/* (default) scale => *100%    E.g. 2=>200%*/}
                    <Artboard wpx="210" hpx="800" data={data} scale="1.5" />
                </ResizablePanel>
            </ResizablePanelGroup>
            <ImgPicker open={open} setOpen={setOpen} bgc={bgc} setBgc={setBgc} />
        </div>
    );
}

export default ProjectEditPage;