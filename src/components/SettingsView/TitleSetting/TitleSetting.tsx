import React from 'react';
import SettingButton from '../SettingsComponents/SettingButton';
import styled from 'styled-components';

import SettingTextarea from '../SettingsComponents/SettingTextarea';

const Wrapper = styled.div`
    padding: 10px;
`

const TitleSetting = ( props) => {
    const { location: {handleTextInput, title, setValue} } = props;
    return (
        <Wrapper >
            <SettingTextarea clickFn={handleTextInput} title="Create Title" icon="+" text={title} setValue={setValue}/>
        </Wrapper>
    )
}

export default TitleSetting;