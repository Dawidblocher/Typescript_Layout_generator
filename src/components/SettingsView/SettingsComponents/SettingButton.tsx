import React from 'react';
import styled from 'styled-components';

const ButtonSetting = styled.button`
    width: 100%;
    padding: 10px;
    border: 0;
    background: #fff;
    cursor: pointer;
    &:hover{
        
    }
`

const SettingButton = ( props) => {
    const { clickFn, title, icon } = props;
    return (
        <ButtonSetting onClick={clickFn}>
            {icon}
            <p>{title}</p>
        </ButtonSetting>
    )
}

export default SettingButton;