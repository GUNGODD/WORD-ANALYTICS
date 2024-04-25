import H2 from "./H2";

export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} type="Words" />
      <Stat number={stats.numberOfCharacters} type="Characters" />
      <Stat number={stats.instagramCharactersLeft} type="Instagram" />
      <Stat number={stats.facebookCharactersLeft} type="Facebook" />
      <div className="stat">
        <button className="border  m-4 p-3 hover:border-red-500 bg-blue-500 hover:bg-blue-300 rounded-lg">
          {" "}
          Sumbit{" "}
        </button>
      </div>
      <div className="stat">
        <h2>final answer </h2>
      </div>
    </section>
  );
}

function Stat({ number, type }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>

      <H2>{type}</H2>
    </section>
  );
}
