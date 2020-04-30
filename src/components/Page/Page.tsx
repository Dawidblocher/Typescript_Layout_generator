import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

// import { Settings } from '@material-ui/icons';

const StyledPage = styled.div`
    position: relative;
`

// const StyledSettingPanel = styled.aside`
//     position: absolute;
//     left:0;
//     top:-25px;
//     height:24px;
//     width: 24px;
//     border: 1px solid red;
// `


type IPage = {
    children: any,
    id: string,
};
const Page: FunctionComponent<IPage> = ( { children }, props ) => {
    

    return (
        <StyledPage className="page"
            id={props.id}
        >
            page
            {children}
        </StyledPage>
    )
}

export default Page;