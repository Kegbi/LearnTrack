import { createSelector } from "reselect";

const selectCardsSelector = (state) => state.cards;

export const selectCards = createSelector(
  [selectCardsSelector],
  (cards) => cards.cards
);
