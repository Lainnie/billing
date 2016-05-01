export default (collection, model) => {
  return !!collection.find((m) => {
    return m._id === model._id;
  });
};
