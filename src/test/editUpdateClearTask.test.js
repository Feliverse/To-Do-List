/**
 * @jest-environment jsdom
 */
import Todo from '../util/editUpdateClearTask.js';
// import createDom from './__mocks__/fakeDom.js';
import { fillStorage, getStorage, storage } from '../test/__mocks__/fakelocalstorage.js';

describe('test update edit and clear methods', () => {
  const task = new Todo();
  fillStorage();

  test('editing the task', () => {
    task.editList(1, 'edited content');
    expect(getStorage()[1].description).toBe('edited content');
  });

  test('update the task status clear all', () => {
    task.showList(1, true);
    expect(getStorage()[1].completed).toBeTruthy();
  });
 
  test('clear all completed ', () => {
    task.clearCompleted(storage);
    expect(getStorage()[2]).toBeUndefined();
    expect(getStorage()[3]).toBeUndefined();
  });

});