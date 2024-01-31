import { Amplify } from 'aws-amplify';

import { Authenticator, withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { Container } from 'react-bootstrap';

Amplify.configure(awsExports);

function App() {
  return (
    <Container className='my-5'>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <Heading>Hello {user.username}</Heading>
            <Button onClick={signOut}>Sign out</Button>
          </main>
        )}
      </Authenticator>
    </Container>
      
  );
}

export default withAuthenticator(App);
