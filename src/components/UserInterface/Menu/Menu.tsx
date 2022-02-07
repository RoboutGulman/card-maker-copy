import React, {FC, useState} from "react";
import {Card} from "../../../model/Types";
import CardResizeComponent from "../CardResize/CardResizeComponent";
import Dropdown from "../Dropdown/Dropdown";
import classes from "./Menu.module.css";
import TextDropDown from "../SampleDropdown/TextDropdown";
import {fontSizes} from "../../../model/fonts/fotsSize";
import {bars} from "../../../model/components/Menu/Menu";
import {fontColor} from "../../../model/fonts/fontColor";
export type Content = {
  title: string;
  func: () => any;
};
type MenuProps = {
  selectedElementID: string;
  card: Card;
};
const Menu: FC<MenuProps> = ({card, selectedElementID} : MenuProps) => {
  function isActive(index : number) {
    if (active === index) 
      return 1;
    return 0;
  }
  const [active, setActive] = useState(-1);
  return (<div><div className={classes.Menu}>
    {
      bars.map((bar : {
        placeholder: string;
        content: Content[];
      }, index : number) => (<Dropdown card={card} key={index} isActive={isActive(index)} placeholder={bar.placeholder} content={bar.content} setActive={setActive} index={index}/>))
    }
    <TextDropDown isActive={isActive(bars.length + 1)} setActive={setActive} index={bars.length + 1} placeholder={fontSizes.placeholder} content={fontSizes.content} elementID={selectedElementID}></TextDropDown>
    <TextDropDown isActive={isActive(bars.length + 2)} setActive={setActive} index={bars.length + 2} placeholder={fontColor.placeholder} content={fontColor.content} elementID={selectedElementID}></TextDropDown>
    </div> <div className={classes.border}></div><CardResizeComponent cardSize={card.size}></CardResizeComponent> 
  </div>);
};

export default Menu;
