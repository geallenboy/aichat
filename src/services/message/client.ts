
import { ChatMessage, ChatMessageError, ChatTTS, ChatTranslate } from '@/types/message';

import { CreateMessageParams, IMessageService } from './type';

export class ClientService implements IMessageService {
  async createMessage(data: CreateMessageParams) {
    

    return '';
  }

  async batchCreateMessages(messages: ChatMessage[]) {
    return '';
  }

  async getMessages(sessionId: string, topicId?: string): Promise<ChatMessage[]> {
    return []
  }

  async getAllMessages() {
    return [];
  }

  async countMessages() {
    return 0;
  }

  async countTodayMessages() {
   
    return 0
  }

  async getAllMessagesInSession(sessionId: string) {
    return [];
  }

  async updateMessageError(id: string, error: ChatMessageError) {
    return [];
  }

  async updateMessage(id: string, message: Partial<any>) {
    return [];
  }

  async updateMessageTTS(id: string, tts: Partial<ChatTTS> | false) {
    return [];
  }

  async updateMessageTranslate(id: string, translate: Partial<ChatTranslate> | false) {
    return [];
  }

  async updateMessagePluginState(id: string, value: Record<string, any>) {
    return [];
  }

  async bindMessagesToTopic(topicId: string, messageIds: string[]) {
    return [];
  }

  async removeMessage(id: string) {
    return [];
  }

  async removeMessages(assistantId: string, topicId?: string) {
    return [];
  }

  async removeAllMessages() {
    return [];
  }

  async hasMessages() {
   
    return 1>0;
  }

  async messageCountToCheckTrace() {
   
    return true;
  }
}
