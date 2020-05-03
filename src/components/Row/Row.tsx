import React from 'react';
import styled from 'styled-components';
import Column from '../Column/Column';
import { Link } from "react-router-dom";
import { Settings } from '@material-ui/icons';

const RowWrapper = styled.div`
    grid-template-columns: ${({childrenLength}) => ((typeof childrenLength === "object" ? countWidth(childrenLength) : 0))};
`

const RowSetting = styled.aside`
    position: absolute;
`

const countWidth = (children) =>{
    let value: string = '';
    for(let i =0; i<children.length; i++){
        value += `${100/children.length}%  `;
    }
    return value;
}

type IRow = {
    id: number,
    type: string
};

class Row extends React.Component<IRow, any> {
    state = {
        columns: [],
        redirect: false,
    }

    addColumn(){
        const id = this.state.columns.length;
        const columns: Array<object> = [ ...this.state.columns];
        const a:any = <Column key={id}/>;
        columns.push(a);   
            this.setState({
                columns
            })
    }


    handleClickRow(){
        const columns = this.state.columns;
        this.setState({
            columns,
            redirect: true,     
        })
    }

    render(){
        const { type, id} = this.props;

        return (
            <RowWrapper className="row" childrenLength={this.state.columns} >
                <RowSetting>
                   <Link to={{
                        pathname: `/${type}settings/${id}`,
                        addColumn: this.addColumn.bind(this)
                    }}><Settings/></Link> 
                    
                </RowSetting>
                {this.state.columns}
            </RowWrapper>
        )
    }
}

export default Row;