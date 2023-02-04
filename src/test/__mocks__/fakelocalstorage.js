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
    {
      description: 'task 3',
      completed: true,
      index: 3,
    },
    {
      description: 'task 4',
      completed: true,
      index: 4,
    },
  );
};

const getStorage = () => storage;
const setStorage = (newStorage) => {
  for (let i = 0; i < storage.length; i += 1) {
    storage[i] = newStorage[i];
  }
};

export {
  fillStorage, getStorage, storage, setStorage,
};