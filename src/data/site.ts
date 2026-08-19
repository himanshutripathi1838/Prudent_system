export const COMPANY = {
  name: "Prudent Systems Pvt. Ltd.",
  short: "Prudent Systems",
  tagline: "Turning Smart Devices into Intelligent Decisions.",
  description:
    "Prudent Systems engineers end-to-end Industry 4.0 systems — universal IoT gateways, secure OTA, edge AI, cloud dashboards and predictive monitoring — connecting industrial machines and railway assets to actionable intelligence.",
  officialSite: "https://prusys.com/",
  city: "Bhopal, Madhya Pradesh, India",
  coords: { lat: 23.2318, lng: 77.4344 },
} as const;

/**
 * Contact channels. Only official, source-confirmed values belong here.
 * `verified: false` entries are rendered as "refer to the official website"
 * instead of displaying an unverified phone number or address.
 */
export const CONTACT = {
  addressLine: "18, Vaishali Nagar, Kotra Sultanabad, Bhopal, Madhya Pradesh 462003, India",
  addressVerified: true,
  phone: "+91 95895 85072" as string | null,
  landline: "0731-4066043" as string | null,
  email: "contact@prusys.com" as string | null,
  officialContactUrl: "https://prusys.com/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=18%2C+Vaishali+Nagar%2C+Kotra+Sultanabad%2C+Bhopal%2C+Madhya+Pradesh+462003",
};

export const SOCIALS: { label: string; url: string }[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/company/prudent-systems-pvt-ltd-/posts/?feedView=all" },
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Expertise", to: "/expertise" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
] as const;
