import dynamic from 'next/dynamic';

const Speech = dynamic<{}>(() => import('./speech-recogniser'), { ssr: false });

export default Speech;
