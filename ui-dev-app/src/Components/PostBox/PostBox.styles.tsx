import { styled } from '@mui/system'
import { Typography } from '@mui/material'

export const StyledPostMetadata = styled('div')`
    display: flex;
    flex-direction: column;
`;

export const EllipsisText = styled(Typography)({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  display: 'block',
});
