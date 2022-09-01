
/*
This is a Table component with Generic type that define the object type which we are using in 
renderItem function
*/

import React from "react";

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
    return null
}

export const component = () => {
    return (
        <Table
            items={[{ id: '1', firstName: 'Burke' }]}
            renderItem={(item) => {
                item.firstName
                return null;
            }}
        ></Table>
    )
}