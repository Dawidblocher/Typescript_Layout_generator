import React from 'react';
import SettingButton from '../SettingsComponents/SettingButton';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
`

const RowSetting = ( props) => {
    const { location: {addColumn} } = props;
    return (
        <Wrapper >
            <SettingButton clickFn={addColumn} title="Add Column" icon="+"/>
        </Wrapper>
    )
}

export default RowSetting;