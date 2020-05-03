import React, { FunctionComponent } from 'react';


type IColumn = {
  
};
const RowSetting = ( props) => {
    const { location: {addColumn} } = props;
    return (
        <div className="column" onClick={addColumn}>
            setting Row
        </div>
    )
}

export default RowSetting;