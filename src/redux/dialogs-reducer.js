const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Natasha'},
        {id: 4, name: 'Anya'},
        {id: 5, name: 'Yulya'},
    ],
    messages: [
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
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;