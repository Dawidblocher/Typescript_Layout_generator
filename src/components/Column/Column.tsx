import React from 'react';
import styled from 'styled-components';
import SettingsLinksColumn from '../SettingsLinks/SettingLinksColumn';

import TitleComponent from './TitleComponent/TitleComponent';

const RowWrapper = styled.div`
    &:hover>aside{
        opacity: 1;
    }
`

type IRow = {
    id: number,
    type: string,
    removeColumn: any
};

class Column extends React.Component<IRow, any> {
    state = {
        elements: [],
        nextId: 0,
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

    render(){
        const { type, id, removeColumn} = this.props;
        return (
            <RowWrapper className="column" >
                <SettingsLinksColumn id={id} type={type} remove={removeColumn} createTitleComponent={this.createTitleComponent}/>
                {/* <Setting>
                   <StyledLink to={{
                        pathname: `/${type}settings/${id}`,
                        addColumn: this.addColumn.bind(this)
                    }}><StyledSettings/></StyledLink> 
                    <DeleteRowBtn onClick={() => removeRow(id)} >X</DeleteRowBtn>
                </Setting> */}
                {this.state.elements}
            </RowWrapper>
        )
    }
}

export default Column;