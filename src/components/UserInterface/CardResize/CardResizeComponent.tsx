import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Size } from '../../../model/Types'
import { ActionType } from '../../../state/editorReducer'
import MyInput from '../Input/MyInput'
import MyButton from '../MyButton/MyButton'
import classes from "./CardResize.module.css";
type CardResizeProps = {
    cardSize: Size
  }
  function changeCardSize(size:Size){
    return {type: ActionType.CHANGE_CARD_SIZE, size:size}
  }
  const CardResizeComponent: FC<CardResizeProps> = ({cardSize} : CardResizeProps) => {
    const dispatch = useDispatch()
    const [size, setSize] = useState(cardSize)
    useEffect(()=>{
      setSize(cardSize) 
    })
    return (
        <div className={classes.cardResize}>
            <div className={classes.text}><p>размер карты</p></div>
            <MyInput className={classes.Input}type="number" value={size.height} onChange={(e:any)=>setSize({width:size.width, height:e?.target?.value})}></MyInput>
            <div className={classes.text}><p>X</p></div>
            <MyInput className={classes.Input} type="number" value={size.width} onChange={(e:any)=>setSize({width:e?.target?.value, height:size.height})}></MyInput>
            <div className={classes.space}></div>
            <MyButton text="изменить" onClick={()=>dispatch(changeCardSize(size))}></MyButton>
        </div>
    )
}

export default CardResizeComponent
