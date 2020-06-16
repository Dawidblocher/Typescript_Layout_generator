import React from 'react';
import SettingButton from '../SettingsComponents/SettingButton';
import styled from 'styled-components';

import SettingTextarea from '../SettingsComponents/SettingTextarea';
import FormNumberInput from '../../FormNumberInput/FormNumberInput';
const Wrapper = styled.div`
    padding: 10px;
`

const TitleSetting = ( props) => {
    const { location: {handleTextInput, title, setValue, handleMarginStyle } } = props;
    
    return (
        <Wrapper >
            <SettingTextarea clickFn={handleTextInput} title="Create Title" icon="+" text={title} setValue={setValue}/>
            <FormNumberInput submitFn={handleMarginStyle} />
        </Wrapper>
    )
}

export default TitleSetting;