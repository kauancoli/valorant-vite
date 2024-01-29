import { Agent } from '@/@dtos';
import { Loading } from '@/components/Loading';
import { api, language } from '@/config';
import { getAgentMapping } from '@/service/agentService';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type AgentPageProps = {};

export const AgentPage: React.FC<AgentPageProps> = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [agent, setAgent] = useState<Agent>();
  const [showLoading, setShowLoading] = useState(false);

  const getAgentName = async () => {
    setShowLoading(true);
    const agentMapping = await getAgentMapping();

    if (!agentMapping) {
      navigate('/');
      return;
    }

    const formattedName = name ? name.toLowerCase() : '';
    const agentUuid = agentMapping[formattedName];

    if (!agentUuid) {
      navigate('/');
      return;
    }

    try {
      const response = await api.get(`agents/${agentUuid}` + language);
      setAgent(response.data.data);
      setShowLoading(false);
    } catch (error) {
      setShowLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getAgentName();
  }, []);

  return (
    <div className="bg-accent w-full h-full relative -z-10">
      {showLoading && <Loading />}

      {agent ? (
        <div>
          <img
            src="valoBack.jpg"
            alt="Valorant Background"
            className="w-full h-full object-cover absolute opacity-50"
          />
          <img
            src="splash.png"
            alt="Splash"
            className="w-full h-full object-cover absolute opacity-5 blur-sm"
          />

          <div className="flex flex-row">
            <div className="bg-white relative w-[50rem] h-fit top-14 left-44 p-8 flex flex-col gap-12">
              <div>
                <div className="flex items-center gap-5">
                  <h1 className="text-background text-8xl font-bold transform uppercase select-none">
                    {agent.displayName}
                  </h1>
                  <img
                    src={agent.background}
                    alt={agent.displayName}
                    className="w-20 h-24 object-cover select-none bg-accent"
                  />
                </div>
                <h2 className="text-background text-2xl font-bold select-none -mt-3 mb-4">
                  {agent.developerName}
                </h2>
                <p>{agent.description}</p>
              </div>

              <div className="flex">
                <img
                  src={agent.role.displayIcon}
                  alt={agent.role.displayName}
                  className="w-16 h-16 object-cover select-none rounded-2xl bg-accent"
                />
                <div>
                  <h1 className="text-background text-2xl font-bold select-none -mt-3">
                    {agent.role.displayName}
                  </h1>
                  <p>{agent.role.description}</p>
                </div>
              </div>

              <div className="flex justify-around gap-10 bg-background p-4">
                {agent.abilities.map((ability, abilityIndex) => (
                  <div
                    key={abilityIndex}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={ability.displayIcon}
                      alt={ability.displayName}
                      className="w-16 h-16 object-cover select-none rounded-lg"
                    />
                    <h1 className="text-xs font-bold text-white">
                      {ability.displayName}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={agent.fullPortrait}
              alt={agent.displayName}
              className="w-fit h-fit absolute left-[29.5rem] -top-56 opacity-50"
              style={{ filter: 'invert(100%)' }}
            />
            <img
              src={agent.fullPortrait}
              alt={agent.displayName}
              className="w-fit h-fit absolute left-[30rem] -top-56"
            />
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};
