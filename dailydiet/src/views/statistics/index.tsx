import { GetAll } from "@data/snack/getAll";
import { 
    CardSnack, 
    Container, 
    ContainerCard, 
    ContainerCardSnack, 
    ContainerInfo, 
    ContainerTitle, 
    TextHeader, 
    TextSubHeader, 
    Title } from "./styles";
import NavigationDetail from "@components/navigationDetail";
import { SnackGroup } from "@models/snackGroup";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { PERCENTAGE_SNACKS_IN_DIET } from "@data/data.config";
import { GetSnacksInDietSequence, GetSnacksIsDietOrNot } from "@utils/getStatistcs";

export default function Statistics() {

  const [snacks, setSnacks] = useState<SnackGroup[] | undefined>([]);
  const [snacksDietPercentage, setSnacksDietPercentage] = useState(0);
  const [snacksSequence, setSnacksSequence] = useState(0);
  const [snacksInDiet,setSnacksInDiet] = useState(0);
  const [snacksOutDiet,setSnacksOutDiet] = useState(0);
  
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }

  async function loadSnacks(){
    const snacks = await GetAll();
    setSnacks(snacks);

    if(!snacks || snacks.length === 0) return;

    const snackInDietSequence = await GetSnacksInDietSequence(snacks);
    setSnacksSequence(snackInDietSequence);

    const snacksInDietTotal = await GetSnacksIsDietOrNot({isDiet: true, snacks});
    setSnacksInDiet(snacksInDietTotal);

    const snacksOutDietTotal = await GetSnacksIsDietOrNot({isDiet: false, snacks});
    setSnacksOutDiet(snacksOutDietTotal);

    setSnacksDietPercentage(Math.floor((snacksInDietTotal / (snacksInDietTotal + snacksOutDietTotal)) * 100));
    
  }

  useEffect(() => {
    loadSnacks();
  }, []);

  return (
    <Container>
      <NavigationDetail inAveral={snacksDietPercentage > PERCENTAGE_SNACKS_IN_DIET ? true : false} onBack={handleBack} showBackButton={true} title={`${snacksDietPercentage}%`} />

      <ContainerInfo>
        <ContainerTitle>
          <Title>Estatisticas gerais</Title>
        </ContainerTitle>
          

        <ContainerCard>
          <TextHeader>{snacksSequence}</TextHeader>
          <TextSubHeader>melhor sequencia de pratos dentro da dieta</TextSubHeader>
        </ContainerCard>

        <ContainerCard>
          <TextHeader>{snacksInDiet + snacksOutDiet}</TextHeader>
          <TextSubHeader>refeicoes registradas</TextSubHeader>
        </ContainerCard>

        <ContainerCardSnack>
          <CardSnack isDiet={true}>
            <TextHeader>{snacksInDiet}</TextHeader>
            <TextSubHeader>refeicoes dentro da dieta</TextSubHeader>
          </CardSnack>

          <CardSnack isDiet={false}>
            <TextHeader>{snacksOutDiet}</TextHeader>
            <TextSubHeader>refeicoes fora da dieta</TextSubHeader>
          </CardSnack>
        </ContainerCardSnack>

      </ContainerInfo>
    </Container>
  );
}