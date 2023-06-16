import { AggregateDescriptor } from "@progress/kendo-data-query";

export interface Product {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    Category: { [Key: string]: unknown};
}

export interface Group {
    field: string;
    aggregates: AggregateDescriptor[];
}

export interface CellConfig {
    background: string;
    textAlign: string;
}