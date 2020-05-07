import React from 'react';
import SettingButton from '../SettingsComponents/SettingButton';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
`

const ColumnSetting = ( props) => {
    const { location: {createTitleComponent} } = props;
    return (
        <Wrapper >
            <SettingButton clickFn={createTitleComponent} title="Create Title" icon="+"/>
        </Wrapper>
    )
}

export default ColumnSetting;