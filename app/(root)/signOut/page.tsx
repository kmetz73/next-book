import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export default function SignOutPage() {
  return (
    <div className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl">Are you sure you want to Log out?</h1>
      <form
        action={async (formData) => {
          'use server';
          await signOut();
        }}
      >
        <Button type="submit" className="mt-4 items-center">
          Logout
        </Button>
      </form>
    </div>
  );
}
