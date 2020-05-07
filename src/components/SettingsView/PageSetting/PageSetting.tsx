import React from 'react';
import SettingButton from '../SettingsComponents/SettingButton';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
`

const PageSetting = ( props) => {
    const { location: {addRow} } = props;
    return (
        <Wrapper >
            <SettingButton clickFn={addRow} title="Add Row" icon="+"/>
        </Wrapper>
    )
}

export default PageSetting;