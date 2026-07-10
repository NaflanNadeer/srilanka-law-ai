import { OFFICIAL_SOURCES } from "./official-sources";
import { LegalSource, SourceType } from "./source.types";

export class SourceRegistry {
  static getAll(): LegalSource[] {
    return OFFICIAL_SOURCES;
  }

  static getById(id: string): LegalSource | undefined {
    return OFFICIAL_SOURCES.find(source => source.id === id);
  }

  static getByType(type: SourceType): LegalSource[] {
    return OFFICIAL_SOURCES.filter(source => source.type === type);
  }

  static getOfficial(): LegalSource[] {
    return OFFICIAL_SOURCES.filter(source => source.official);
  }

  static getActive(): LegalSource[] {
    return OFFICIAL_SOURCES.filter(source => source.active);
  }
}