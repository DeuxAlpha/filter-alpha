import {QueryComparison} from "./QueryComparisonEnum";
import {QueryRelation} from "./QueryRelation";

export type QueryFilter = {
  propertyName: string;
  value: string
  comparison: QueryComparison;
  relation?: QueryRelation;
}
