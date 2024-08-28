import { styled } from '@mui/system'
import { Box, Paper } from '@mui/material'

export const StyledEmptyListMessage = styled('div')`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`

export const StyledStatusBox = styled(Box)`
    width: 100%;
    height: 200px; /* Ensure a fixed height for the chart */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledStatusBoxInnerImg = styled('img')`
    padding-left: 10px;
`

export const StyledUserDataBox = styled('div')`
    display: flex;
    flex-direction: column;
    width: 450px;
`

export const StyledUserPaper = styled(Paper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: black;
`

export const StyledButtonsWrapper = styled('div')`
    display: flex;
    gap: 10px;
`
