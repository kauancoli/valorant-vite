import { Agent } from '@/@dtos';

export const Card = ({ agents }) => {
  return (
    <div className="p-10">
      {agents.map((agent: Agent, index: number) => (
        <div key={index} className="bg-background rounded-tl-xl w-auto h-auto">
          <img
            src={agent.fullPortrait}
            alt={agent.displayName}
            className="h-96 object-cover"
          />
        </div>
      ))}
    </div>
  );
};
