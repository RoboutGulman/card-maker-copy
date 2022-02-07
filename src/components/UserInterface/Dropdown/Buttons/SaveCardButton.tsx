import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { formatType, saveCardAs } from '../../../../model/components/SaveCardAs/SaveCardAs';
import { select } from '../../../../model/components/Elements/TextElement';
import { Card} from '../../../../model/Types';
import { Content } from '../../Menu/Menu';
import Modal from '../../Modal/Modal';
import MyButton from '../../MyButton/MyButton';

type SaveCardButtonProps={
    index:number,
    setActive:(a:number)=>void,
    item:Content,
    card: Card
}

const SaveCardButton: FC<SaveCardButtonProps> = ({index, setActive, item, card} : SaveCardButtonProps) => {
    const dispatch=useDispatch();
    const [modalAcive, setModalActive] = useState(false)
    return (
        <div>
            <Modal active={modalAcive} setActive={setModalActive}>
                <div style={{font: '600 14px Arial'}}><p>Выберите формат</p></div>
                <div><MyButton
                  text="png" 
                  onClick={()=>{
                      saveCardAs({type:formatType.png, card:card});
                      setModalActive(false); 
                      setActive(-1); 
                    }}/>
                    </div>
                <MyButton 
                  text="jpeg"
                  onClick={()=>{
                      saveCardAs({type:formatType.jpeg, card:card});
                      setModalActive(false);
                      setActive(-1);
                  }}/>
                <MyButton 
                  text="отмена"
                  onClick={()=>{
                      setModalActive(false);
                      setActive(-1);
                  }}/>
            </Modal>
            <MyButton 
              key={index} 
              text={item.title} 
              onClick={() => {dispatch(select(null)); setModalActive(true); }}/>
        </div>
    )
}

export default SaveCardButton