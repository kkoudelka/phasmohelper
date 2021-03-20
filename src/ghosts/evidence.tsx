import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import ForumIcon from '@material-ui/icons/Forum';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

export type EvidenceType =
  | 'writing'
  | 'spiritbox'
  | 'orbs'
  | 'freezing'
  | 'emf'
  | 'fingerprints';

export interface IEvidenceCard {
  type: EvidenceType;
  name: string;
  description?: string;
  icon: JSX.Element;
}

export const evidenceList: IEvidenceCard[] = [
  { type: 'emf', name: 'EMF level 5', icon: <SettingsRemoteIcon /> },
  { type: 'fingerprints', name: 'Fingerprints', icon: <FingerprintIcon /> },
  { type: 'freezing', name: 'Freezing temperatures', icon: <AcUnitIcon /> },
  { type: 'orbs', name: 'Ghost orbs', icon: <CameraEnhanceIcon /> },
  { type: 'spiritbox', name: 'Spirit box', icon: <ForumIcon /> },
  { type: 'writing', name: 'Ghost writing', icon: <MenuBookIcon /> },
];
