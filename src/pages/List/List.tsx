import { Agent } from '@/@dtos';
import { Loading } from '@/components/Loading';
import { api, language } from '@/config';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ListPageProps = {};

export const List: React.FC<ListPageProps> = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [agents, setAgents] = useState<Agent[]>([]);
  const controls = useAnimation();

  const getAgents = async () => {
    setShowLoading(true);

    try {
      const { data } = await api.get('agents' + language);
      setAgents(data.data);
      setShowLoading(false);
      controls.start({ opacity: 1 });
    } catch (error) {
      setShowLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div
      className="2xl:p-14 xl:p-12 lg:p-8 bg-accent"
      style={{ height: '100%' }}
    >
      {showLoading && <Loading />}
      <motion.div
        className="flex flex-wrap justify-center items-center 2xl:gap-5 xl:gap-4 lg:gap-5"
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        animate={controls}
      >
        {agents.map((agent) => (
          <Link to={`/${agent.displayName}`}>
            <div
              key={agent.uuid}
              className="flex flex-col items-center bg-background p-2 rounded-lg shadow-lg hover:bg-background hover:scale-105 transition-all cursor-pointer"
            >
              <h1 className="text-xl text-white">{agent.displayName}</h1>
              <img
                src={agent.fullPortrait}
                alt={agent.displayName}
                className="2xl:w-36 xl:w-36 lg:w-32"
              />
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};
