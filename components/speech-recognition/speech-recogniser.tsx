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
import { ObjectiveType } from '../../src/ghosts/objectives';
import { getRandomFromArray } from '../../src/utils/utils';

const thingsYouCanSay = [
  'I have found Freezing temperatures',
  'There is EMF level 5',
  'There are ghost orbs',
  'We have spirit box',
  'Ghost responded on spirit box',
  'Ghost did not respond',
  "The ghost's name is Thomas Johnson",
  'Ghost did not write into the book',
  'We need to use the Crucifix',
  'We need to prevent a hunt with Crucifix',
  'There are Freezing temps',
  "We don't need to use the Salt",
];

const SpeechRecogniser: React.FC = () => {
  const [final, setFinal] = useState<string>(
    `You can say "${getRandomFromArray<string>(thingsYouCanSay)}"`,
  );
  const [enabled, setEnabled] = useState(false);

  const {
    changeEvidence,
    mission,
    changeName,
    changeObjectives,
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

    if (action === 'add_objective' || action === 'remove_objective') {
      const objectiveEntity = res.entities['objective:objective'];
      if (!objectiveEntity || !objectiveEntity.length) return;

      const objective = objectiveEntity[0].value;

      let objectives: ObjectiveType[] = [];

      if (action === 'add_objective') {
        if (mission.objectives.includes(objective)) return;
        objectives = [...mission.objectives, objective];
      }

      if (action === 'remove_objective') {
        objectives = mission.objectives.filter((x) => x !== objective);
      }
      await changeObjectives(objectives);
      return;
    }
    if (action === 'change_name') {
      const nameEntity = res.entities['name:name'];
      if (!nameEntity || !nameEntity.length) return;

      const name = nameEntity[0].value;
      await changeName(name);
      return;
    }
    const evidenceEntity = res.entities['evidence:evidence'];
    if (!evidenceEntity || evidenceEntity.length < 1) return;

    const evidence = evidenceEntity[0].value;

    if (action === 'new_evidence') {
      const available = isEvidenceAvailable(evidence, mission.evidence);
      if (!available) return;
      await changeEvidence(evidence);
    } else if (action === 'remove_evidence') {
      const canRemove = mission.evidence.includes(evidence);
      if (!canRemove) return;
      await changeEvidence(evidence);
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
