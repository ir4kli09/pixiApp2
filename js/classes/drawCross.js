import {appSetting} from '../settings.js'
export class DrawCross extends PIXI.Graphics{
    constructor(mt1, mt2, lt1, lt2, x, y, lineBold = 3){
        super();
        this.lineBold = lineBold;
        this.lineStyle(this.lineBold, appSetting.crossColor, 1);
        this.moveTo(mt1, mt2);
        this.lineTo(lt1, lt2);
        this.x = x;
        this.y = y;
    }
}