import ListItemIcon from '@material-ui/core/ListItemIcon';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useAppContext } from '../../src/hooks';
import { getTips } from '../../src/utils/evidence-helper';
import { Card } from '../card';

export interface ITipCard {
  text: string;
  icon?: JSX.Element;
}

const TipBoard: React.FC = () => {
  const { mission } = useAppContext();
  const { evidence } = mission;

  const tips = getTips(evidence);

  return (
    <>
      <Fade in={tips.length > 0} unmountOnExit>
        <Card>
          <Typography variant="h6">Tips</Typography>
          <List component="nav">
            {tips.map((tip, key) => (
              <ListItem button key={`tip-${key}`}>
                <ListItemIcon>{tip.icon}</ListItemIcon>
                <ListItemText primary={tip.text} />
              </ListItem>
            ))}
          </List>
        </Card>
      </Fade>
    </>
  );
};

export default TipBoard;
