import React from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { CarDTO } from "../../dtos/carDtos";

import { 
  About, 
  Accessories, 
  Brand, 
  CarImages, 
  Container, 
  Content, 
  Description, 
  Details, 
  Footer, 
  Header, 
  Model, 
  Period, 
  Price, 
  Rent 
} from "./styles";


interface Params {
  car: CarDTO
}

export const CarDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleConfirm = () => {
    navigation.navigate('Schedule', { car })
  }

  return (
    <Container>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent 
      />
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos}/>
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>${car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory, index) => (
            <Accessory  
              key={index}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
          />
          ))}
          
        </Accessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button  
          title="Choose rental date" 
          onPress={handleConfirm}  
        />
      </Footer>
    </Container>
  )
}