import Layout from "@components/Layout";
import EnterWithAccount from "@components/EnterWithAccount";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Component() {
  const [session, loading] = useSession();

  return (
    <Layout>
      <EnterWithAccount />
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

      <p>HEllo</p>
    </Layout>
  );
}
