export class ApiResult<T> {
  value!: T;
  hasErrors!: boolean;
  errors!: any[];
  totalCount!: number;
  totalPageCount!: number;
  static fromEntityResult<T>(entity: any, mapper: (n: any) => T): ApiResult<T> {
    const res: ApiResult<T> = {
      value: mapper(entity.items),
      hasErrors: entity.hasErrors,
      errors: entity.error,
      totalCount: entity.totalCount ?? 0,
      totalPageCount: entity.totalPageCount ?? 0
    };
    return res;
  }

  static toError(error: any) {
    const res: ApiResult<any> = {
      value: null,
      hasErrors: true,
      errors: error.errors ?? error,
      totalCount: 0,
      totalPageCount: 0
    };
    return res;
  }

  constructor() {}
}
