import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 25%;
`

const FormNumberInput = (props) => {
    const { submitFn } = props 
    console.log(props)
    return(
        <div>
            <h3>Margin:</h3>
            <StyledForm onSubmit={submitFn}>
                <StyledLabel><span>top</span><input type="number" name="top" onChange={submitFn} /></StyledLabel>
                <StyledLabel><span>right</span><input type="number" name="right" onChange={submitFn} /></StyledLabel>
                <StyledLabel><span>bottom</span><input type="number" name="bottom" onChange={submitFn} /></StyledLabel>
                <StyledLabel><span>left</span><input type="number" name="left" onChange={submitFn} /></StyledLabel>
                {/* <input type="submit" value="zapisz"/> */}
            </StyledForm>
        </div>
    )
}


export default FormNumberInput;