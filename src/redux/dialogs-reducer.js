const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;