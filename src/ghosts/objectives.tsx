import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import PersonIcon from '@material-ui/icons/Person';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

export type ObjectiveType =
  | 'candle'
  | 'salt'
  | 'motion'
  | 'photo'
  | 'emf'
  | 'event'
  | 'hunt'
  | 'parabolic'
  | 'crucifix'
  | 'sanity'
  | 'smudge-hunt'
  | 'smudge'
  | 'ghost-type';

export interface IObjective {
  type: ObjectiveType;
  name: string;
  icon?: JSX.Element;
}

export const objectives: IObjective[] = [
  {
    type: 'candle',
    name: 'Get a Ghost to blow out a Candle',
    icon: <FireplaceIcon />,
  },
  {
    type: 'salt',
    name: 'Get a Ghost to walk through Salt',
    icon: <DirectionsWalkIcon />,
  },
  {
    type: 'parabolic',
    name: 'Detect Ghost footsteps with a Parabolic Microphone during a Hunt',
    icon: <SettingsVoiceIcon />,
  },
  {
    type: 'motion',
    name: 'Detect a Ghosts presence with a Motion Sensor',
    icon: <SurroundSoundIcon />,
  },
  {
    type: 'hunt',
    name: 'Escape the Ghost during a Hunt with no deaths',
    icon: <DirectionsRunIcon />,
  },
  {
    type: 'photo',
    name: 'Capture a photo of the Ghost',
    icon: <PhotoCameraIcon />,
  },
  {
    type: 'emf',
    name: 'Find evidence of the paranormal with an EMF Reader',
    icon: <SettingsRemoteIcon />,
  },
  {
    type: 'event',
    name: 'Have a member of your team witness a Ghost Event',
    icon: <RecordVoiceOverIcon />,
  },
  {
    type: 'crucifix',
    name: 'Prevent the Ghost from hunting with a Crucifix',
    icon: <AnnouncementIcon />,
  },
  {
    type: 'sanity',
    name: 'Get an average Sanity below 25%',
    icon: <SentimentDissatisfiedIcon />,
  },
  {
    type: 'smudge',
    name: 'Cleanse the area near the Ghost using Smudge Sticks',
    icon: <SmokingRoomsIcon />,
  },
  {
    type: 'smudge-hunt',
    name: 'Repel the Ghost during a hunt with a Smudge Stick',
    icon: (
      <>
        <DirectionsRunIcon />
        <SmokingRoomsIcon />
      </>
    ),
  },
  {
    type: 'ghost-type',
    name: 'Discover what type of Ghost you are dealing with',
    icon: <PersonIcon />,
  },
];
