import {QuerySortDirection} from "./QuerySortDirection";

export type QuerySorter = {
  propertyName: string;
  direction?: QuerySortDirection;
};
