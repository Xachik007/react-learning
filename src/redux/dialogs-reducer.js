const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Natasha'},
        {id: 4, name: 'Anya'},
        {id: 5, name: 'Yulya'},
    ],
    messagesData: [
        {id: 1, message: 'Hy'},
        {id: 2, message: 'what are yo doing'},
        {id: 3, message: 'how are you'},
        {id: 4, message: 'where are you'},
        {id: 5, message: 'how are you'},
    ],
    newMessageBody: '55'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messagesData.push({id: 6, message: body});
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;