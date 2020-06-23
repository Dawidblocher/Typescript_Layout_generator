import React from 'react';
import styled from 'styled-components';

const TextareaWrapper = styled.div`
    width: 100%;
    padding: 10px;
    border: 0;
    background: #fff;
    cursor: pointer;
    &:hover{
        
    }
`

const SettingTextarea = ( props) => {
    const { clickFn, title, setValue } = props;
    return (
        <TextareaWrapper>
            <p>{title}</p>
            <textarea onChange={clickFn} onClick={setValue}></textarea>
        </TextareaWrapper>
    )
}

export default SettingTextarea;