import React, { Component } from 'react';

import styled from 'styled-components';
import Row from '../Row/Row';

import SettingsLinks from '../SettingsLinks/SettingsLinks';

const StyledPage = styled.div`
    position: relative;
    &:hover>aside{
        opacity: 1;
    }
`
type IPage = {
    children: any,
    type:string,
    id: number
};
class Page extends Component<IPage, any> {
    state = {
        rows: [],
        nextId: 0,
    }

    addRow(){
        const id = this.state.nextId;
        const rows: Array<object> = [ ...this.state.rows];
        const row:any = <Row key={id} id={id} type="row" removeRow={this.removeRow.bind(this)}/>;
        rows.push(row);   
            this.setState({
                rows,
                nextId: id +1
            })
    }

    removeRow(id:number){
        const rows:any = [ ...this.state.rows];
        const newRows = rows.filter(item => item.props.id !== id )
        this.setState({
            rows: newRows,
        })
    }

    render(){
        const { type, id} = this.props;
        return (
            <StyledPage className="page"
                id={this.props.id}
            >
                <SettingsLinks id={id} type={type} addRow={this.addRow.bind(this)}/>               
                {this.state.rows}
            </StyledPage>
        )
    }
}

export default Page;