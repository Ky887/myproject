const name = "Ky";
function Hello({ person }) {
  return (
    <h1>
      {person.message} {person.name} {person.emoji}
      {person.seatNumbers}
    </h1>
  );
}

export default Hello;
