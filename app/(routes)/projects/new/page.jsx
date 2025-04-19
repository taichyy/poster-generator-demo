"use client"
import Image from "next/image";
import { Circle } from "fabric";
import { useEffect, useState } from "react";

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

    // https://ithelp.ithome.com.tw/users/20168354/ironman/7134

    useEffect(() => {
        // Create a circle
        const newElements = new Circle({
            left: 100, // X position
            top: 100, // Y position
            radius: 50, // Circle radius
            fill: "blue", // Fill color
            stroke: "black", // Border color
            strokeWidth: 2 // Border width
        });

        setAddElements([...addElements, newElements]);
    }, [])

    return (
        <main className="flex gap-3 w-full">
            <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger>基本商品設定</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center space-x-2">
                            {Array.from({ length: 4 }).map((_, index) => {
                                const src = `/assets/demo-backgrounds/${index + 1}.jpg`

                                return (
                                    <Image
                                        key={index}
                                        src={src}
                                        alt="Backgrounds provided by freepik.com."
                                        width={100}
                                        height={100}
                                        className="object-cover aspect-square"
                                        onClick={() => setBackground(src)}
                                    />
                                )
                            })}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex-1 p-2 min-h-screen">
                <FabricCanvas 
                    addElements={addElements} 
                    background={background}
                />
            </div>
        </main>
    );
}

export default NewProjectPage;
