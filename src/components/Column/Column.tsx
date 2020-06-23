import React from 'react';
import styled from 'styled-components';
import SettingsLinksColumn from '../SettingsLinks/SettingLinksColumn';

import TitleComponent from './TitleComponent/TitleComponent';

const RowWrapper = styled.div`
    &:hover>aside{
        opacity: 1;
    }
`

const WidthControl = styled.div`
    width:15px;
    background: #dcdcdc;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    cursor: col-resize;
`;

type IRow = {
    id: number,
    type: string,
    removeColumn: any,
    changeWidth: any,
    elements: any,
};

class Column extends React.Component<IRow, any> {
    state = {
        onMove: false,
        elements: this.props.elements,
        nextId: 0,
        width: 100,
    }

    removelement(id:number){
        const columns:any = [ ...this.state.elements];
        const newElements = columns.filter(item => item.props.id !== id )
        this.setState({
            columns: newElements,
        })
    }

    createTitleComponent = () => {
        const id = this.state.nextId;
        const elements: Array<object> = [ ...this.state.elements];
        const a:any = <TitleComponent  key={id} id={id} type="title" removeColumn={this.removelement.bind(this)}/>;
        elements.push(a);   
         this.setState({
            elements,
             nextId: id + 1
        })
    }

    changeWidth(value){
        this.setState({
            width: this.state.width + value,
        })
    }
    
    handleMoveMouse(e){
        if(this.state.onMove)
            this.props.changeWidth(e.movementX * .3, this.props.id);
    }

    handleMosueDown = (e) => {
        
        this.setState({
            onMove: true,
        })
        
    }

    handleMouseUp = () => {
        this.setState({
            onMove: false,
        })
    }


    render(){
        const { type, id, removeColumn} = this.props;
        document.addEventListener("mouseup", this.handleMouseUp)
        return (
            <RowWrapper  className="column" style={{
                width: this.state.width + "%",
            }}>
                <SettingsLinksColumn id={id} type={type} remove={removeColumn} createTitleComponent={this.createTitleComponent}/>               
                {this.state.elements}
                <WidthControl className="width-control" onMouseDown={this.handleMosueDown}  onMouseMove={(e) => this.handleMoveMouse(e)}/>
            </RowWrapper>
        )
    }
}

export default Column;