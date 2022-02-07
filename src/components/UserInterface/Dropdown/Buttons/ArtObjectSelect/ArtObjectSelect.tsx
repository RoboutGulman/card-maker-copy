import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {Content} from "../../../Menu/Menu";
import Modal from "../../../Modal/Modal";
import MyButton from "../../../MyButton/MyButton";
import classes from "./ArtObjectSelect.module.css";
import {ArtObjects} from "../../../../../art-objects/ArtObjects";
import { addImage } from "../../../../../customHooks/useFileLoader";
type CreateCardButtonProps = {
  index: number;
  setActive: (a : number) => void;
  item: Content;
};
const defaultArtSize={
  width:100,
  height:100,
}
const ArtObjectSelect: FC<CreateCardButtonProps> = ({index, setActive, item} : CreateCardButtonProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [modalAcive, setModalActive] = useState(false);
  return (<div>
    <Modal active={modalAcive} setActive={(e : boolean) => {
        setLoading(false);
        setModalActive(e);
      }}>
      <div className={classes.Menu}>
        {
          ArtObjects.map((artObject : string, index : number) => (<img key={index} className={classes.content} src={artObject} alt="" onClick={() => {
              setLoading(false);
              setModalActive(false);
              setActive(-1);
              dispatch(addImage(artObject, defaultArtSize))
            }}/>))
        } 
      </div>
    </Modal>
    <div className={loading
        ? classes.Loading
        : classes.Ready}>
      <MyButton key={index} text={item.title} onClick={() => {
          setLoading(true);
          setModalActive(true);
        }}/>
    </div>
  </div>);
};

export default ArtObjectSelect;
