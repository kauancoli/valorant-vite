import { Agent } from '@/@dtos';

type CardProps = {
  agents: Agent[];
  onClick: () => void;
  isSelected: boolean;
};

export const Card: React.FC<CardProps> = ({ agents, onClick, isSelected }) => {
  return (
    <div className="select-none">
      {agents.map((agent: Agent, index: number) => (
        <div
          key={index}
          className={`bg-background w-64 h-[32rem] relative border-2 border-t border-l border-background rounded-tl-xl overflow-hidden  transition-all duration-500 ${
            isSelected ? 'bg-white scale-105' : ''
          }`}
          onClick={onClick}
        >
          <div className="p-2 absolute flex justify-center w-full">
            <span
              className="z-0 absolute top-[0.5rem] text-2xl font-bold uppercase opacity-20 blur-sm"
              style={{ color: `#${agent.backgroundGradientColors[0]}` }}
            >
              {agent.displayName}{' '}
            </span>
            <span
              className={`z-20 text-2xl font-bold uppercase  ${
                isSelected ? 'text-background' : 'text-white'
              }`}
            >
              {agent.displayName}{' '}
            </span>
          </div>
          <img
            src={agent.fullPortrait}
            alt={agent.displayName}
            className="h-[40rem] object-cover absolute -inset-0 -top-8"
          />

          <div
            className={`flex gap-5 justify-center items-center absolute bottom-0 w-full h-12   ${
              isSelected
                ? 'bg-white border-background border-t-2 border-0'
                : 'bg-background border-white border-2'
            }`}
          >
            {agent.abilities.map((ability, abilityIndex) =>
              agent.abilities.length > 4 ? null : (
                <img
                  key={abilityIndex}
                  src={ability.displayIcon}
                  alt={ability.displayName}
                  className="h-9"
                  style={
                    isSelected
                      ? {
                          filter: 'invert(100%)',
                        }
                      : { filter: 'invert(0%)' }
                  }
                />
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
