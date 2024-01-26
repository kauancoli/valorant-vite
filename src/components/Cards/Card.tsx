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
          className={` 2xl:w-64 2xl:h-[32rem] xl:w-52 xl:h-[28rem] w-48 h-[24rem] relative border-2 border-t border-l border-background rounded-tl-xl overflow-hidden  transition-all duration-500 cursor-pointer hover:opacity-90 ${
            isSelected ? 'bg-white scale-105' : 'bg-background scale-100'
          }`}
          onClick={onClick}
        >
          <div className="p-2 absolute flex justify-center w-full">
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
            className="xl:h-[40rem] h-[32rem] object-cover absolute -inset-0 -top-8"
          />

          <div
            className={`flex gap-5 justify-center items-center absolute bottom-0 w-full h-12 ${
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
                  className="2xl:h-9 xl:h-7 h-6"
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
