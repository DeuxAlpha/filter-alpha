export enum QueryRelationEnum {
  /// <summary>Apply this condition and combine the result with the next.</summary>
  And = 1,
  /// <summary>Apply this condition and combine the result with the next, but only if if this one evaluates to
  /// true.</summary>
  AndAlso = 2,
  /// <summary>Apply this condition and evaluate the next one separately.</summary>
  Or = 3,
  /// <summary>Apply this condition and evaluate the next one separately, but only if this one evaluates to false.</summary>
  OrElse = 4,
  /// <summary>Apply this condition and combine it with the next one in an Exclusive Or fashion. For more info,
  /// visit https://hackernoon.com/xor-the-magical-bit-wise-operator-24d3012ed821</summary>
  Xor = 5,
}

export type QueryRelation =
  'And' |
  'AndAlso' |
  'Or' |
  'OrElse' |
  'Xor';

