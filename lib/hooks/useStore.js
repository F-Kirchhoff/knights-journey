import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getRandomPosition, SQUARES } from "../utils";

const config = (set, get) => {
  return {
    moveHistory: ["a1"],
    moveKnight: (nextSquareID) =>
      set((state) => {
        return {
          moveHistory: [nextSquareID, ...state.moveHistory],
        };
      }),
    resetMoves: () =>
      set((state) => {
        return {
          moveHistory: [getRandomPosition()],
        };
      }),
    getCurrentSquare: () => {
      const currentID = get().moveHistory[0];
      return SQUARES.find((square) => square.id === currentID);
    },
  };
};

const usePersistedStore = create(
  persist(config, {
    name: "move-history-2",
  })
);
const useInitialStore = create(config);

function useStore(selector, compare) {
  const [hasHydrated, setHasHydrated] = useState(false);
  useEffect(() => setHasHydrated(true), []);

  const store = usePersistedStore(selector, compare);
  const initialStore = useInitialStore(selector, compare);

  return hasHydrated ? store : initialStore;
}

export default useStore;
