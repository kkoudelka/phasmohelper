import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../src/hooks';

interface IProps {
  readonly?: boolean;
}

const GhostName: React.FC<IProps> = ({ readonly }) => {
  const { mission, changeName } = useAppContext();

  const [gName, setGName] = useState(mission.ghostName);
  const [changeTimeout, setChangeTimeout] = useState<NodeJS.Timeout>(null);

  useEffect(() => {
    if (mission.ghostName !== gName) setGName(mission.ghostName);
  }, [mission.ghostName]);

  const handleChange = (text: string) => {
    setGName(text);

    let t = setTimeout(async () => {
      await changeName(text);
    }, 5000);

    if (changeTimeout) {
      clearTimeout(changeTimeout);
    }
    setChangeTimeout(t);
  };

  return (
    <TextField
      label="Ghost name"
      fullWidth
      value={gName}
      onChange={
        readonly ? null : (event) => handleChange(event.currentTarget.value)
      }
    />
  );
};

export default GhostName;
