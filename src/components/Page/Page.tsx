import React, { Component } from 'react';

import styled from 'styled-components';
import Row from '../Row/Row';

import SettingsLinks from '../SettingsLinks/SettingsLinks';
import { connect } from 'react-redux';
import TitleComponent from '../Column/TitleComponent/TitleComponent';
import Column from '../Column/Column';

const StyledPage = styled.div`
    position: relative;
    text-align: center;
    &:hover>aside{
        opacity: 1;
    }
`
type IPage = {
    children: any,
    type:string,
    id: number,
    rows: any
};
class Page extends Component<IPage, any> {
    state = {
        rows: [],
        nextId: 0,
    }

    addRow(){
        const id = this.state.nextId;
        const rows: Array<object> = [ ...this.state.rows];
        const row:any = <Row key={id} id={id} type="row" removeRow={this.removeRow.bind(this)} getRowState={this.getRowState} columns={[]}/>;
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

    saveTemplate = () =>{
        const item: any = this.state.rows[0];
        console.log(item);
    }

    getRowState(state) {
        console.log(state)
    }

    loadTemplate = () => {
        const rows: any = this.props.rows;

        const rowTab :any = []
        const elementTab: any = [];
        const columnsTab: any = [];
        rows.forEach(row => {
            row.columns.forEach(column => {    
                column.elements.forEach(element => {
                    elementTab.push(this.createElementTemplate(element))
                })
                columnsTab.push(<Column key={column.id} id={column.id} type="column" removeColumn={console.log('test')} changeWidth={console.log('test')} elements={elementTab} />)
            })
            rowTab.push(<Row key={row.id} id={row.id} type="row" removeRow={this.removeRow.bind(this)} getRowState={this.getRowState} columns={columnsTab}/>)
            console.log(elementTab, columnsTab)
        })
        this.setState({
            rows: rowTab,
            
        })
    }

    createElementTemplate = (element) => {
        if(element.type === 'title'){
            return <TitleComponent key={element.id} type={element.type} id={element.id} removeColumn={console.log('test')}/>
        }
    }

    render(){
        const { type, id} = this.props;
        return (
            <StyledPage className="page"
                id={this.props.id}
            >
                <SettingsLinks id={id} type={type} addRow={this.addRow.bind(this)} saveTemplate={this.saveTemplate} loadTemplate={this.loadTemplate}/>               
                {this.state.rows.length > 0 ? this.state.rows : 'dodaj sekcje'}
            </StyledPage>
        )
    }
}

const mapStateToProps = ({rows}) => ({ rows })

export default connect(mapStateToProps)(Page);