const storage = [];
const fillStorage = () => {
  storage.push(
    {
      description: 'task 1',
      completed: false,
      index: 1,
    },
    {
      description: 'task 2',
      completed: false,
      index: 2,
    },
  );
};

const getStorage = () => storage;

export { fillStorage, getStorage, storage };