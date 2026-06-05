"use client";

import * as fabric from "fabric";
import { Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FabricCanvas = ({ addElements, background }) => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if (canvasRef.current) {
            const initCanvas = new fabric.Canvas(canvasRef.current, {
                width: 500,
                height: 500,
            })

            initCanvas.backgroundColor = "#ccc";
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            }
        }
    }, [])
    
    const addRectangle = () => {
        if (canvas) {
            const rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: "red",
                width: 100,
                height: 100,
            });
            
            canvas.add(rect);
        }
    }

    return (
        <div>
            <ul>
                <li>
                    <Square onClick={addRectangle} />
                </li>
            </ul>
            <canvas
                id="canvas"
                ref={canvasRef}
            />
        </div>
    );
};

export default FabricCanvas;