import Image from 'next/image';
import VTubeHome from './pages/vTubeHome';

export default function Home() {
  console.log('home page');
  return (
    <div>
      <VTubeHome />
    </div>
  );
}
