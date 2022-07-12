import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";

let stores = {
    _state: {

        profilePage: {
            postsData: [
                { id: 0, message: 'Hi, how are you?', likesCount: 15 },
                { id: 1, message: 'It\'s my first post', likesCount: 132 },
            ],

            newPostText: 'it-kamasutra.com'
        },

        messagesPage: {
            messagesData: [
                { id: 0, message: 'Hi' },
                { id: 1, message: 'How is yor it-kamasutra?' },
                { id: 2, message: 'Yo' },
                { id: 3, message: 'No way!!' },
                { id: 4, message: 'Go to the cinema tommorow?' },
                { id: 5, message: 'Go dota?' },
            ],

            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Valera' },
            ],

            newMessageBody: ''
        },

        sidebar: {}
    },

    _callSubscriber() {
        console.log('state was changed');
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        // this._stage.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default stores;
