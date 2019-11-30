const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs : [
    {id: '1', name: 'Stan'},
    {id: '2', name: 'Nadin'},
    {id: '3', name: 'Iana'},
    {id: '4', name: 'Alex'},
    {id: '5', name: 'Jenia'},
    {id: '6', name: 'Kubik'}
],
  messages : [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Yo'},
    {id: '3', message: 'Bu bu ga ga'},
    {id: '4', message: 'JS is a power!'},
    {id: '5', message: 'Relax man!'},
    {id: '6', message: 'Meaaaau'}
],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          state.newMessageBody = action.body;
          return state;
        case SEND_MESSAGE:
          let body =state.newMessageBody;
          state.newMessageBody = '';
          state.messages.push({id:6, message: body});
          return state;
        default: 
          return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;