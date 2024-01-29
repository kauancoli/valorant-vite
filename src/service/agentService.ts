// services/agentService.ts
import { api, language } from '@/config';
import { AxiosResponse } from 'axios';

export interface Data {
  uuid: string;
  displayName: string;
}

export const getAgentMapping = async (): Promise<{
  [key: string]: string;
} | null> => {
  try {
    const response: AxiosResponse<{ data: Data[] }> = await api.get(
      'agents' + language,
    );

    const agentMapping = response.data.data.reduce<{ [key: string]: string }>(
      (mapping, agent) => {
        mapping[agent.displayName.toLowerCase()] = agent.uuid;
        return mapping;
      },
      {},
    );

    return agentMapping;
  } catch (error) {
    throw error;
  }
};
