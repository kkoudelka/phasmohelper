import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';

const SpeechRecogniser: React.FC = () => {
  const [final, setFinal] = useState<string>('');
  const [enabled, setEnabled] = useState(false);

  const {
    finalTranscript,
    transcript,
    resetTranscript,
    listening,
  } = useSpeechRecognition();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <>Browser doesn't support speech recognition</>;
  }

  useEffect(() => {
    if (
      !listening &&
      SpeechRecognition.browserSupportsSpeechRecognition() &&
      enabled
    ) {
      if (finalTranscript) setFinal(finalTranscript);
      SpeechRecognition.startListening();
    }
  }, [listening]);

  const handleToggle = () => {
    if (enabled) SpeechRecognition.stopListening();
    else SpeechRecognition.startListening();

    setEnabled(!enabled);
  };

  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid container item direction="row" justify="space-around">
          <Grid item>
            <Typography variant="h6">Speech recognition</Typography>
          </Grid>
          <Grid item>
            <Button onClick={handleToggle} color="primary" variant="contained">
              {!enabled ? <MicOffOutlinedIcon /> : <MicNoneOutlinedIcon />}
              {!enabled ? 'Disabled' : 'Enabled'}
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="caption">{transcript}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">{final}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SpeechRecogniser;
