import React from 'react';
import { RadialChart } from 'react-vis';

const ChartComp: React.FC = () => {
  return (
    <div>
      <RadialChart
        animation
        showLabels
        height={200}
        width={200}
        data={[
          {
            angle: 3,
            label: 'test2test',
          },
          {
            angle: 2,
            label: 'I am a lable hohoh',
          },
        ]}
      />
    </div>
  );
};

export default ChartComp;
