export interface IPublicProps {
  gamePhase: GamePhase;
  huntRemainingTime: number;
}

export type GamePhase = 'Investigating' | 'Hunt';
