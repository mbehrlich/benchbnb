export const FILTER_CONSTANTS = {
  UPDATE_BOUNDS: "UPDATE_BOUNDS"
};

export const updateBounds = (bounds) => ({
  type: FILTER_CONSTANTS.UPDATE_BOUNDS,
  bounds
});
