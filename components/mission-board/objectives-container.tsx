import List from '@material-ui/core/List';
import React from 'react';
import { ObjectiveItem } from '.';
import { useAppContext } from '../../src/hooks';
import { getObjective } from '../../src/utils/evidence-helper';

const ObjectiveContainer: React.FC = () => {
  const { mission } = useAppContext();
  const { objectives } = mission;

  const objs = objectives.map((x) => getObjective(x)).filter((x) => x !== null);
  return (
    <>
      <List component="nav">
        {objs.map((objective, key) => (
          <ObjectiveItem key={`objective-${key}`} objective={objective} />
        ))}
      </List>
    </>
  );
};

export default ObjectiveContainer;
