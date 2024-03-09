import { Container, ContainerInfo } from "./styles";
import NavigationDetail from "@components/navigationDetail";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function Statistics() {
  
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <NavigationDetail onBack={handleBack} showBackButton={true} title="90,86%" />

      <ContainerInfo>
        <Text>Teste</Text>
      </ContainerInfo>
    </Container>
  );
}