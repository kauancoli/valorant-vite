import { Agent } from '@/@dtos';
import { Card, Skill } from '@/components/Cards';
import { Loading } from '@/components/Loading';
import { api, language } from '@/config';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedAgentKey, setSelectedAgentKey] = useState<string>('');
  const controls = useAnimation();

  const getAgents = async () => {
    setShowLoading(true);

    try {
      const { data } = await api.get('agents' + language);
      setAgents(data.data);
      setShowLoading(false);
      controls.start({ opacity: 1, y: 0, x: 0 });
    } catch (error) {
      setShowLoading(false);
      throw error;
    }
  };

  const handleCardClick = (agent: Agent) => {
    setSelectedAgent(agent);
    setSelectedAgentKey(`${agent.uuid}-${Date.now()}`);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <>
      {showLoading && <Loading />}

      <motion.div
        className={`relative w-full h-full overflow-hidden ${
          selectedAgent ? 'bg-accent opacity-50' : 'bg-accent'
        }`}
        initial={{ opacity: 0, y: -20, x: -20 }}
        transition={{ duration: 1 }}
        animate={controls}
      >
        <div
          className={`z-0 absolute -bottom-10 scale-110 left-0 w-full h-full opacity-50 `}
          style={{
            background: `linear-gradient(#${selectedAgent?.backgroundGradientColors[0]}, #${selectedAgent?.backgroundGradientColors[1]}, #${selectedAgent?.backgroundGradientColors[2]}, #${selectedAgent?.backgroundGradientColors[3]})`,
          }}
        >
          <img
            src="splash.png"
            alt="Valorant Logo"
            className="absolute bottom-0 left-0 w-full h-full object-cover opacity-25 blur-sm"
          />
        </div>

        <div className="p-16">
          <div>
            <h1
              className="text-[10rem] font-bold transform absolute rotate-90 top-[14rem] left-0 uppercase select-none font-sans"
              style={{
                WebkitTextStroke: '1px white',
                WebkitTextFillColor: 'transparent',
                opacity: 0.9,
              }}
            >
              Agents
            </h1>

            <div className="flex justify-end 2xl:gap-20 xl:gap-10 gap-5">
              {agents.slice(0, 4).map((agent, index) => (
                <Card
                  key={index}
                  agents={[agent]}
                  onClick={() => handleCardClick(agent)}
                  isSelected={selectedAgent?.uuid === agent.uuid}
                />
              ))}
            </div>

            {selectedAgent ? (
              <div className="flex justify-end mt-10 mr-10">
                <Skill
                  abilities={selectedAgent.abilities}
                  selectedAgentKey={selectedAgentKey}
                />
              </div>
            ) : (
              <div className="flex justify-end mt-20">
                <h1 className="text-white text-8xl font-bold transform uppercase select-none">
                  Select an agent
                </h1>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};
