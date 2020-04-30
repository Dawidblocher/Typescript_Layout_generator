import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div`
    grid-template-columns: ${({childrenLength}) => (countWidth(childrenLength))};
`
const countWidth = (children) =>{
    let value: string = '';
    for(let i =0; i<children.length; i++){
        value += ` ${100/children.length}%`
    }
    return value;
}
type IRow = {};
const Row: FunctionComponent<IRow> = ( { children} ) => {
    
    return (
        <RowWrapper className="row" childrenLength={children}>
            
            {children}
        </RowWrapper>
    )
}

export default Row;