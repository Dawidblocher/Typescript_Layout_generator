import React, { FunctionComponent } from 'react';


type IColumn = {};
const Column: FunctionComponent<IColumn> = ( { children} ) => {
    
    return (
        <div className="column">
            
            {children}
        </div>
    )
}

export default Column;