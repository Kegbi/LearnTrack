import { createSelector } from "reselect";

const selectCardsSelector = (state) => state.cards;

export const selectLatestContent = createSelector(
  [selectCardsSelector],
  (cards) => cards.latest
);

export const selectCards = createSelector(
  [selectCardsSelector],
  (cards) => cards.cards
);
