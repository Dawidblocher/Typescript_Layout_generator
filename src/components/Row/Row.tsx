import React from 'react';
import styled from 'styled-components';
import Column from '../Column/Column';
import SettingsLinks from '../SettingsLinks/SettingsLinks';

const RowWrapper = styled.div`
    grid-template-columns: ${({widthArray}) => ((typeof widthArray === "object" ? countWidth(widthArray) : 0))};
    &:hover>aside{
        opacity: 1;
    }
`

const countWidth = (widthArray) =>{
    let value: string = '';
    widthArray.forEach(width => {
        value += `${width}% `;
    })
    return value;
}

type IRow = {
    id: number,
    type: string,
    removeRow: any,
    getRowState: any,
    columns: any
};

class Row extends React.Component<IRow, any> {
    constructor(props){
        super(props);
        this.state = {
            columns: this.props.columns,
            nextId: 0,
            update: false,
            columnSetting: {
                width: [],
            }
        }
    }
    

    countWidth = (children) => {
        if(this.state.update){
            const width: Array<number> = [];
            for(let i =0; i<children.length; i++){
                width.push(100/children.length);
            }
            this.setState({
                update: false,
                columnSetting:{
                    width
                }
            })
        }
    }

    removeColumn(id:number){
        const columns:any = [ ...this.state.columns];
        const newColumns = columns.filter(item => item.props.id !== id )
        this.setState({
            update: true,
            columns: newColumns,
        })
    }

    addColumn(){   
        const id = this.state.nextId;
        const columns: Array<object> = [ ...this.state.columns];
        if(columns.length < 4){
            const a:any = <Column key={id} id={id} type="column" removeColumn={this.removeColumn.bind(this)} changeWidth={this.changeWidth} elements={[]}/>;
            columns.push(a);   
                this.setState({
                    columns,
                    nextId: id + 1,
                    update: true,
                })
        } 
    }
    componentDidUpdate(){
        this.countWidth(this.state.columns);
    }

    changeWidth = (value, id) => {
        if(id !== this.state.columns.length-1){
            const width: Array<number> = [...this.state.columnSetting.width]
            width[id] = width[id] + value;
            width[id+1] = width[id+1] - value;
            this.setState({
                columnSetting:{
                    width
                }
            })
        }
       
    }
    getValueToSave =() =>{
        console.log(this.state)
    }
    render(){
        const { type, id, removeRow} = this.props;
        return (
            <RowWrapper className="row" widthArray={this.state.columnSetting.width} >
                <SettingsLinks id={id} type={type} addColumn={this.addColumn.bind(this)} remove={removeRow}/>    
                {this.state.columns}
            </RowWrapper>
        )
    }
}

export default Row;