import { Ability } from '@/@dtos';
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

type SkillProps = {
  abilities: Ability[];
  selectedAgentKey: string;
};

export const Skill: React.FC<SkillProps> = ({
  abilities,
  selectedAgentKey,
}) => {
  const translateSlot = (slot: string): string => {
    switch (slot) {
      case 'Ability1':
        return 'Q';
      case 'Ability2':
        return 'E';
      case 'Grenade':
        return 'C';
      case 'Ultimate':
        return 'X';
      default:
        return slot;
    }
  };

  const limitDescription = (description: string, maxLength: number): string => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    }
    return description;
  };

  useEffect(() => {}, [selectedAgentKey]);
  return (
    <div className="flex gap-4 select-none">
      {abilities.map((ability, index) => (
        <motion.div
          key={`${selectedAgentKey}-${index}`}
          className="bg-gray-200 p-4 border border-background border-t-2 border-l-2 border-r-8 border-b-4 rounded-tl-xl shadow-md relative
          2xl:w-72 2xl:h-36 xl:w-60 xl:h-32 lg:w-56 lg:h-20"
          initial={{ opacity: 0, y: -20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tooltip
            title={ability.description}
            enterDelay={100}
            leaveDelay={200}
          >
            <div className="flex items-center gap-5 mb-4 justify-between">
              <div>
                <p className="2xl:text-lg 2xl:leading-6 xl:text-md xl:leading-5  lg:text-md lg:leading-5 font-bold">
                  {ability.displayName}
                  {` (${translateSlot(ability.slot)})`}
                </p>
                <p className=" max-h-10 mt-2 2xl:text-[0.6rem] xl:text-[0.6rem] xl:block lg:hidden">
                  {limitDescription(ability.description, 65)}
                </p>
              </div>

              <img
                src={ability.displayIcon}
                alt={ability.displayName}
                className="2xl:w-20 2xl:h-20 2xl:mr-2 xl:w-12 xl:h-12 xl:mr-0 lg:w-10 lg:h-10 rounded-md"
                style={{ filter: 'invert(100%)' }}
              />
            </div>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
};
