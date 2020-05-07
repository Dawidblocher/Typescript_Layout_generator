import React from 'react';
import styled from 'styled-components';
import Column from '../Column/Column';
import SettingsLinks from '../SettingsLinks/SettingsLinks';

const RowWrapper = styled.div`
    grid-template-columns: ${({childrenLength}) => ((typeof childrenLength === "object" ? countWidth(childrenLength) : 0))};
    &:hover>aside{
        opacity: 1;
    }
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
    type: string,
    removeRow: any
};

class Row extends React.Component<IRow, any> {
    state = {
        columns: [],
        nextId: 0,
    }

    removeColumn(id:number){
        const columns:any = [ ...this.state.columns];
        const newColumns = columns.filter(item => item.props.id !== id )
        this.setState({
            columns: newColumns,
        })
    }

    addColumn(){
        const id = this.state.nextId;
        const columns: Array<object> = [ ...this.state.columns];
        const a:any = <Column key={id} id={id} type="column" removeColumn={this.removeColumn.bind(this)}/>;
        columns.push(a);   
            this.setState({
                columns,
                nextId: id + 1
            })
    }

    render(){
        const { type, id, removeRow} = this.props;
        return (
            <RowWrapper className="row" childrenLength={this.state.columns} >
                <SettingsLinks id={id} type={type} addColumn={this.addColumn.bind(this)} remove={removeRow}/>
                {/* <Setting>
                   <StyledLink to={{
                        pathname: `/${type}settings/${id}`,
                        addColumn: this.addColumn.bind(this)
                    }}><StyledSettings/></StyledLink> 
                    <DeleteRowBtn onClick={() => removeRow(id)} >X</DeleteRowBtn>
                </Setting> */}
                {this.state.columns}
            </RowWrapper>
        )
    }
}

export default Row;