import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { IObjective } from '../../src/ghosts/objectives';

interface IProps {
  objective: IObjective;
}

const ObjectiveItem: React.FC<IProps> = ({ objective }) => {
  const { icon, name } = objective;
  return (
    <ListItem button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default ObjectiveItem;
