import { EvidenceType } from '../ghosts/evidence';

export const getRandomFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

export const getPercentageBetween = (min: number, max: number, alpha: number) =>
  ((alpha - min) * 100) / (max - min);

interface IEvidenceCount {
  type: EvidenceType;
  count: number;
}

export const getEvidenceOccurances = (
  evidence: EvidenceType[],
): IEvidenceCount[] => {
  let count: IEvidenceCount[] = [];

  evidence.forEach((evidence) => {
    if (count.some((x) => x.type === evidence)) {
      count.find((x) => x.type === evidence).count++;
    } else {
      count.push({ type: evidence, count: 1 });
    }
  });

  count.sort((a, b) => (a.count < b.count ? 1 : -1));

  return count;
};
