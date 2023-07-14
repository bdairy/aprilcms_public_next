

export class LanguageObject {
  ar!: string;
  en!: string;
  static fromFields(ar: string, en: string): LanguageObject {
    const obj: LanguageObject = {
      ar: ar ?? '',
      en: en ?? '',
    };
    return obj;
  }
  static fromEntityResult(entity: any): LanguageObject | null{
    if (!entity) {
      return null;
    }
    const obj: LanguageObject = {
      ar: entity.ar,
      en: entity.en,
    };
    return obj;
  }
  static fromEntityListResult(entity: any[]): LanguageObject[] {
    const result: LanguageObject[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(this.fromEntityResult(element)!);
      });
    }
    return result;
  }

  static toMap(obj: LanguageObject): any {
    return { ...obj };
  }

  static getValue(obj: LanguageObject ,locale: string): string{
    if (locale === 'ar') {
      return obj.ar;
    } else {
      return obj.en;
    }
  }


  constructor() { }


}