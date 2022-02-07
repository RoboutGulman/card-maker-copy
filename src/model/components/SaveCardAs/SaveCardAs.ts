import {Card, Element, ElementType, Size} from "../../Types";
export enum formatType {
  jpeg,
  png
}
type saveCardAsArguments = {
  card: Card;
  type: formatType;
};
async function drawImages(context : CanvasRenderingContext2D, elements : Element[]) {
  for (let element of elements) {
    if (element.type === ElementType.IMAGE) {
      var image = new Image();
      image.src = element.source;
      await image.decode();
      context.drawImage(image, element.position.x, element.position.y, element.size.width, element.size.height);
    }
  }
}
async function drawText(context : CanvasRenderingContext2D, elements : Element[]) {
  for (let element of elements) {
    if (element.type === ElementType.TEXT) {
      const textBlock: HTMLDivElement = document.createElement("div");
      textBlock.innerHTML = element.textContent;
      context.fillStyle = element.fontColor;
      context.font = `normal 400 ${element.fontSize}px Calibri`;
      context.fillText(element.textContent, element.position.x + 5, element.position.y + element.fontSize);
    }
  }
}

export async function saveCardAs({card, type} : saveCardAsArguments) {
  var stringobJ = new XMLSerializer();
  var svg = document.getElementById("svgcontent");
  if (svg === null) 
    return;
  var svgString = stringobJ.serializeToString(svg);
  svgString = '<?xml version="1.0"?>\n' + svgString;

  var image = new Image();
  image.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
  image.width = card.size.width;
  image.height = card.size.height;

  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");

  await image.decode();
  canvas.width = image.width;
  canvas.height = image.height;
  var a = document.createElement("a");
  if (type === 1 && context != null) {
    context.drawImage(image, 0, 0);
    await drawImages(context, card.elements);
    await drawText(context, card.elements)
    a.download = "image.png";
    a.href = canvas.toDataURL("image/png");
  } else {
    if (context != null) {
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      await drawImages(context, card.elements);
      await drawText(context, card.elements)
    }
    a.download = "image.jpeg";
    a.href = canvas.toDataURL("image/jpeg");
  }
  a.click();
}
