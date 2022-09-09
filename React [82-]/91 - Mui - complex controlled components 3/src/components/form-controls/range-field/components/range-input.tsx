import * as React from 'react';

import {
  FilledInput,
  FilledInputProps,
} from '@mui/material';

type RangeInputProps = Omit<FilledInputProps, 'size' | 'type' | 'multiline' | 'onChange' | 'value'> & {
  value: number,
  onChange: (e: React.FocusEvent<HTMLInputElement>, val: number) => void,
};

const RangeInput: React.FC<RangeInputProps> = ({
  value,
  onChange,
  sx = [],
  ...props
}) => {
  const [privateValue, setPrivateValue] = React.useState(value);

  React.useEffect(() => setPrivateValue(value), [value]);

  return (
    <FilledInput
      size="small"
      type="number"
      multiline={false}
      sx={[
        {
          flexGrow: 1,
          '.MuiInputBase-input': {
            textAlign: 'center',
            pt: 1,
          },
        },
        ...(sx instanceof Array ? sx : [sx]),
      ]}
      value={privateValue}
      onChange={(e) => setPrivateValue(Number(e.target.value))}
      onBlur={(e) => onChange(e as React.FocusEvent<HTMLInputElement>, Number(e.target.value))}
      {...props}
    />
  );
};

export default RangeInput;
