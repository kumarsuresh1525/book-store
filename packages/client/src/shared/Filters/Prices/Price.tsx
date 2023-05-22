import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = (value: number): string => `₹${value}`;

const MIN_PRICE = 0;
const MAX_PRICE = 500;

interface Props {
    setPriceValue: (args: number[]) => void;
}

const Price = ({ setPriceValue }: Props): React.ReactElement => {
  const [value, setValue] = React.useState<number[]>([MIN_PRICE, MAX_PRICE]);
  const handleChange = (_event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
    setPriceValue(newValue as number[]);
  };
  return (
    <Box>
      <Typography variant="subtitle1" marginTop="10px" fontWeight="bold">
        Price
      </Typography>
      <Box padding="10px">
        <Slider
          getAriaLabel={(): string => 'Price'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          defaultValue={[MIN_PRICE, MAX_PRICE]}
          max={MAX_PRICE}
          marks={[
            { value: MIN_PRICE, label: `₹${MIN_PRICE}` },
            { value: MAX_PRICE, label: `₹${MAX_PRICE}` },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Price;
