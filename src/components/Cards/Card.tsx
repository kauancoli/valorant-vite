import { Agent } from '@/@dtos';

type CardProps = {
  agents: Agent[];
};

export const Card: React.FC<CardProps> = ({ agents }) => {
  return (
    <div className="p-10">
      {agents.map((agent: Agent, index: number) => (
        <div
          key={index}
          className="bg-background w-56 h-[28rem] relative border border-t border-l border-transparent rounded-tl-xl overflow-hidden"
        >
          <div className="p-2 absolute flex justify-center w-full">
            <span
              className="z-0 absolute top-[0.5rem] text-2xl font-bold uppercase opacity-20 blur-sm"
              style={{ color: `#${agent.backgroundGradientColors[0]}` }}
            >
              {agent.displayName}{' '}
            </span>
            <span className="z-20 text-2xl font-bold uppercase text-white">
              {agent.displayName}{' '}
            </span>
          </div>
          <img
            src={agent.fullPortrait}
            alt={agent.displayName}
            className="h-[32rem] object-cover absolute -inset-0"
          />

          <div className="flex gap-5 justify-center items-center absolute bottom-0 bg-background w-full h-12 border-2 border-white">
            {agent.abilities.map((ability, abilityIndex) =>
              agent.abilities.length > 4 ? null : (
                <img
                  key={abilityIndex}
                  src={ability.displayIcon}
                  alt={ability.displayName}
                  className="h-8"
                />
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
