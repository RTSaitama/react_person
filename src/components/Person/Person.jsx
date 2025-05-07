export const Person = ({ name, age = 100, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>

    {age !== undefined && <p className="Person__age">I am {age}</p>}

    {partnerName ? (
      <p className="Person__partner">{partnerName} is my wife</p>
    ) : (
      <p className="Person__partner">I am free now</p>
    )}
  </section>
);
