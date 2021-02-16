import { DrawRect } from "./classes/drawRect.js";
let fontStyle = new PIXI.TextStyle({
    fontFamily: "Times New Roman",
    fontSize: 14,
    fill: ["#ffffff"], // gradient , "#00ff99"
    stroke: "#4a1850",
    strokeThickness: 5,
    lineJoin: "round",
});
let isRemoved = { tf: false };

let imageColor = [
    0xfe0008,
    0xffa500,
    0xffff00,
    0x00ff00,
    0x00ffff,
    0x0000ff,
    0xa020f0,
    0xe512ec,
    0xd2691e,
    0xff6347
];

let appSetting = {
    width: 500,
    height: 500,
    screenX: 800,
    screenY: 800,
    scale: 1,
    targetColor: imageColor[0],
    backColor: 0xffffff,
};

let rectSetting = {
    width: 32,
    height: 32,
    fillColor: 0xffffff,
    lineStile: 0x00ff00,
    crossColor: 0x000000,
    backColor: 0xffffff,
};

let back = new DrawRect(
    appSetting.screenX,
    appSetting.screenY,
    0,
    0,
    0xffa500
);

//уже не нужен
let penColors = {
    red:        0xfe0008, // красный
    orange:     0xffa500, // оранжевый
    yellow:     0xffff00, // жёлтый
    green:      0x00ff00, // зелёный
    cyan:       0x00ffff, // "голубой"
    blue:       0x0000ff, // синий
    purple:     0xa020f0, // фиолетовый
    darkOrchid: 0xe512ec,
    chocolate:  0xd2691e,
    tomato:     0xff6347,
};

export { fontStyle, appSetting, isRemoved, imageColor, rectSetting, back };
