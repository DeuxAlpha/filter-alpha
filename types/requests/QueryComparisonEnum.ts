export enum QueryComparisonEnum {
  /// <summary>A value equaling another.</summary>
  Equal = 1,
  /// <summary>A value being less than another.</summary>
  LessThan = 2,
  /// <summary>A value being less than or equal to another.</summary>
  LessThanOrEqual = 3,
  /// <summary>A value being greater than another.</summary>
  GreaterThan = 4,
  /// <summary>A value being greater than or equal to another.</summary>
  GreaterThanOrEqual = 5,
  /// <summary>A value not equaling another.</summary>
  NotEqual = 6,
  /// <summary>A value being contained within another. Only applicable for strings.</summary>
  Contains = 7,
  /// <summary>A value starting with another. Only applicable for strings.</summary>
  StartsWith = 8,
  /// <summary>A value ending with another. Only applicable for strings.</summary>
  EndsWith = 9,
  /// <summary>A value not being null.</summary>
  HasValue = 10, // 0x0000000A
  /// <summary>A value being null.</summary>
  HasNoValue = 11, // 0x0000000B
}

export type QueryComparison =
  'Equals' |
  'Equal' |
  'LessThan' |
  'LessThanOrEqual' |
  'GreaterThan' |
  'GreaterThanOrEqual' |
  'NotEqual' |
  'Contains' |
  'StartsWith' |
  'EndsWith' |
  'HasValue' |
  'HasNoValue'
