import { ActionType } from "../../../state/editorReducer";

function addText(textContent : string) {
  return {type: ActionType.ADD_TEXT_ELEMENT, textContent: textContent};
}
function editText(textContent : string) {
  return {type: ActionType.EDIT_TEXT_CONTENT, textContent: textContent};
}
export const bars = [
  {
    placeholder: "файл",
    content: [
      {
        title: "создать",
        func: () => {
          return {type: ActionType.NEW_CARD};
        }
      }, {
        title: "открыть",
        func: () => {
          return {type: "UNDEFINED"};
        }
      }, {
        title: "сохранить",
        func: () => {
          return {type: ActionType.SAVE_CARD};
        }
      }, {
        title: "сохранить как",
        func: () => {
          return {type: ActionType.SAVE_CARD};
        }
      }, {
        title: "шаблоны",
        func: () => {
          return {type: "UNDEFINED"};
        }
      }
    ]
  }, {
    placeholder: "правка",
    content: [
      {
        title: "undo",
        func: () => {
          return {type: ActionType.UNDO};
        }
      }, {
        title: "redo",
        func: () => {
          return {type: ActionType.REDO};
        }
      }, {
        title: "удалить",
        func: () => {
          return {type: ActionType.DELETE_ELEMENT};
        }
      }, {
        title: "изменить",
        func: () => {
          const x = prompt();
          return editText(
            x == null
            ? ""
            : x);
        }
      }
    ]
  }, {
    placeholder: "добавить",
    content: [
      {
        title: "текст",
        func: () => {
          const x = prompt();
          return addText(
            x == null
            ? ""
            : x);
        }
      }, {
        title: "прямоугольник",
        func: () => {
          return {type: ActionType.ADD_RECTANGLE};
        }
      }, {
        title: "треугольник",
        func: () => {
          return {type: ActionType.ADD_TRIANGLE};
        }
      }, {
        title: "круг",
        func: () => {
          return {type: ActionType.ADD_CIRCLE};
        }
      }, {
        title: "картинка",
        func: () => {
          return {type: ActionType.ADD_IMAGE_ELEMENT};
        }
      }, {
        title: "арт-объект",
        func: () => {
          return {type: ActionType.ADD_IMAGE_ELEMENT};
        }
      }
    ]
  }
];
