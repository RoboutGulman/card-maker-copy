import { ActionType } from "../../state/editorReducer"

function changeFontColor(color:string, id:string){
    return {type: ActionType.CHANGE_FONT_COLOR, fontColor:color, id: id}
  }
  function getFunc(title: string, color:string){
    return {
      title: title,
      func: (id: string) => {
        return changeFontColor(color, id)
      }
    }
  }
  export const fontColor=
    {
      placeholder: "цвет",
      content:  
        [
          getFunc("чёрный", "black"),
          getFunc("белый", "white"),
          getFunc("красный", "red"),
          getFunc("зелёный", "green"),
          getFunc("жёлтый", "yellow"),
        ]
  }