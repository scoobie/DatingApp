import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PaginatedResult} from '../_models/pagination';

export function getPaginatedResult<T>(url, params, http: HttpClient) {
  const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
  return http.get<T>(url, {observe: 'response', params}).pipe(
    map(response => {
      // returns any class results
      paginatedResult.result = response.body;
      if (response.headers.get('Pagination') !== null) {
        // returns pagination {currentPage:1,itemsPerPage:5,totalItems:24,totalPages:5};
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}

export function getPaginationHeaders(pageNumber: number, pageSize: number) {
  let params = new HttpParams();

  params = params.append('pageNumber', pageNumber.toString());
  params = params.append('pageSize', pageSize.toString());

  return params;

}
