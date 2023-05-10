const getRandomNum = (randomMin = 1, randomMax = 10) => {
  if (randomMax <= randomMin) return null;
  return Math.round(Math.random() * (randomMax - randomMin) + randomMin);
};

export default getRandomNum;
