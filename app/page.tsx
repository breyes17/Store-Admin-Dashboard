import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className='p-4'>
        <UserButton afterSignOutUrl="/"/>
      </nav>
      <Button>Testing</Button>
    </main>
  );
}
