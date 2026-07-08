export interface LegalDocument {
  id: string;

  title: string;

  shortTitle?: string;

  documentType:
    | "constitution"
    | "act"
    | "gazette"
    | "judgment"
    | "regulation"
    | "circular";

  language: "en" | "si" | "ta";

  version: string;

  source: string;

  publishedDate?: string;

  effectiveDate?: string;

  chapters: LegalChapter[];
}

export interface LegalChapter {
  id: string;

  title: string;

  sections: LegalSection[];
}

export interface LegalSection {
  id: string;

  number: string;

  heading?: string;

  content: string;

  citations?: string[];
}