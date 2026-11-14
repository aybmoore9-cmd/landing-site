export type Town = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  local: string;
  faqs: [string, string][];
};

export const TOWNS: Town[] = [
  {
    slug: "greenwood",
    name: "Greenwood",
    short: "Greenwood, IN",
    intro:
      "Greenwood is our closest big neighbor, just north of Franklin. We install full-service Christmas lights for Greenwood homes: we bring commercial-grade LED lights, hang them, keep them shining all season, and take everything down in January.",
    local:
      "Many Greenwood neighborhoods have homeowners associations with their own decorating rules. We use clip-on installs with no nails or staples, and we're happy to work around your HOA's guidelines. Just let us know when you request your quote.",
    faqs: [
      ["Do you serve all of Greenwood?", "Yes. We serve homes throughout Greenwood. If you're not sure whether your street is in range, ask when you request a quote."],
      ["My HOA has decorating rules. Is that a problem?", "Not usually. Our installs clip on without nails or staples and come down in January. Tell us about any HOA rules and we'll design around them."],
      ["How much does Christmas light installation cost in Greenwood?", "Full service starts at $400. That includes the lights, installation, free bulb fixes all season, takedown in January and storage. Your exact price depends on the size of your home."],
    ],
  },
  {
    slug: "whiteland",
    name: "Whiteland & New Whiteland",
    short: "Whiteland, IN",
    intro:
      "Whiteland and New Whiteland sit right between Franklin and Greenwood, minutes from where we're based. We install full-service Christmas lights for homes in both towns: lights supplied, professionally installed, maintained all season and taken down in January.",
    local:
      "Because we're local, we can usually measure your home within a day or two of your request, and we're close by if a section of lights ever needs a fix during the season.",
    faqs: [
      ["Do you serve both Whiteland and New Whiteland?", "Yes. We serve homes in both towns and the surrounding area."],
      ["How quickly can you come measure?", "We respond to every request within 24 hours. Measurements in Whiteland are usually quick to schedule since we're right down the road in Franklin."],
      ["How much does it cost?", "Full service starts at $400, including the lights, installation, free fixes all season, takedown in January and storage. We'll give you an exact price after a free measurement."],
    ],
  },
  {
    slug: "bargersville",
    name: "Bargersville & Center Grove",
    short: "Bargersville, IN",
    intro:
      "We install full-service Christmas lights for homes in Bargersville and the Center Grove area, just west of Franklin. We supply commercial-grade LED lights, install them, keep them working all season and take everything down in January.",
    local:
      "Homes in this area range from newer subdivisions to larger properties with long rooflines and mature trees. Every design is custom-fit, so you get a clean, even look whether it's a single roofline or the whole house.",
    faqs: [
      ["Do you serve the Center Grove area?", "Yes. We serve Bargersville and the Center Grove area. Ask when you request a quote if you're not sure your street is in range."],
      ["Can you light larger homes and trees?", "Yes. We price by the size of your home and what you'd like lit, so larger homes simply get a custom quote after a free measurement."],
      ["How much does it cost?", "Full service starts at $400, with lights, installation, free bulb fixes all season, takedown and storage included."],
    ],
  },
];

export const getTown = (slug: string) => TOWNS.find((t) => t.slug === slug);
