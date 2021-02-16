import { DrawCross } from "./classes/drawCross.js";
import { appSetting, isRemoved, rectSetting } from "./settings.js";
import { back } from "./settings.js";

function onButtonDown() {
    console.log();
    let a = back.children.filter((i) => (i.x == this.x) & (i.y == this.y));
    if (isRemoved.tf & !this.iscorrectcolor) {
        console.log("removed");
        removed(this, a[1]);
        return 0;
    }
    if (this.name == appSetting.targetColor && !this.iscross) {
        console.log("print");
        print(this);
    } else 
        if (this.iscross){
            console.log("wrong");
            cross(this);
    } 
}
function onDragStart(event){
    console.log(event.data.originalEvent)
    if(event.data.originalEvent.ctrlKey){
        this.data = event.data;
        this.alpha = 0.95;
        this.dragging = true;
    }

}
function onDragMove(){
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}

function onDragEnd(){
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}
//удаление цвета и креста
function removed(e, num) {
    isRemoved.tf = false;
    e.iscross = false;
    e._tint = rectSetting.backColor;
    back.addChild(e);
    back.addChild(num);
}
//если цвет и число совпадает закращиваем
function print(r) {
    r.tint = appSetting.targetColor;
    r.iscorrectcolor = true;
}
//если цвет и число не совпадает рисуем крест
function cross(e) {
    e.iscross = true;
    e.iscorrectcolor = false;
    let l1 = new DrawCross(7, 7, 25, 25, e.x, e.y);
    let l2 = new DrawCross(7, 25, 25, 7, e.x, e.y);
    back.addChild(l1, l2);
}

export { onButtonDown, onDragStart, onDragMove, onDragEnd };