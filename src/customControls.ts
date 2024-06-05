import { fabric } from "fabric";

// Create custom controls
fabric.controlsUtils = {
  createCustomControls: (object: fabric.Object) => {
    return {
      ml: new fabric.Control({
        x: -0.5,
        y: 0,
        actionHandler: fabric.controlsUtils.scaleXOnly,
        cursorStyle: "e-resize",
      }),
      mr: new fabric.Control({
        x: 0.5,
        y: 0,
        actionHandler: fabric.controlsUtils.scaleXOnly,
        cursorStyle: "e-resize",
      }),
      mt: new fabric.Control({
        x: 0,
        y: -0.5,
        actionHandler: fabric.controlsUtils.scaleYOnly,
        cursorStyle: "n-resize",
      }),
      mb: new fabric.Control({
        x: 0,
        y: 0.5,
        actionHandler: fabric.controlsUtils.scaleYOnly,
        cursorStyle: "n-resize",
      }),
    };
  },
  renderSquareControl: (
    ctx: CanvasRenderingContext2D,
    left: number,
    top: number,
    styleOverride: any,
    fabricObject: any
  ) => {
    const size = 24;
    ctx.save();
    ctx.translate(left, top);
    ctx.drawImage(
      fabricObject._controlsVisibility?.ml
        ? fabricObject.controls.ml.render(
            ctx,
            left,
            top,
            styleOverride,
            fabricObject
          )
        : new Image(),
      -size / 2,
      -size / 2,
      size,
      size
    );
    ctx.restore();
  },

  scaleXOnly: (eventData: any, transform: any, x: number, y: number) => {
    const target = transform.target;
    target.set({
      scaleX: transform.scaleX,
      scaleY: 1,
    });
    target.setCoords();
    return true;
  },

  scaleYOnly: (eventData: any, transform: any, x: number, y: number) => {
    const target = transform.target;
    target.set({
      scaleY: transform.scaleY,
      scaleX: 1,
    });
    target.setCoords();
    return true;
  },

  renderIcon: (
    ctx: CanvasRenderingContext2D,
    left: number,
    top: number,
    styleOverride: any,
    fabricObject: any
  ) => {
    const size = 24;
    ctx.save();
    ctx.translate(left, top);
    ctx.drawImage(
      fabricObject._controlsVisibility.ml
        ? fabricObject.controls.ml.render(
            ctx,
            left,
            top,
            styleOverride,
            fabricObject
          )
        : new Image(),
      -size / 2,
      -size / 2,
      size,
      size
    );
    ctx.restore();
  },
};
