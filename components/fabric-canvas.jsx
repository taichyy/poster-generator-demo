"use client";
import * as fabric from "fabric";
import { useEffect, useRef } from "react";

const FabricCanvas = ({ addElements, background }) => {
    const canvasRef = useRef(null);
    const fabricCanvasRef = useRef(null);

    useEffect(() => {
        // Initialize Fabric.js canvas
        fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
            selection: true,
        });

        return () => {
            fabricCanvasRef.current.dispose();
        };
    }, []);

    useEffect(() => {
        if (fabricCanvasRef.current) {
            // Set background image if available
            if (background) {
                fabric.FabricImage.fromURL(background, (img) => {
                    fabricCanvasRef.current.setBackgroundImage(img, 
                        fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current));
                });
            } else {
                // Reset background if no image is set
                fabricCanvasRef.current.backgroundColor = "#f0f0f0";
                fabricCanvasRef.current.renderAll();
            }
        }
    }, [background]);

    useEffect(() => {
        if (fabricCanvasRef.current && addElements.length > 0) {
            // Add elements only if they are not already on the canvas
            addElements.forEach((element) => {
                fabricCanvasRef.current.add(element);
            });
        }
    }, [addElements]);

    return <canvas ref={canvasRef} height={300} className="w-full h-full border" />;
};

export { FabricCanvas };
