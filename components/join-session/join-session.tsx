import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { firestore } from '../../src/fbase/fbase';
import { useRouter } from 'next/router';

const JoinSession: React.FC = () => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const [code, setCode] = useState('');

  const [sessionNotFound, setSessionNotFound] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCodeChange = (s: string) => {
    if (s.length > 5) return;
    setCode(s);
    setSessionNotFound(false);
  };

  const handleJoin = async () => {
    const res = await firestore
      .collection('sessions')
      .where('sessionID', '==', code)
      .limit(1)
      .get();
    if (res.docs[0]?.exists) {
      await router.push(`/session/${code}`);
      return;
    }
    setSessionNotFound(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Join session
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Join multiplayer session
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can join other person's session by entering code below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="sessionId"
            label="Session code"
            error={sessionNotFound}
            helperText={sessionNotFound ? 'Session code not valid' : ''}
            fullWidth
            value={code}
            onKeyPress={(event) => {
              if (event.key !== 'Enter') return;
              handleJoin();
            }}
            onChange={(event) => handleCodeChange(event.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleJoin} color="primary">
            Join session
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JoinSession;
