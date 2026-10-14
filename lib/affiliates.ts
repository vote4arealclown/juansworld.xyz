// Affiliate links, centralized so the tag lives in exactly one place.
// ponytail: insert your Amazon Associates tag below; links work without it
// until then (no tag param is appended while this is empty).
const AMAZON_ASSOCIATES_TAG = "";

const SMART_BET_FIELD_GUIDE_ASIN = "B0HHPY4J4M"; // Vol. 1: NFL Survivor Pools

export function smartBetFieldGuideUrl(): string {
  const base = `https://www.amazon.com/dp/${SMART_BET_FIELD_GUIDE_ASIN}`;
  return AMAZON_ASSOCIATES_TAG
    ? `${base}?tag=${AMAZON_ASSOCIATES_TAG}`
    : base;
}
