import { DeepPartial } from 'utility-types';

import { LobeAgentConfig } from '@/types/agent';
import {
  ChatSessionList,
  LobeAgentSession,
  LobeSessionType,
  LobeSessions,
  SessionGroupItem,
  SessionGroups,
} from '@/types/session';

import { ISessionService } from './type';

export class ClientService implements ISessionService {
  async createSession(
    type: LobeSessionType,
    defaultValue: Partial<LobeAgentSession>,
  ): Promise<string> {
    
    return '';
  }

  async batchCreateSessions(importSessions: LobeSessions) {
    return [];
  }

  async cloneSession(id: string, newTitle: string): Promise<string | undefined> {
    return '';
  }

  async getGroupedSessions(): Promise<ChatSessionList> {
    return new Promise(r=>r);
  }

  async getSessionConfig(id: string): Promise<LobeAgentConfig> {
   

    return new Promise(r=>r);
  }

  async getSessionsByType(type: 'agent' | 'group' | 'all' = 'all'): Promise<LobeSessions> {
    return new Promise(r=>r);
  }

  async getAllAgents(): Promise<LobeSessions> {
    // TODO: add a filter to get only agents
    return [];
  }

  async countSessions() {
    return 1;
  }

  async hasSessions() {
    return 1> 0;
  }

  async searchSessions(keyword: string) {
    return [];
  }

  async updateSession(
    id: string,
    data: Partial<Pick<LobeAgentSession, 'group' | 'meta' | 'pinned'>>,
  ) {
   
    return [];
  }

  async updateSessionConfig(activeId: string, config: DeepPartial<LobeAgentConfig>) {
   

    return [];
  }

  async removeSession(id: string) {
    return [];
  }

  async removeAllSessions() {
    return [];
  }

  // ************************************** //
  // ***********  SessionGroup  *********** //
  // ************************************** //

  async createSessionGroup(name: string, sort?: number) {
   

    return '';
  }

  async batchCreateSessionGroups(groups: SessionGroups) {
    return [];
  }

  async removeSessionGroup(id: string, removeChildren?: boolean) {
    return [];
  }

  async updateSessionGroup(id: string, data: Partial<SessionGroupItem>) {
    return [];
  }

  async updateSessionGroupOrder(sortMap: { id: string; sort: number }[]) {
    return [];
  }

  async getSessionGroups(): Promise<SessionGroupItem[]> {
    return [];
  }

  async removeSessionGroups() {
    return [];
  }
}
