export type SourceType =
  | "constitution"
  | "acts"
  | "gazette"
  | "judgments"
  | "regulations";

export interface LegalSource {
  id: string;

  name: string;

  description: string;

  website: string;

  downloadUrl?: string;

  type: SourceType;

  official: boolean;

  active: boolean;
}