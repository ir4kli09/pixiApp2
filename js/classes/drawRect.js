
export class DrawRect extends PIXI.Graphics {
    constructor(
        width,
        height,
        x, y,
        fillColor = 0xffffff,
        lineS = 0x00ff00,
        name = "default"
    ) {
        super();
        this.beginFill(fillColor);
        this.lineStyle(1, lineS, 1);
        this.drawRect(0, 0, width, height);
        this.endFill();
        this.x = x;
        this.y = y;
        this.interactive = true;
        this.buttonMode = true;
        this.isdown = false;
        this.iscross = false;
        this.iscorrectcolor = false;
        this.name = name;
    }
}
