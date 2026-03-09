import { inventoryAtom } from "../atoms/inventoryAtom";
import { useAtom } from "jotai";

function Backpack() {
  const [backpackInventory, setBackpackInventory] = useAtom(inventoryAtom);

  const useItem = (itemId: number) => {
    setBackpackInventory((prev) =>
      prev.map((item, index) => {
        console.log("iterating item", index);
        return item.id === itemId
          ? { ...item, durability: Math.max(0, item.durability - 1) }
          : item;
      }),
    );
  };

  const useItemByIndex = (index: number) => {
    setBackpackInventory((prev) => {
      // TODO: vérifier que l'index est valide
      const item = prev[index];
      item.durability = Math.max(0, item.durability - 1);
      prev[index] = item;

      return [...prev];
    });
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
          {backpackInventory.map((item, index) => (
            <li key={item.id}>
              {item.item}, ATK: {item.damage}, Durabilité: {item.durability}
              <button onClick={() => useItem(index)}> Use </button>
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
