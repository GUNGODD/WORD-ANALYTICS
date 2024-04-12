export const Stats = (
  {stats}
) => {
  return (
    <section className="stats">
      <Stat stat_number={stats.numberOfWords} platform={"Words"} />
      <Stat stat_number={stats.numberOfCharacters} platform={"CHARACTER"} />
      <Stat stat_number={stats.InstagramCharacterLeft} platform={"INSTAGRAM"} />
      <Stat stat_number={stats.XCharacterLeft} platform={"X"} />
    </section>
  );
};

function Stat({ stat_number, platform }) {
  return (
    <section className="stat">
     <sapn
     className={`stat__number ${stat_number < 0 ? "stat__number--limit" : ""}`}
     
     >{stat_number} </sapn>
      <h2 className="second-heading">{platform}</h2>
    </section>
  );
}
