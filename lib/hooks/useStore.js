import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getRandomPosition, SQUARES } from "../utils";

const useStore = create(
  persist(
    (set, get) => {
      return {
        _hasHydrated: false,
        setHasHydrated: (state) => {
          set({
            _hasHydrated: state,
          });
        },
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
    },
    {
      name: "move-history",
    }
  )
);

export default useStore;