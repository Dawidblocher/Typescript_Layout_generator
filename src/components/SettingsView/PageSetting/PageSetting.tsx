import React from 'react';
import SettingButton from '../SettingsComponents/SettingButton';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
`

const PageSetting = ( props) => {
    const { location: {addRow, saveTemplate, loadTemplate} } = props;
    return (
        <Wrapper >
            <SettingButton clickFn={addRow} title="Add Row" icon="+"/>
            <button onClick={saveTemplate}>zapisz szablon</button>
            <button onClick={loadTemplate}>Wczytaj szablon</button>
        </Wrapper>
    )
}

export default PageSetting;