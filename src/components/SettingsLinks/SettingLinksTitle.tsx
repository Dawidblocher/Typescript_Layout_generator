import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Settings, Clear } from '@material-ui/icons';


const StyledLink = styled(Link)`
    color: #ccc;
`;
const StyledSettings = styled(Settings)`
    width: 20px;
    height: 20px;
    fill: #ccc;
`;
const Setting = styled.aside`
    position: absolute;
    top: -31px;
    left: 52px;
    border: 2px dotted #cccccc;
    border-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: .2s opacity;
    background: #fff;
`
const DeleteRowBtn = styled.button`
    border: 0;
    background: 0;
    padding: 0;
    color: #ccc;
    cursor: pointer;
    outline: none;
`;


const SettingsLinks = ( props) => {
    const { type, id, remove, handleTextInput, title, setValue } = props;

    const ColumnSettings = {
        pathname: `/${type}settings/${id}`,
        handleTextInput: handleTextInput,
        title: title,
        setValue: setValue
    }

    return (
        <Setting>
            <StyledLink to={ColumnSettings}><StyledSettings/></StyledLink> 
            <DeleteRowBtn onClick={() => remove(id)}><Clear /></DeleteRowBtn>
        </Setting>
    )
}

export default SettingsLinks;