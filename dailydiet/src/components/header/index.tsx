import { Image } from "react-native";
import { Container, Profile } from "./styles";

import logo from '@assets/logo.png';

export default function Header() {
  return (
    <Container>
        <Image source={logo} />
        <Profile source={{uri:"https://avatars.githubusercontent.com/u/20859616?v=4"}} />
    </Container>
  );
}