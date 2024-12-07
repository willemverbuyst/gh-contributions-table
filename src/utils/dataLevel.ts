export const backgroundColor = {
  0: "bg-gray-200",
  1: "bg-green-300",
  2: "bg-green-400",
  3: "bg-green-500",
  4: "bg-green-600",
};

export function generateRandomDataLevel(): keyof typeof backgroundColor {
  const weights = [50, 25, 15, 7, 3];
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

  const random = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (let i = 0; i < weights.length; i++) {
    cumulativeWeight += weights[i];
    if (random < cumulativeWeight) {
      return i as keyof typeof backgroundColor;
    }
  }

  return 0;
}
