import { Amplify, Auth, withSSRContext } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "../src/aws-config";

Amplify.Logger.LOG_LEVEL = "DEBUG";

Amplify.configure(awsconfig);

export default function Home({ response }) {
  return (
    <div>
      <Authenticator>
        <button type="button" onClick={() => Auth.signOut()}>
          Sign out
        </button>
        <code>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </code>
      </Authenticator>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });

  const apiName = "apiName";
  const path = "items";
  const myInit = {
    headers: {
      Authorization: `Bearer ${(await SSR.Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  };

  const response = await SSR.API.get(apiName, path, myInit);

  return {
    props: {
      response,
    },
  };
}
