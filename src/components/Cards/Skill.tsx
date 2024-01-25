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
          className="bg-gray-200 p-4 border border-background border-t border-l border-transparent rounded-tl-xl shadow-md w-72 relative"
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
                <p className="text-lg font-semibold">
                  {ability.displayName}
                  {` (${translateSlot(ability.slot)})`}
                </p>
                <p className="text-[0.7rem] max-h-10">
                  {limitDescription(ability.description, 70)}
                </p>
              </div>
              <img
                src={ability.displayIcon}
                alt={ability.displayName}
                className="w-20 h-20 mr-2 rounded-md"
                style={{ filter: 'invert(100%)' }}
              />
            </div>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
};
