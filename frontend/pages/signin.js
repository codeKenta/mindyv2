import React from "react";
import { getProviders, signIn, getSession } from "next-auth/client";
import { useRouter } from "next/router";

/*
Had som problem with redirect where the callBackUrl wasn't included someway
https://github.com/nextauthjs/next-auth/issues/591#issuecomment-715992773
*/
function SignIn({ providers }) {
  const router = useRouter();

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, { callbackUrl: router.query.callbackUrl })
            }
            // onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export default SignIn;

// SignIn.getInitialProps = async (context) => {
//   const { req, res } = context;

//   const session = await getSession({ req });

//   if (session && res && session.accessToken) {
//     res.writeHead(302, {
//       Location: "",
//     });

//     res.end();
//     return;
//   }

//   return {
//     session: undefined,
//     providers: await providers(context),
//     // csrfToken: await csrfToken(context) // For e-mail signin
//   };
// };

export async function getServerSideProps(context) {
  const { req, res, query } = context;
  const session = await getSession({ req });

  const { callbackUrl } = query;

  if (session && res && session.accessToken) {
    console.log("HELLO SESSION", session);
    res.writeHead(302, {
      Location: callbackUrl,
    });
    res.end();
    return;
  }

  // if (session && res && session.accessToken) {
  //   console.log("HELLO SESSION", session);
  //   // res.writeHead(302, {
  //   //   Location: "",
  //   // });

  //   // res.end();
  //   // return;
  // } else {
  //   console.log("NO SESSION =! =!=!=!");
  // }

  const providers = await getProviders();
  return {
    props: { providers },
  };
}
