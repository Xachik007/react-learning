import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogelements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

   let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
   }

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogelements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='enter your message'  ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;