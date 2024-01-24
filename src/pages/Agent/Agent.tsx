import { ChampionSelected } from '@/@dtos/Agent/Agent';
import {
  Box,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChampionImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

export const Agent: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [champion, setChampion] = useState<ChampionSelected | null>(null);

  useEffect(() => {
    const fetchChampionData = async () => {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.6.1/data/pt_BR/champion/${name}.json`,
      );
      const data = await response.json();
      if (name && data.data[name]) {
        setChampion(data.data[name]);
      }
    };

    fetchChampionData();
  }, [name]);

  if (!champion) {
    return <CircularProgress />;
  }

  const {
    name: championName,
    title,
    blurb,
    image,
    lore,
    tags,
    spells,
  } = champion;

  console.log(spells.map((e) => e.image.full));

  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #020F1C, #12475F)',
        height: '100%',
        minHeight: '89vh',
        padding: '2rem',
      }}
    >
      <Container
        style={{
          background: '#12475F',
          padding: '5rem',
          borderRadius: '10rem',
        }}
      >
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 1,
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      color: 'white',
                    }}
                  >
                    {championName}
                  </Typography>
                  <Typography variant="h3" sx={{ mb: 2, color: 'white' }}>
                    {title}
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'white' }}>
                    {lore}
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      gap: '2rem',
                      justifyContent: 'center',
                      paddingTop: '5rem',
                    }}
                  >
                    {spells.map(({ image, name }) => {
                      return (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{ color: 'white', fontWeight: ' bold' }}
                          >
                            {name}
                          </Typography>
                          <CardMedia
                            component="img"
                            sx={{
                              width: '48px',
                              height: '48px',
                            }}
                            src={image.full}
                            image={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${image.full}`}
                            alt={champion.id}
                          />
                        </div>
                      );
                    })}
                  </div>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <ChampionImage
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
                alt={championName}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
