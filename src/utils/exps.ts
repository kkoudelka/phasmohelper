export interface IPublicProps {
  gamePhase: GamePhase;
  huntRemainingTime: number;
}

export type GamePhase = 'Investigating' | 'Hunt';

const def: IPublicProps = {
  gamePhase: 'Investigating',
  huntRemainingTime: 0,
};

export const updatePublicProps = (game: IPublicProps) => {
  localStorage.setItem('game', JSON.stringify(game));
};

export const getPublicProps = (): IPublicProps => {
  const res = JSON.parse(localStorage.getItem('game'));
  if (!res) {
    updatePublicProps(def);
    return def;
  }
  return res as IPublicProps;
};
