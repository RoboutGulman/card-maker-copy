import React, {FC} from "react";
import {useDispatch} from "react-redux";
import MyButton from "../MyButton/MyButton";
import {Content} from "../Menu/Menu";
import classes from "./Dropdown.module.css";
import {Card} from "../../../model/Types";
import CreateCardButton from "./Buttons/CreateCardButton";
import TemplatesButton from "./Buttons/TemplatesButton";
import SaveCardButton from "./Buttons/SaveCardButton";
import SelectImageButton from "./Buttons/SelectImageButton";
import SelectCardButton from "./Buttons/SelectCardButton";
import ArtObjectSelect from "./Buttons/ArtObjectSelect/ArtObjectSelect";

interface DropDownProps {
  card: Card;
  isActive: number;
  placeholder: string;
  content: Content[];
  setActive: (num : number) => void;
  index: number;
}

const DropDown: FC<DropDownProps> = (props : DropDownProps) => {
  const dispatch = useDispatch();

  return (<div className={props.isActive
      ? classes.wrapper_active + " " + classes.wrapper
      : classes.wrapper
}>
    <MyButton text={props.placeholder} onClick={() => {
        props.setActive(
          props.isActive
          ? -1
          : props.index);
      }}/>
    <div className={classes.drop_down}>
      <ul className={classes.ul}>
        {
          props.content && props.content.map((item : Content, index : number) => {
            switch (item.title) {
              case "картинка":
                return (<SelectImageButton cardSize={props.card.size} key={index}/>);
              case "открыть":
                return <SelectCardButton key={index}/>;
              case "создать":
                return (<CreateCardButton key={index} index={index} setActive={props.setActive} item={item}/>);
              case "арт-объект":
                return (<ArtObjectSelect key={index} index={index} setActive={props.setActive} item={item}/>);
              case "сохранить как":
                return (<SaveCardButton card={props.card} index={index} setActive={props.setActive} item={item} key={index}/>);
              case "шаблоны":
                return (<TemplatesButton index={index} setActive={props.setActive} item={item} key={index}/>);
              default:
                return (<MyButton key={index} text={item.title} onClick={() => {
                    props.setActive(-1);
                    dispatch(item.func());
                  }}/>);
            }
          })
        }
      </ul>
    </div>
  </div>);
};

export default DropDown;
