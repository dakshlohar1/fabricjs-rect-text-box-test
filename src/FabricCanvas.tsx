import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";
import "./RectangleTextBox"; // Import the custom object definition

const FabricCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current!);

    const rectangleTextBox = new fabric.RectangleTextBox({
      left: 100,
      top: 100,
      width: 300,
      height: 200,
      strokeWidth: 2,
      strokeColor: "black",
      fillColor: "white",
      text: "Edit me!",
      fontSize: 20,
      fontFamily: "Arial",
      fill: "black",
    });

    canvas.add(rectangleTextBox);
    canvas.setActiveObject(rectangleTextBox);
    canvas.renderAll();

    // Add custom controls
    fabric.Object.prototype.controls = {
      ...fabric.Object.prototype.controls,
      ...fabric.controlsUtils.createCustomControls(rectangleTextBox),
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default FabricCanvas;
