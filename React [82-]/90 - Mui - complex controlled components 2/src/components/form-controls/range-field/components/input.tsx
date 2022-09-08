import * as React from 'react';

import {
  FilledInput,
  FilledInputProps,
} from '@mui/material';

type InputProps = Omit<FilledInputProps, 'size'>;

const Input: React.FC<InputProps> = ({ sx = [], ...props }) => (
  <FilledInput
    size="small"
    sx={[
      {
        flexGrow: 1,
        input: { pt: 1 },
      },
      ...(sx instanceof Array ? sx : [sx]),
    ]}
    {...props}
  />
);

export default Input;
