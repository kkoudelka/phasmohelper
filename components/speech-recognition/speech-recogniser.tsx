import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const SpeechRecogniser: React.FC = () => {
  const [t, setT] = useState<string[]>([]);
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
    if (!listening && SpeechRecognition.browserSupportsSpeechRecognition()) {
      if (finalTranscript) setT([finalTranscript, ...t]);
      SpeechRecognition.startListening();
    }
  }, [listening]);

  return (
    <div>
      <button onClick={() => SpeechRecognition.startListening()}>Start</button>
      <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
      <button onClick={() => resetTranscript()}>Reset</button>
      <p>{transcript}</p>
      <ul>
        {t.map((x, key) => (
          <li key={key}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpeechRecogniser;
