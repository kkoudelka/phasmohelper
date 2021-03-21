export const getRandomFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

export const getPercentageBetween = (min: number, max: number, alpha: number) =>
  ((alpha - min) * 100) / (max - min);
