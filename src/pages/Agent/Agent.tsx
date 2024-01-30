import { Agent } from '@/@dtos';
import { Loading } from '@/components/Loading';
import { api, language } from '@/config';
import { getAgentMapping } from '@/service/agentService';
import { Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type AgentPageProps = {};

export const AgentPage: React.FC<AgentPageProps> = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [agent, setAgent] = useState<Agent>();
  const [showLoading, setShowLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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
      {imageLoaded ? null : <Loading />}
      {showLoading ? (
        <Loading />
      ) : (
        <div>
          <img
            src="valoBack.jpg"
            alt="Valorant Background"
            className="w-full h-full object-cover absolute opacity-50 select-none"
            onLoad={() => setImageLoaded(true)}
          />
          <img
            src="splash.png"
            alt="Splash"
            className="w-full h-full object-cover absolute opacity-5 blur-sm select-none"
            onLoad={() => setImageLoaded(true)}
          />

          <div className="flex flex-row">
            <div className="bg-white relative w-[50rem] h-fit top-14 left-44 p-8 flex flex-col gap-12 rounded-sm">
              <div>
                <div className="flex items-center gap-5">
                  <h1 className="text-background text-8xl font-bold transform uppercase select-none">
                    {agent?.displayName}
                  </h1>
                  <img
                    src={agent?.background}
                    alt={agent?.displayName}
                    className="w-20 h-24 object-cover bg-accent select-none"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <h2 className="text-accent text-2xl font-bold select-none -mt-3 mb-4 ml-2">
                  {agent?.developerName}
                </h2>
                <p>{agent?.description}</p>
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="text-background text-4xl font-bold select-none">
                  Função
                </h1>
                <div className="flex items-center gap-5">
                  <img
                    src={agent?.role.displayIcon}
                    alt={agent?.role.displayName}
                    className="w-24 h-24 object-cover select-none bg-transparent"
                    style={{ filter: 'invert(100%)' }}
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div>
                    <h1 className="text-background text-2xl font-bold select-none -mt-3">
                      {agent?.role.displayName}
                    </h1>
                    <p>{agent?.role.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-around gap-10 bg-background p-4 via-zinc-300">
                {agent?.abilities.slice(0, 4).map((ability, abilityIndex) => (
                  <div className="flex items-center gap-10">
                    <div
                      key={abilityIndex}
                      className="flex flex-col items-center gap-3"
                    >
                      <img
                        src={ability.displayIcon}
                        alt={ability.displayName}
                        className="w-16 h-16 object-cover select-none rounded-lg"
                        onLoad={() => setImageLoaded(true)}
                      />
                      <h1 className="text-xs font-bold text-white">
                        {ability.displayName}
                      </h1>
                    </div>
                    <div className="h-16 bg-accent w-0.5"></div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={agent?.fullPortrait}
              alt={agent?.displayName}
              className="w-fit h-fit absolute left-[29.5rem] -top-56 opacity-50 select-none"
              style={{ filter: 'invert(100%)' }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <img
            src={agent?.fullPortrait}
            alt={agent?.displayName}
            className="w-fit h-fit absolute left-[30rem] -top-56 select-none"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      )}
    </div>
  );
};
