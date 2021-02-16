export class App extends PIXI.Application{
    constructor(w, h, color){
        super({
            width: w,
            height: h,
            backgroundColor: color,
        });
        this.renderer.view.style.border = "1px solid black";
    }
}