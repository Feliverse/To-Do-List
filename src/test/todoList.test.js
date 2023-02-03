/**
 * @jest-environment jsdom
 */

import Todo from '../util/addDeleteTask';
import createDom from '../test/__mocks__/fakeDom.js';
import { getStorage, fillStorage }  from '../test/__mocks__/fakelocalstorage.js';

describe('test ', () => {
  const list = new Todo();
  test('test local storage', () => {
    expect(getStorage()).toHaveLength(2);
  });

  test('test add list function', () => {
    list.addList('List 1', false, 1);
    expect(list.getLists()).toHaveLength(1);
  });

  test('Add one <li> tag with new item inside', () => {
    const ul = createDom();
    ul.appendChild(list.addList('Task 1', false, 1));
    expect(document.querySelectorAll('#list li')).toHaveLength(1);
  });

  test('Check <li> content', () => {
    expect(list.addList('List 1', false, 1).textContent).toBe('List 1');
  });

  test('Delete 1 <li>', () => {
    list.deleteList(1);
    expect(list.getLists()).toHaveLength(2);
  });
});
