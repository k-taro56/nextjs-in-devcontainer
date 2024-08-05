import { auth, signIn } from "@/auth"

export default async function Home() {
  const session = await auth();
  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Signed in as {session.user?.name}
      </div>
    );
  }

  return (
    <form className="min-h-screen flex items-center justify-center"
          action={async () => {
      'use server'
      await signIn('github')
    }}>
      <button type='submit'>Sign in with GitHub</button>
    </form>
  );
}