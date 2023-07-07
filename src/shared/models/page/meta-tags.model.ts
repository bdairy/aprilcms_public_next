export interface IMetaTags {
  image: string | null;
  title: string | null;
  description: string | null;
}
function getTagValue(tag: string, data: any[]): string{
  const tagData = data.find(d => d.name === tag);
  if (tagData) {
    return tagData.value
  } else {
    return '';
  }
}
export class MetaTags {
  static fromEntityResult(entity: any): IMetaTags {
    const m: IMetaTags = {
      image: getTagValue('image', entity),
      title: getTagValue('title', entity),
      description: getTagValue('description', entity),
    };
    return m;
  }


  static fromEntityListResult(entity: any[]): IMetaTags[] {
    const result: IMetaTags[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(MetaTags.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
