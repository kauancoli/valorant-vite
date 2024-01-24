import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Agent } from '@/@dtos';
import { Loading } from '@/components/Loading';
import { api, language } from '@/config';
import { Card } from '@/components/Cards/Card';

export const Home: React.FC = () => {
  const [agent, setAgent] = useState<Agent[]>([]);
  const [showLoading, setShowLoading] = useState(false);

  const getAgents = async () => {
    setShowLoading(true);

    try {
      const { data } = await api.get('agents' + language);
      setAgent(data.data);
      setShowLoading(false);
    } catch (error) {
      setShowLoading(false);
      throw error;
    }
  };

  const agentesRandomizados = [...agent]
    .sort(() => Math.random() - 0.5)
    .slice(0, 1);

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <>
      {showLoading && <Loading />}

      <Container maxWidth="xl">
        <Card agents={agentesRandomizados} />
      </Container>
    </>
  );
};
