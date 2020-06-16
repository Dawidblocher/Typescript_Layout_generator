import React from 'react';
import styled from 'styled-components';
import SettingsLinksTitle from '../../SettingsLinks/SettingLinksTitle';

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

const StyledH1 = styled.h1`
    margin: ${({margin}) => margin ? margin : '21px 0px 21px 0px'};
    min-height: 43px;
    word-break: break-word;
    padding: 0 15px;
`

class TextComponent extends React.Component<IRow, any> {
    state = {
        text: '',
        style: {
            margin: '21px 0px 21px 0px',
        }
    }

    handleTextInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    setValue = (e) =>{
        e.target.value = this.state.text;
    }

    render(){
        const { type, id, removeColumn} = this.props;

        return (
            <RowWrapper className="title">
                <SettingsLinksTitle id={id} type={type} remove={removeColumn} handleTextInput={(e) =>this.handleTextInput(e)} title={this.state.text} setValue={(e) => this.setValue(e)}/>
                <StyledH1 style={this.state.style}>{this.state.text}</StyledH1>
            </RowWrapper>
        )
    }
}

export default TextComponent;