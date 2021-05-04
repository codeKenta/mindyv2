import Layout from "@components/Layout/Layout";

console.log(Layout);

import { useSession, signIn, signOut } from "next-auth/client";

export default function Component() {
  const [session, loading] = useSession();

  return (
    <Layout>
      {session ? (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </Layout>
  );
}
