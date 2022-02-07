import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import MyButton from "../MyButton/MyButton";
import classes from "./TextDropdown.module.css";
interface DropDownProps {
  isActive: number;
  setActive: (num : number) => void;
  placeholder: string;
  content: Content[];
  elementID: string;
  index:number
}
 type Content = {
  title: string;
  func: (id:string) => any;
}

const TextDropDown: FC<DropDownProps> = (props : DropDownProps) => {
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
            return (<MyButton key={index} text={item.title} onClick={() => {
                props.setActive(-1);
                if (props.elementID)
                dispatch(item.func(props.elementID));
              }}/>);
          })
        }
      </ul>
    </div>
  </div>);
};

export default TextDropDown;
