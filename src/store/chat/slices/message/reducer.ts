
import { produce } from 'immer';

import { CreateMessageParams } from '@/services/message';
import { ChatMessage } from '@/types/message';


interface UpdateMessage {
  id: string;
  key: keyof ChatMessage;
  type: 'updateMessage';
  value: ChatMessage[keyof ChatMessage];
}

interface UpdateMessages {
  id: string;
  type: 'updateMessages';
  value: Partial<ChatMessage>;
}

interface CreateMessage {
  id: string;
  type: 'createMessage';
  value: CreateMessageParams;
}
interface DeleteMessage {
  id: string;
  type: 'deleteMessage';
}

interface UpdatePluginState {
  id: string;
  key: string;
  type: 'updatePluginState';
  value: any;
}
interface UpdateMessageExtra {
  id: string;
  key: string;
  type: 'updateMessageExtra';
  value: any;
}

export type MessageDispatch =
  | CreateMessage
  | UpdateMessage
  | UpdateMessages
  | UpdatePluginState
  | UpdateMessageExtra
  | DeleteMessage;

export const messagesReducer = (state: ChatMessage[], payload: MessageDispatch): ChatMessage[] => {
  switch (payload.type) {
    case 'updateMessage': {
      return produce(state, (draftState) => {
        
      });
    }
    case 'updateMessages': {
      return produce(state, (draftState) => {
        
      });
    }

    case 'updateMessageExtra': {
      return produce(state, (draftState) => {
        
      });
    }

    case 'updatePluginState': {
      return produce(state, (draftState) => {
        
      });
    }

    case 'createMessage': {
      return produce(state, (draftState) => {
       
      });
    }
    case 'deleteMessage': {
      return produce(state, (draft) => {
       
      });
    }
    default: {
      throw new Error('暂未实现的 type，请检查 reducer');
    }
  }
};
