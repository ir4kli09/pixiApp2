export class DrawLabel extends PIXI.Text{
    constructor(name, x, y, style, zIndex = 0){
        super(name, style);
        this.x = x;
        this.y = y;
        this.zIndex = zIndex;
        this.alpha = 0.5;
    }
}