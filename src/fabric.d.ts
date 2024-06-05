import * as fabric from "fabric";

declare module "fabric" {
  namespace fabric {
    interface RectangleTextBoxOptions extends fabric.ITextboxOptions {
      strokeColor?: string;
      fillColor?: string;
    }

    class RectangleTextBox extends fabric.Group {
      rect: fabric.Rect;
      text: fabric.Textbox;

      constructor(options: RectangleTextBoxOptions);
    }

    interface Object {
      controls: {
        mtr: fabric.Control;
        ml: fabric.Control;
        mr: fabric.Control;
        mt: fabric.Control;
        mb: fabric.Control;
      };
    }

    namespace controlsUtils {
      function renderSquareControl(
        ctx: CanvasRenderingContext2D,
        left: number,
        top: number,
        styleOverride: any,
        fabricObject: fabric.Object
      ): void;
      function createCustomControls(object: fabric.Object): {
        ml: fabric.Control;
        mr: fabric.Control;
        mt: fabric.Control;
        mb: fabric.Control;
      };

      function scaleXOnly(
        eventData: any,
        transform: any,
        x: number,
        y: number
      ): boolean;
      function scaleYOnly(
        eventData: any,
        transform: any,
        x: number,
        y: number
      ): boolean;
      function renderIcon(
        ctx: CanvasRenderingContext2D,
        left: number,
        top: number,
        styleOverride: any,
        fabricObject: fabric.Object
      ): void;
    }
  }
}
