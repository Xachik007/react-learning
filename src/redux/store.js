import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePageDate: {
            posts: [
                {id: 1, message: 'Hy', likecount: '25'},
                {id: 2, message: 'what are yo doing', likecount: '47'},
                {id: 3, message: 'how are you', likecount: '4'}
            ],
            newPostText: 'it camasut'
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePageDate = profileReducer(this._state.profilePageDate, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;
