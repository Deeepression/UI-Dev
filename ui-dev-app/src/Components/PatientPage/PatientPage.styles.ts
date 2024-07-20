import {styled} from "@mui/system";
import {Paper} from "@mui/material";

export const StyledEmptyListMessage = styled('div')`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`;

export const StyledStatusBox = styled('div')`
    display: flex;
    padding-left: 150px;
`;

export const StyledStatusBoxInnerImg = styled('img')`
    padding-left: 10px;
`;

export const StyledUserDataBox = styled('div')`
`;

export const StyledUserPaper = styled(Paper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: black;
`;

