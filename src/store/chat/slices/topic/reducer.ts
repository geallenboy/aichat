import { produce } from 'immer';

import { ChatTopic } from '@/types/topic';

interface AddChatTopicAction {
  type: 'addTopic';
  value: any;
}

interface UpdateChatTopicAction {
  id: string;
  type: 'updateTopic';
  value: Partial<ChatTopic>;
}

interface DeleteChatTopicAction {
  id: string;
  type: 'deleteTopic';
}

export type ChatTopicDispatch = AddChatTopicAction | UpdateChatTopicAction | DeleteChatTopicAction;

export const topicReducer = (state: ChatTopic[] = [], payload: ChatTopicDispatch): ChatTopic[] => {
  switch (payload.type) {
    case 'addTopic': {
      return produce(state, (draftState) => {
        
      });
    }

    case 'updateTopic': {
      return produce(state, (draftState) => {
        
      });
    }

    case 'deleteTopic': {
      return produce(state, (draftState) => {
        
      });
    }

    default: {
      return state;
    }
  }
};
