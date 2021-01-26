type ExcludeMatchingProperties<TObject, TValue> = Pick<TObject, {
  [K in keyof TObject]-?: TObject[K] extends TValue ? never : K;
}[keyof TObject]>;

type ExcludeMethods<TObject> = ExcludeMatchingProperties<TObject, Function>