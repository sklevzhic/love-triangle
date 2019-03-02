/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.unshift(0);
  for (let i = 1; i < preferences.length; i++) {
    firstLover = preferences[i];
    secondLover = preferences[firstLover];
    thirdLover = preferences[secondLover];
    if (thirdLover === i)  {
      count++;
    }
  }
  return Math.floor(count / 3);
};
