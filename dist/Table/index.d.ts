import React from "react";
type TColumn = {
    title: string;
    dataIndex: string;
    key: string;
    render?: (value: any, record: any) => React.ReactNode;
};
type TTable = {
    columns: TColumn[];
    data: any[];
};
declare const Table: React.FC<TTable>;
export default Table;
