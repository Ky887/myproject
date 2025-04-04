export default function Fruit({ name, price, emoji, soldOut }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}

      <li>
        {emoji} {name} ${price} {soldOut ? "Sold out" : ""}
      </li>
    </>
  );
}
