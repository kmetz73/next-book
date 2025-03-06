'use client';

import { Session } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from './ui/avatar';
import { getInitials } from '@/lib/utils';

const AvatarFallBackTest = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <>
      <Link href="/my-profile">
        <Avatar>
          <AvatarFallback className="bg-amber-50">
            {getInitials(session?.user?.name || 'IN')}
          </AvatarFallback>
        </Avatar>
      </Link>
    </>
  );
};
export default AvatarFallBackTest;
