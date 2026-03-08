import { inventoryAtom } from "../atoms/inventoryAtom";
import { useAtom } from "jotai";

function Backpack() {
  const [backpackInventory, setBackpackInventory] = useAtom(inventoryAtom);

  const useItem = (itemId: number) => {
    setBackpackInventory((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, durability: item.durability - 1 }
          : item,
      ),
    );
  };

  const findPotion = () => {
    const newPotion = {
      id: Date.now(),
      item: "Potion",
      durability: 1,
      damage: 0,
    };
    setBackpackInventory((prev) => [...prev, newPotion]);
  };

  return (
    <>
      <div>
        <p>Dans ton sac tu as {backpackInventory.length}</p>
        <ul>
          {backpackInventory.map((item) => (
            <li key={item.id}>
              {item.item}, ATK: {item.damage}, Durabilité: {item.durability}
              <button onClick={() => useItem(item.id)}> Use </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={findPotion}> Potion </button>
      </div>
    </>
  );
}

export default Backpack;
