export declare class PaginationDto {
    page: number;
    limit: number;
    getOffset(): number;
    getLimit(): number;
}
export declare class PaginationMeta {
    constructor(total: number, limit: number, currentPage: number);
    limit: number;
    total: number;
    endPage: number;
    page: number;
    currentPage: number;
    has_previous: boolean;
    has_next: boolean;
}
export declare class Pagination<T> {
    items: T[];
    pagination: PaginationMeta;
    constructor(total: number, limit: number, currentPage: number, items: T[]);
}
