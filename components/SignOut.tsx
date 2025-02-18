'use client';
import { useRouter } from 'next/navigation';

export default function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signOut');
  };

  return <button onClick={handleClick}>Logout</button>;
}
