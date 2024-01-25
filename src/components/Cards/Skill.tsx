import { Ability } from '@/@dtos';
import React from 'react';

type SkillProps = {
  abilities: Ability[];
};

export const Skill: React.FC<SkillProps> = ({ abilities }) => {
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
  return (
    <div className="flex gap-4 select-none">
      {abilities.map((ability, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 border border-background border-t border-l border-transparent rounded-tl-xl shadow-md w-72"
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
              className="w-20 h-20 mr-2 bg-black rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
