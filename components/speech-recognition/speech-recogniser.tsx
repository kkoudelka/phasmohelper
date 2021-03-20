import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import resolveText from '../../src/wit/client';
import { useAppContext } from '../../src/hooks';
import { isEvidenceAvailable } from '../../src/utils/evidence-helper';

const SpeechRecogniser: React.FC = () => {
  const [final, setFinal] = useState<string>(
    'You can say "I have found Freezing temperatures"',
  );
  const [enabled, setEnabled] = useState(false);

  const {
    currentEvidence,
    setCurrentEvidence,
    changeEvidence,
  } = useAppContext();

  const { finalTranscript, transcript, listening } = useSpeechRecognition();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <>Browser doesn't support speech recognition</>;
  }

  const resolveSentence = async (text: string): Promise<void> => {
    if (!text || text.length < 5) return;

    const res = await resolveText(text);
    if (res.intents.length < 1) {
      setFinal('Not understood');
      return;
    }
    const action = res.intents[0].name;

    if (action === 'change_name') {
      return;
    }
    const evidenceEntity = res.entities['evidence:evidence'];
    if (!evidenceEntity || evidenceEntity.length < 1) return;

    const evidence = evidenceEntity[0].value;

    if (action === 'new_evidence') {
      const available = isEvidenceAvailable(evidence, currentEvidence);
      if (!available) return;
      await changeEvidence({ ...currentEvidence, [evidence]: true });
    } else if (action === 'remove_evidence') {
      const canRemove = currentEvidence[evidence];
      if (!canRemove) return;
      await changeEvidence({ ...currentEvidence, [evidence]: false });
    }
  };

  useEffect(() => {
    if (
      !listening &&
      SpeechRecognition.browserSupportsSpeechRecognition() &&
      enabled
    ) {
      if (finalTranscript) setFinal(finalTranscript);
      SpeechRecognition.startListening({ language: 'en' });
    }
  }, [listening]);

  useEffect(() => {
    if (finalTranscript && finalTranscript !== final) {
      resolveSentence(finalTranscript);
    }
  }, [finalTranscript]);

  const handleToggle = () => {
    if (enabled) SpeechRecognition.stopListening();
    else SpeechRecognition.startListening({ language: 'en' });

    setEnabled(!enabled);
  };

  return (
    <div>
      <Grid container direction="column" alignItems="center" spacing={1}>
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
