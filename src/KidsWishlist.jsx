import "./KidsWishlist.css";

export default function KidsWishlist({
  data: { id, name, age, wishlist, naughty },
}) {
  return (
    <div className={`card ${!naughty ? "snille-barn" : ""}`}>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h3>({age} years)</h3>

      <ul>
        {wishlist.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      {naughty && <p>Naughty!</p>}
    </div>
  );
}
