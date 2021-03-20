import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useAppContext } from '../../src/hooks';
import styles from '../../styles/SessionCode.module.css';
import useClipboard from 'react-use-clipboard';
import Tooltip from '@material-ui/core/Tooltip';

const SessionCode: React.FC = () => {
  const { sessionDetails } = useAppContext();
  const [
    isCopied,
    setCopied,
  ] = useClipboard(
    `https://phasmophobia-cheatsheet.vercel.app/session/${sessionDetails?.sessionFriendlyId}`,
    { successDuration: 5000 },
  );
  return (
    <>
      <a>
        <Typography variant="h6" onClick={setCopied}>
          Share this code with others:{' '}
          <Tooltip open={isCopied} title="Link copied to clipboard!">
            <span className={styles.code}>
              {sessionDetails?.sessionFriendlyId}
            </span>
          </Tooltip>
        </Typography>
      </a>
    </>
  );
};

export default SessionCode;
