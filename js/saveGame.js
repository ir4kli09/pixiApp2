import { back, rectSetting, fontStyle } from "./settings.js";
import { SaveRects } from "./classes/rect.js";
import { SaveLabel } from "./classes/label.js";
import { SaveCross } from "./classes/cross.js";
import { DrawRect } from "./classes/drawRect.js";
import { DrawCross } from "./classes/drawCross.js";
import { DrawLabel } from "./classes/labelDraw.js";
import { onButtonDown } from "./onBtnClick.js";

let arrayRects = [];
function seveCubePosition(back, saveKey) {
    for (let key in back.children) {
        if(back.children[key]["text"]){
            let saveLabel= new SaveLabel();
            saveLabel.id = key;
            saveLabel.coord.x = back.children[key]["x"];
            saveLabel.coord.y = back.children[key]["y"];
            saveLabel.text = back.children[key]["text"];
            arrayRects.push(saveLabel);
        }else if(back.children[key]["name"]) {
            let saveRect = new SaveRects();
            saveRect.id = key;
            saveRect.color = back.children[key]["tint"];
            console.log(back.children[key]["tint"]);
            saveRect.coord.x = back.children[key]["x"];
            saveRect.coord.y = back.children[key]["y"];
            saveRect.name = back.children[key]["name"]; 
            saveRect.iscorrectcolor = back.children[key]["iscorrectcolor"];
            saveRect.iscross = back.children[key]["iscross"];
            arrayRects.push(saveRect);
        }else{
            let saveCross = new SaveCross();
            saveCross.id = key;
            saveCross.coord.x = back.children[key]["x"];
            saveCross.coord.y = back.children[key]["y"];
            saveCross.mtx = back.children[key]["graphicsData"][0]["points"][0];
            saveCross.mty = back.children[key]["graphicsData"][0]["points"][1];
            saveCross.ltx = back.children[key]["graphicsData"][0]["points"][2];
            saveCross.lty = back.children[key]["graphicsData"][0]["points"][3];
            arrayRects.push(saveCross);
        }
    }
    let json = JSON.stringify(arrayRects);
    if(localStorage.getItem(saveKey)){
        localStorage.removeItem(saveKey);
    }
    localStorage.setItem(saveKey, json);
}

function loadCubePosition(gameKey) {
    let savegame = localStorage.getItem(gameKey);
    let obj = JSON.parse(savegame);
    for (let key in obj) {
        if(obj[key]["text"]){
            let lbl = new DrawLabel(
                obj[key]["text"],
                obj[key]["coord"]["x"],
                obj[key]["coord"]["y"],
                fontStyle
            );
            back.addChild(lbl);
        }else if(obj[key]["name"]){
            let rect = new DrawRect(
                rectSetting.width,
                rectSetting.height,
                obj[key]["coord"]["x"],
                obj[key]["coord"]["y"],
                obj[key]["color"],
                rectSetting.lineStile,
                obj[key]["name"]
            );
            rect.on("mousedown", onButtonDown);
            back.addChild(rect);
        }else{
            let rect = new DrawCross(
                obj[key]["mtx"],
                obj[key]["mty"],
                obj[key]["ltx"],
                obj[key]["lty"],
                obj[key]["coord"]["x"],
                obj[key]["coord"]["y"]
            );                        
            back.addChild(rect);
        }
    }
}

export { seveCubePosition, loadCubePosition };
