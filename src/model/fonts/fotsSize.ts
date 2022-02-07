import { ActionType } from "../../state/editorReducer";

function changeFontSize(size:number, id:string){
    return {type: ActionType.CHANGE_FONT_SIZE, fontSize:size, id: id}
  }
  function fu(){
    var content=[]
    for (var i = 12; i < 48; i+=2){
      const fontSize= i
      content.push( {
        title: fontSize.toString(),
          func: (id: string) => {
            return changeFontSize(fontSize, id);
          }
      })}
    return content
  }
  export const fontSizes=
    {
      placeholder: "размер",
      content:  fu()
  }