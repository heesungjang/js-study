const num = 6;
const getCard = function (num) {
  let initialQueue = Array.from({ length: num }, (v, i) => i + 1);
  while (initialQueue.length > 1) {
    // 1. 제일 위에 있는 카드를 버린다.
    initialQueue.shift();
    // 2. 제일 위에 있는 카드를 제일 아래로 옮긴다.
    initialQueue.push(initialQueue.shift());
  }
  return initialQueue[0];
};

console.log(getCard(num));
