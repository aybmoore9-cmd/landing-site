// Proposed prices (draft, pending owner approval). Keep in sync with the quote calculator Settings tab.

export const PACKAGES = [
  {
    name: "Classic",
    price: "$400",
    blurb: "A clean, classic outline for smaller homes.",
    items: ["Front roofline, up to about 75 ft", "Warm-white commercial C9 LEDs"],
  },
  {
    name: "Front Yard",
    price: "$650",
    blurb: "Our most popular choice for a finished look.",
    items: ["Front roofline and peaks", "Up to 4 lit bushes", "Lit wreath on the front door"],
    featured: true,
  },
  {
    name: "Showstopper",
    price: "from $950",
    blurb: "The whole house, done right.",
    items: ["Full roofline and peaks", "Bushes and one small tree", "Wreath and porch garland"],
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

// Roofline ranges [low, high] by home type and coverage.
const BASE: Record<HomeType, Record<Coverage, [number, number]>> = {
  small: { front: [400, 475], sides: [500, 650], whole: [650, 850] },
  large: { front: [450, 600], sides: [600, 800], whole: [800, 1100] },
  two: { front: [550, 750], sides: [750, 1000], whole: [1000, 1400] },
};

export const ADDONS = { bush: 35, tree: 90, wreath: 75, pathway: [120, 200] as [number, number] };
export const MINIMUM = 400;

export function estimate(input: {
  home: HomeType;
  coverage: Coverage;
  bushes: number;
  trees: number;
  wreath: boolean;
  pathway: boolean;
}): [number, number] {
  const [lo, hi] = BASE[input.home][input.coverage];
  const extras = input.bushes * ADDONS.bush + input.trees * ADDONS.tree + (input.wreath ? ADDONS.wreath : 0);
  const path = input.pathway ? ADDONS.pathway : [0, 0];
  const round = (n: number) => Math.ceil(n / 25) * 25;
  return [Math.max(MINIMUM, round(lo + extras + path[0])), round(hi + extras + path[1])];
}
