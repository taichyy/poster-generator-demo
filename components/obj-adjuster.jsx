"use client"
import { Hand, ArrowBigRight, X, AlignLeft, AlignRight, ImageIcon, ALargeSmall, Shapes } from "lucide-react";
import { useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "./ui/separator";
import ObjAdjusterInput from "./ui/obj-adjuster-input";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import Image from "next/image";

const ObjAdjuster = ({
    artboard, data, artboardItems, setArtboardItems,
    height, setHeight, width, setWidth
}) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleSelectClick = (id) => {
        // 使用 map 遍歷 artboardItems 並修改指定 id 的元素的 select 屬性
        const updatedArtboardItems = artboardItems[artboard].map(item => {
            if (item.id === id) {
                return { ...item, select: true };
            } else {
                return { ...item, select: false };
            }
        });

        // Update artboardItems
        setArtboardItems(prevItems => ({
            ...prevItems,
            [artboard]: updatedArtboardItems,
        }));
    }
    
    const handleChange = (id, key, value) => {
    
        const updatedArtboardItems = artboardItems[artboard].map(item => {
            if(key == "scale"){
                if (item.id === id) {
                    return { ...item, [key]: value};
                } else {
                    return item;
                }
            } else if (key === "left" || key === "top" || key ==="right") {
                if (item.id === id) {
                    return { ...item, property: { ...item.property, [key]: value } };
                } else {
                    return item;
                }
            } else if (key == "styleTextAlign"){
                if (item.id === id) {
                    item.style.textAlign = value
                    return item
                } else {
                    return item;
                }
            } else {
                return item;
            }
        });
        
        // Update artboardItems
        setArtboardItems(prevItems => ({
            ...prevItems,
            [artboard]: updatedArtboardItems,
        }));
        
    }
    
    return (
    <Sheet className="bg-transparent" open={isOpen}>
        <SheetTrigger onClick={()=> {
            setIsOpen(true);
        }}>
            <Hand className="cursor-pointer" />
       </SheetTrigger>
        <SheetContent side="left">
            <div className=" flex justify-end">
                <X className="cursor-pointer" onClick={()=> {
                    setIsOpen(false);
                }}/>
            </div>
            <SheetHeader>
                <SheetTitle>元素調整</SheetTitle>
                <SheetDescription>
                   
                </SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-[95%] w-[350px] rounded-md border p-4">
                <div className="cursor-pointer">
                    <div>工作區域</div>
                    <div className="mx-1 mb-2">
                        <div className="space-y-1">
                            <div className=" flex space-x-3">
                                <span className=" whitespace-nowrap flex items-center justify-center">
                                    <ArrowBigRight />
                                    寬度
                                </span>
                                <Input 
                                    type="text" 
                                    placeholder="工作區域寬度"
                                    defaultValue={width}
                                    onChange={(e)=>setWidth(e.target.value)}
                                />
                                <div className="flex items-center justify-center">
                                    mm
                                </div>
                            </div>
                            <div className=" flex space-x-3">
                                <span className=" whitespace-nowrap flex items-center justify-center">
                                    <ArrowBigRight />
                                    高度
                                </span>
                                <Input 
                                    type="text" 
                                    placeholder="工作區域高度"
                                    defaultValue={height} 
                                    onChange={(e)=>setHeight(e.target.value)}
                                />
                                <div className="flex items-center justify-center">
                                    mm
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-5" />
                </div>
                
                {/* 
                    I assume the first item of the items[] is always the background image;
                    hence, I didn't render the first item,
                    if is some cases the first item isn't the background image,
                    modify the code here.
                */}
                {artboardItems[artboard].map( (item, index) => (
                    <div 
                        key={item.id} 
                        onClick={()=>handleSelectClick(item.id)}
                        className="cursor-pointer"
                        style={{
                            backgroundColor : item?.select == true ? "rgba(0,0,0,0.2)" : ""
                        }}
                    >
                        <div className=" flex">
                            {
                                index==0 ? "" :
                                item?.type=="img" ? (<><ImageIcon className=" mr-1"/>{item?.alt}</>) :
                                item?.type=="text" ? (<><ALargeSmall className=" mr-1"/>{item?.content}</>) :
                                item?.type=="shape" ? (<><Shapes className=" mr-1"/>{item?.className}</>) :
                                null
                            }
                        </div>
                        <div className="mx-1 mb-2">
                            <div className="space-y-1">
                                {
                                    index==0 ? "" :
                                    // img
                                    item?.type == "img" ? (
                                    <>
                                        <ObjAdjusterInput 
                                            text="縮放"
                                            append="*100%"
                                            placeholder="縮放比例，單位100%"
                                            onChange={(e)=>handleChange(item?.id, "scale", e.target.value)}
                                            defaultValue={item?.scale}
                                        />
                                        {item?.property?.left ? (
                                            <ObjAdjusterInput 
                                                text="X軸定位"
                                                append="mm"
                                                placeholder="單位mm"
                                                onChange={(e)=>handleChange(item?.id, "left", e.target.value+"px")}
                                                defaultValue={item?.property?.left.split("px")[0]}
                                            />
                                        ) : (
                                            <ObjAdjusterInput 
                                                text="X軸定位(右)"
                                                append="mm"
                                                placeholder="單位mm(自右側)"
                                                onChange={(e)=>handleChange(item?.id, "right", e.target.value+"px")}
                                                defaultValue={item?.property?.right.split("px")[0]}
                                            />
                                        )}
                                        <ObjAdjusterInput 
                                            text="Y軸定位"
                                            append="mm"
                                            placeholder="單位mm"
                                            onChange={(e)=>handleChange(item?.id, "top", e.target.value+"px")}
                                            defaultValue={item?.property?.top.split("px")[0]}
                                        />
                                    </>
                                    ) :
                                    item?.type == "text" ? (
                                    // text
                                    <>
                                        <ObjAdjusterInput 
                                            text="縮放"
                                            append="*100%"
                                            placeholder="縮放比例，單位100%"
                                            onChange={(e)=>handleChange(item?.id, "scale", e.target.value)}
                                            defaultValue={item?.scale}
                                        />
                                        {item?.property?.left ? (
                                            <ObjAdjusterInput 
                                                text="X軸定位"
                                                append="mm"
                                                placeholder="單位mm"
                                                onChange={(e)=>handleChange(item?.id, "left", e.target.value+"px")}
                                                defaultValue={item?.property?.left.split("px")[0]}
                                            />
                                        ) : (
                                            <ObjAdjusterInput 
                                                text="X軸定位(右)"
                                                append="mm"
                                                placeholder="單位mm(自右側)"
                                                onChange={(e)=>handleChange(item?.id, "right", e.target.value+"px")}
                                                defaultValue={item?.property?.right.split("px")[0]}
                                            />
                                        )}
                                        <ObjAdjusterInput 
                                            text="Y軸定位"
                                            append="mm"
                                            placeholder="單位mm"
                                            onChange={(e)=>handleChange(item?.id, "top", e.target.value+"px")}
                                            defaultValue={item?.property?.top.split("px")[0]}
                                        />
                                        {item?.style?.textAlign && (
                                            <ObjAdjusterInput 
                                                text="文字對齊"
                                                append=""
                                                placeholder="左邊 / 右邊"
                                                defaultValue={item?.style?.textAlign}
                                            >
                                                <AlignLeft  onClick={(e)=>handleChange(item?.id, "styleTextAlign", "left")} />
                                                <AlignRight onClick={(e)=>handleChange(item?.id, "styleTextAlign", "right")} />
                                            </ObjAdjusterInput>
                                        )}
                                    </>
                                    ) :
                                    item?.type == "shape" ? (
                                    // shape
                                    <>
                                        {item?.property?.left ? (
                                            <ObjAdjusterInput 
                                                text="X軸定位"
                                                append="mm"
                                                placeholder="單位mm"
                                                onChange={(e)=>handleChange(item?.id, "left", e.target.value+"px")}
                                                defaultValue={item?.property?.left.split("px")[0]}
                                            />
                                        ) : (
                                            <ObjAdjusterInput 
                                                text="X軸定位(右)"
                                                append="mm"
                                                placeholder="單位mm(自右側)"
                                                onChange={(e)=>handleChange(item?.id, "right", e.target.value+"px")}
                                                defaultValue={item?.property?.right.split("px")[0]}
                                            />
                                        )}
                                        <ObjAdjusterInput 
                                            text="Y軸定位"
                                            append="mm"
                                            placeholder="單位mm"
                                            onChange={(e)=>handleChange(item?.id, "top", e.target.value+"px")}
                                            defaultValue={item?.property?.top.split("px")[0]}
                                        />
                                    </>
                                    ) :null
                                }
                                
                            </div>
                        </div>
                        {index==0 ? "" : <Separator className="my-5" />}
                    </div>
                ))}
            </ScrollArea>
        </SheetContent>
    </Sheet>
      
    );
}
 
export default ObjAdjuster;