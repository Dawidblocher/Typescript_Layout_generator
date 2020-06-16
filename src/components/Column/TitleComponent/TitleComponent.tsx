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
    margin-top: ${({marginTop}) => marginTop ? marginTop : '21px'};
    margin-left: ${({marginLeft}) => marginLeft ? marginLeft : '0px'};
    margin-right: ${({marginRight}) => marginRight ? marginRight : '0px'};
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '21px'};
    min-height: 43px;
    word-break: break-word;
    padding: 0 15px;
`

class TitleComponent extends React.Component<IRow, any> {
    state = {
        text: '',
        style: {
            marginTop: '21px',
            marginRight: '0px',
            marginBottom: '21px',
            marginLeft:'0px'
        }
    }

    handleTextInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleMarginStyle = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        const style = this.state.style;
        const inputName = e.target.name
        if(inputName === "top"){
            style.marginTop = e.target.value + 'px';
            this.setState({
                style
            })
        }
        if(inputName === "left"){
            style.marginLeft = e.target.value + 'px';
            this.setState({
                style
            })
        }
        if(inputName === "right"){
            style.marginRight = e.target.value + 'px';
            this.setState({
                style
            })
        }
        if(inputName === "bottom"){
            style.marginBottom = e.target.value + 'px';
            this.setState({
                style
            })
        }
    }

    setValue = (e) =>{
        e.target.value = this.state.text;
    }

    render(){
        const { type, id, removeColumn} = this.props;

        return (
            <RowWrapper className="title">
                <SettingsLinksTitle id={id} type={type} remove={removeColumn} handleTextInput={(e) =>this.handleTextInput(e)} title={this.state.text} setValue={(e) => this.setValue(e)} handleMarginStyle={(e) => this.handleMarginStyle(e)}/>
                <StyledH1 style={this.state.style}>{this.state.text}</StyledH1>
            </RowWrapper>
        )
    }
}

export default TitleComponent;