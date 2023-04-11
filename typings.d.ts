type ExcludeMatchingProperties<TObject, TValue> = Pick<TObject, {
  [K in keyof TObject]-?: TObject[K] extends TValue ? never : K;
}[keyof TObject]>;

type ExcludeMethods<TObject> = ExcludeMatchingProperties<TObject, Function>;

interface NetSuiteIterator<NetSuiteIteratorResult> {
  each(callback: (result: { value: NetSuiteIteratorResult }) => boolean): void;

  next(): {
    value: NetSuiteIteratorResult,
    done: boolean,
  };
}

declare namespace alias {
  /**
   * Alias for TypeScript utility type `Record`
   */
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
}