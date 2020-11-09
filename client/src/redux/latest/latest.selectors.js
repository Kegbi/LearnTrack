import { createSelector } from "reselect";

const selectLatest = (state) => state.latest;

export const selectLatestContent = createSelector(
  [selectLatest],
  (latest) => latest.content
);
