import axios from 'axios';
import { EvidenceType } from '../ghosts/evidence';

interface IWitResponse {
  text: string;
  intents: IIntent[];
  entities: {
    'evidence:evidence'?: IEntity[];
    'name:name'?: IEntity[];
  };
}

interface IIntent {
  id: string;
  name: IntentName;
  confidence: number;
}

type IntentName = 'change_name' | 'new_evidence' | 'remove_evidence';

interface IEntity {
  id: string;
  name: string;
  body: string;
  value: EvidenceType;
}

const resolveText = async (text: string): Promise<IWitResponse> => {
  if (!text || text.length < 5) return;

  const res = await axios.get<IWitResponse>(
    `https://api.wit.ai/message?q=${text}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_WIT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    },
  );

  if (res.status !== 200 || !res.data) return;

  const data = res.data;

  return data;
};

export default resolveText;
