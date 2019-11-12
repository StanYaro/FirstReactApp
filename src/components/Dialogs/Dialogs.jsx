import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

let dialogsData = [
  {id: '1', name: 'Stan'},
  {id: '2', name: 'Nadin'},
  {id: '3', name: 'Iana'},
  {id: '4', name: 'Alex'},
  {id: '5', name: 'Dima'},
  {id: '6', name: 'Kubik'},
]

let messagesData = [
  {id: '1', message: 'Hi'},
  {id: '2', message: 'Yo'},
  {id: '3', message: 'Bu bu ga ga'},
  {id: '4', message: 'JS is a power!'},
  {id: '5', message: 'Relax man!'},
  {id: '6', message: 'Meaaaau'},
]

let dialogsElements = dialogsData.map( dialog => <DialogItem name= {dialog.name} id={dialog.id} />);
let messagesElements = messagesData.map( message => <Message message={message.message} />);

  return (
        <div className={s.dialogs}>

          <div className={s.dialogsItems}>
            {dialogsElements}
          </div>

          <div className={s.messages}>
            {messagesElements}
          </div>

        </div>
    );
}

export default Dialogs;