const createDom = () => {
  document.body.innerHTML = '<div><ul id="list"></ul></div>';
  const ul = document.querySelector('#list');
  return ul;
};

export default createDom;