import { App } from "./classes/app.js";
import { DrawRect } from "./classes/drawRect.js";
import { DrawLabel } from "./classes/labelDraw.js";
import { loadCubePosition, seveCubePosition } from "./saveGame.js";
import { onButtonDown, onDragStart, onDragMove, onDragEnd } from "./onBtnClick.js";
import { fontStyle, appSetting, isRemoved, imageColor, rectSetting, back } from "./settings.js";

let application = new App(
    appSetting.width,
    appSetting.height,
    appSetting.backColor
);
document.querySelector(".app").appendChild(application.view);

application.stage.addChild(back);

let gameKey = "game";
run();
function run() {
    document.querySelector(".app").addEventListener("mousewheel", zoom);
    addButton();
    getColor();
    addTargetColor(0);
    removeColor();
    if(localStorage.getItem(gameKey)){
        if(confirm("продолжить игру?")){
            loadCubePosition(gameKey);
        }
        else{
            drawRectangles();
        }
    } else{
        drawRectangles();
    }
    back.on('mousedown', onDragStart)
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('mousemove', onDragMove);
    save();
}

function drawRectangles() {
    let i =0;
    for (let y = 0; y < appSetting.screenX; y += rectSetting.width) {
        for (let x = 0; x < appSetting.screenY; x += rectSetting.height) {
            let name = randomColor();
            let rect = new DrawRect(
                rectSetting.width,
                rectSetting.height,
                x,
                y,
                rectSetting.fillColor,
                rectSetting.lineStile,
                name[0]
            );

            rect.on('mousedown', onButtonDown);
            let lbl = new DrawLabel(name[1], x, y, fontStyle);
            back.addChild(rect);
            back.addChild(lbl);
        }
        i++;
    }
    console.log(i);
}

function randomColor() {
    let a = Math.floor(Math.random() * imageColor.length);
    //цвет пикселя и индекс(имя)
    return [imageColor[a], a];
}

function getColor() {
    let doc = document.querySelectorAll(".buttons");
    doc.forEach(function (item) {
        item.addEventListener("click", function (e) {
            appSetting.targetColor = imageColor[e.target.value];
            addTargetColor(e.target.value);
        });
    });
}

function removeColor() {
    let doc = document.querySelector(".remove");
    doc.addEventListener("click", function () {
        isRemoved.tf = true;
    });
}

function addButton(){
    let doc = document.querySelector('.forms');
    let str = "";
    imageColor.forEach((value, index) =>{
        if(value.toString(16).length < 5){
            str += `<div><button class="buttons" style="background-color: #00${value.toString(16)}" value="${index}">${index}</button></div>`;
        }else{
            str += `<div><button class="buttons" style="background-color: #${value.toString(16)}" value="${index}">${index}</button></div>`;
        }
    });
    doc.innerHTML += str;
}

function addTargetColor(a = 0){
    let doc = document.getElementById("tc");     
    if(imageColor[a].toString(16).length < 5){
        doc.style.backgroundColor ='#00'+ imageColor[a].toString(16);
        doc.innerHTML = a;
    }else{
        doc.style.backgroundColor ='#'+ imageColor[a].toString(16);
        doc.innerHTML = a;
    }
    doc.style.width = "30px";
}

function save(){
    let doc = document.querySelector('.savePos');
    
    doc.addEventListener('click', function(){
        seveCubePosition(back, gameKey);
    });
}

function zoom(e) {
    appSetting.scale += e.deltaY / 1000;
    back.scale.x = appSetting.scale;
    back.scale.y = appSetting.scale;
}