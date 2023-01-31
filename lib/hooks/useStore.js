import { create } from "zustand";
import { getRandomPosition, SQUARES } from "../utils";

const useStore = create((set, get) => {
  return {
    moveHistory: [],
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
});

export default useStore;
