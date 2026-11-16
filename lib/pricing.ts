// Prices agreed by the founders (Nov 15, 2026). Source of truth:
// "CMP Holiday Lighting Pricing (Full Service)" Google Sheet. Keep these in sync.

export const RATES = {
  minimum: 400,
  rooflinePerFt: 5.5,
  secondStoryExtraPerFt: 1,
  bush: [25, 60] as [number, number], // small to large
  tree: [75, 145] as [number, number], // small (up to 6 ft) to medium (6 to 10 ft)
  pillar: 35,
};

export const PACKAGES = [
  {
    name: "Classic",
    price: "$400",
    blurb: "A clean, classic outline for smaller homes.",
    items: ["Front roofline, up to about 70 ft", "Warm-white commercial C9 LEDs"],
  },
  {
    name: "Front Yard",
    price: "$650",
    blurb: "Our most popular choice for a finished look.",
    items: ["Front roofline, up to about 90 ft", "Up to 4 lit bushes", "Warm-white commercial C9 LEDs"],
    featured: true,
  },
  {
    name: "Showstopper",
    price: "from $950",
    blurb: "The whole house, done right.",
    items: ["Full roofline", "Lit bushes", "One lit tree"],
  },
] as const;

export const HOME_TYPES = [
  { id: "small", label: "Smaller one-story" },
  { id: "large", label: "Larger one-story" },
  { id: "two", label: "Two-story" },
] as const;

export const COVERAGE = [
  { id: "front", label: "Front only" },
  { id: "sides", label: "Front and sides" },
  { id: "whole", label: "Whole house" },
] as const;

export type HomeType = (typeof HOME_TYPES)[number]["id"];
export type Coverage = (typeof COVERAGE)[number]["id"];

// Typical roofline footage [low, high] by home type and coverage.
const FEET: Record<HomeType, Record<Coverage, [number, number]>> = {
  small: { front: [60, 80], sides: [100, 130], whole: [140, 170] },
  large: { front: [80, 110], sides: [130, 170], whole: [180, 230] },
  two: { front: [70, 100], sides: [120, 160], whole: [170, 220] },
};

export function estimate(input: {
  home: HomeType;
  coverage: Coverage;
  bushes: number;
  trees: number;
  pillars: number;
}): [number, number] {
  const rate = RATES.rooflinePerFt + (input.home === "two" ? RATES.secondStoryExtraPerFt : 0);
  const [ftLo, ftHi] = FEET[input.home][input.coverage];
  const fixed = input.pillars * RATES.pillar;
  const lo = ftLo * rate + input.bushes * RATES.bush[0] + input.trees * RATES.tree[0] + fixed;
  const hi = ftHi * rate + input.bushes * RATES.bush[1] + input.trees * RATES.tree[1] + fixed;
  const round = (n: number) => Math.ceil(n / 25) * 25;
  return [Math.max(RATES.minimum, round(lo)), Math.max(RATES.minimum + 50, round(hi))];
}
