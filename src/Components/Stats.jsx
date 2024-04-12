export const Stats = ({numberOfCharacter}) => {
  return (
    <section className="stats">
      <Stat stat_number={0} platform={"Words"} />
      <Stat stat_number={numberOfCharacter} platform={"CHARACTER"} />
      <Stat stat_number={2200} platform={"INSTAGRAM"} />
      <Stat stat_number={0} platform={"X"} />
    </section>
  );
};

function Stat({ stat_number, platform }) {
  return (
    <section className="stat">
      <span className="stat__number"> {stat_number}</span>
      <h2 className="second-heading">{platform}</h2>
    </section>
  );
}
