import { LegalSource } from "./source.types";

export const OFFICIAL_SOURCES: LegalSource[] = [
  {
    id: "parliament",
    name: "Parliament of Sri Lanka",
    description: "Official Acts of Parliament and Constitution",
    website: "https://www.parliament.lk",
    type: "acts",
    official: true,
    active: true,
  },

  {
    id: "gazette",
    name: "Government Gazette",
    description: "Official Government Gazette Publications",
    website: "https://documents.gov.lk",
    type: "gazette",
    official: true,
    active: true,
  },
];