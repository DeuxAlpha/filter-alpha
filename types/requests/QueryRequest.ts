import {QueryFilter} from "./QueryFilter";
import {QuerySorter} from "./QuerySorter";
import {QueryAggregator} from "./QueryAggregator";
import {QueryDistinctor} from "./QueryDistinctor";

export type QueryRequest = {
  filters?: QueryFilter[];
  sorters?: QuerySorter[];
  aggregators?: QueryAggregator[];
  distinctors?: QueryDistinctor[];
  items?: Number;
  page?: Number;
}
