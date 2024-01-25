import { Ability, Agent } from '@/@dtos';
import { Card } from '@/components/Cards/Card';
import { Skill } from '@/components/Cards/Skill';
import { Loading } from '@/components/Loading';
import { api, language } from '@/config';
import React, { useEffect, useState } from 'react';

type SelectedAgent = {
  agent: Agent;
  abilities: Ability[];
};

export const Home: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<SelectedAgent | null>(
    null,
  );

  const getAgents = async () => {
    setShowLoading(true);

    try {
      const { data } = await api.get('agents' + language);
      setAgents(data.data);
      setShowLoading(false);
    } catch (error) {
      setShowLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

  const handleCardClick = (agent: Agent) => {
    setSelectedAgent({
      agent,
      abilities: agent.abilities,
    });
  };

  return (
    <div className="p-16">
      {showLoading && <Loading />}

      <div>
        <h1 className="text-white text-[8rem] font-bold transform absolute rotate-90 top-[18.5rem] left-14 uppercase select-none">
          Agents
        </h1>

        <div className="flex gap-20 justify-end">
          {agents.slice(0, 4).map((agent, index) => (
            <Card
              key={index}
              agents={[agent]}
              onClick={() => handleCardClick(agent)}
              isExpanded={selectedAgent?.agent === agent}
            />
          ))}
        </div>

        {selectedAgent && (
          <div className="flex justify-end mt-10 mr-10">
            <Skill abilities={selectedAgent.abilities} />
          </div>
        )}
      </div>
    </div>
  );
};
