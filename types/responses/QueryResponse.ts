import {QueryAggregation} from "./QueryAggregation";
import {QueryDistinction} from "./QueryDistinction";

export type QueryResponse<T> = {
  /** All items that were returned, respecting all applied filters, sorters, amount of items, and
   page.*/
  items: T[]

  /**The amount of items returned. */
  itemCount: number

  /** The overall possible amount of items that could have been returned, respecting all filters.*/
  maxItemCount: number;

  /** The page that was returned.*/
  page: number;

  /**The overall possible max page based on the amount of items per page, as well as respecting all
   filters.*/
  maxPage: number

  /** The number of the first item being returned (e.g. if Items = 10 -&gt; <i>1</i> on Page = 1, <i>11</i>
   on Page = 2) */
  startItemCount: number

  /** The number of the last item being returned (e.g. if Items = 10 -&gt; <i>10</i> on Page = 1, <i>20</i>
   on Page = 2) */
  endItemCount: number

  /** All aggregates retrieved, based on the collection of aggregators provided. */
  aggregates: QueryAggregation[];

  /** All distinct values retrieved, based on the collection of distinctors provided. */
  distinctions: QueryDistinction[];
}
