import axios from 'axios';
import { EvidenceType } from '../ghosts/evidence';
import { ObjectiveType } from '../ghosts/objectives';

interface IWitResponse {
  text: string;
  intents: IIntent[];
  entities: {
    'evidence:evidence'?: IEntity<EvidenceType>[];
    'name:name'?: IEntity<string>[];
    'objective:objective'?: IEntity<ObjectiveType>[];
  };
}

interface IIntent {
  id: string;
  name: IntentName;
  confidence: number;
}

type IntentName =
  | 'change_name'
  | 'new_evidence'
  | 'remove_evidence'
  | 'complete_objective'
  | 'remove_objective'
  | 'add_objective';

interface IEntity<T> {
  id: string;
  name: string;
  body: string;
  value: T;
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
