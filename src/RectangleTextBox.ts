import { fabric } from "fabric";

class RectangleTextBox extends fabric.Group {
  rect: fabric.Rect;
  text: fabric.Textbox;

  constructor(options: any) {
    const {
      left,
      top,
      width,
      height,
      strokeWidth,
      strokeColor,
      fillColor,
      text: textContent,
      fontSize,
      fontFamily,
      fontColor,
      ...otherOptions
    } = options;

    const rect = new fabric.Rect({
      left: 0,
      top: 0,
      width,
      height,
      fill: fillColor,
      stroke: strokeColor,
      strokeWidth,
      selectable: false,
    });

    const text = new fabric.Textbox(textContent, {
      left: 0,
      top: 0,
      width: width - strokeWidth * 2,
      fontSize,
      fontFamily,
      fill: fontColor,
      editable: true,
    });

    super([rect, text], {
      left,
      top,
      ...otherOptions,
    });

    this.rect = rect;
    this.text = text;

    // Add event listeners
    this.on("scaling", this._onScaling.bind(this));
  }

  _onScaling() {
    const scaleX = this.scaleX || 1;
    const scaleY = this.scaleY || 1;
    this.set({
      scaleX: 1,
      scaleY: 1,
      width: (this?.width || 1) * scaleX,
      height: (this?.height || 1) * scaleY,
    } as any);
    this.rect.set({
      width: (this.width || 1) - (this.rect.strokeWidth || 1) * 2,
      height: (this.height || 1) - (this.rect.strokeWidth || 1) * 2,
    });
    this.text.set({
      width: this.rect.width,
      height: this.rect.height,
    });
    this.setCoords();
  }

  _onModified() {
    this.rect.setCoords();
    this.text.setCoords();
  }
}

fabric.RectangleTextBox = RectangleTextBox;
