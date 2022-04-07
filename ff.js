const axios = require('axios');

const range = (start, end, step = 1) => {
  const last = end || start;
  let i = last !== start ? start : 0;
  const arr = [];

  while (i < last) {
    arr.push(i);
    i += step;
  }
  return arr;
};
const array = range(201, 600);

const res = Promise.all(
  array.map(number => {
    return axios({
      method: 'post',
      url: 'http://localhost:1337/api/articles',
      data: {
        data: {
          title: `article ${number}`,
          description: `설명 ${number}`,
        },
      },
    });
  })
);

console.log('res : ', res);
