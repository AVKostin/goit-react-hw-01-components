import Container from './components/Container/Container';
import Profile from './components/social-profile/Profile';

export default function App() {
  return (
    <Container>
      <Profile type="small" classNames="big red" styles={{ color: '#fff' }} />
      {/* <Profile type="medium" />
      <Profile type="large" /> */}
    </Container>
  );
}
