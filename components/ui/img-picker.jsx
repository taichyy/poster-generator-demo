"use client"
import { useState } from "react";
import { ArrowDownFromLine, ArrowUpFromLine, X } from "lucide-react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const ImgPicker = ({open, setOpen, bgc, setBgc}) => {

    const [full, setFull] = useState(false)
    
    // 1~8
    const bgcCount = 8
    
    return (
    <div 
        className="fixed w-screen bottom-0 left-0 z-10 rounded-tl-lg rounded-tr-lg bg-white border-t-4 border-blue-800 duration-200"
        style={{
            height : full ? "100%" : "50%",
            bottom : open ? "0%" : "-100%"
        }}
    >
        <div className=" px-10 pt-5">
            <div className=" flex justify-between">
                <span><X size={32} onClick={()=>setOpen(false)} /></span>
                { full ? (
                    <span><ArrowDownFromLine size={32} onClick={()=>setFull(false)} /></span>
                ) : (
                    <span><ArrowUpFromLine size={32} onClick={()=>setFull(true)} /></span>
                )}
            </div>
            <div className=" mt-2">
                <div>
                    <h3 className=" font-medium leading-none">背景圖片設定</h3>
                </div>
                <Separator className="my-3" />
                {/* <div className="flex items-center space-x-2">
                    <Badge variant="outline">玄幻</Badge>
                    <Badge variant="outline">奢侈</Badge>
                    <Badge variant="outline">可愛</Badge>
                </div> */}
            </div>
            <div className="grid grid-cols-4 h-[200px] w-full">
                {[...Array(bgcCount)].map((_, index) => (
                    <div key={index} className="relative m-2 aspect-video" onClick={()=>setBgc(index+1)}>
                        <Image
                            src={`/posterAssets/images/backgrounds/${index+1}.png`}
                            alt={`NX樂園背景圖片${index+1}`}
                            fill
                            style={{objectFit: "cover"}}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}
 
export default ImgPicker;