import { useState } from "react";

export default function Attack() {
  const [hit, setHit] = useState<number>(0);

  return (
    <div>
      <p>vous avez attaqué {hit} fois</p>
      <button onClick={() => setHit(hit + 1)}>Attaquer encore</button>
    </div>
  );
}
