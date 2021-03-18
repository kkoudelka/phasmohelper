import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const SpeechRecogniser: React.FC = () => {
  const [t, setT] = useState<string[]>([]);
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
      if (finalTranscript) setT([finalTranscript, ...t]);
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
      <Typography variant="h6">Speech recognition</Typography>
      <Grid container direction="row" justify="space-around">
        <Grid item>
          <Button onClick={handleToggle} color="primary" variant="contained">
            {enabled ? 'Turn off' : 'Turn on'}
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="outlined"
            size="small"
            onClick={() => resetTranscript()}
          >
            Reset
          </Button>
        </Grid>
      </Grid>

      <Typography variant="caption">{transcript}</Typography>
      <ul>
        {t.slice(0, 2).map((x, key) => (
          <li key={key}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpeechRecogniser;
