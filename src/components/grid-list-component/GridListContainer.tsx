import './GridListContainer.css';

import { IonItem, IonLabel, IonList, IonGrid, IonRow, IonCol } from '@ionic/react';
import ListContainer from '../list-component/ListContainer';

interface ContainerProps {
}

const GridListContainer: React.FC<ContainerProps> = () => {
  return (

    <div className={'list-container'}>

      <>
        <IonGrid>
          <IonRow>
            <IonCol push="4">1</IonCol>
            <IonCol pull="4">2</IonCol>
            <IonCol>3</IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol push="4">2</IonCol>
            <IonCol pull="2">3</IonCol>
            <IonCol pull="2">4</IonCol>
            <IonCol>5</IonCol>
            <IonCol>6</IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol size="0" size-md="1" size-lg="2" size-xl={"1"} className={'ion-hide-md-down'}>2</IonCol>
            <IonCol size="12" size-md="10" size-lg="8" size-xl={"10"}>
              <ListContainer></ListContainer>
            </IonCol>
            <IonCol size="0" size-md="1" size-lg="2" size-xl={"1"} className={'ion-hide-md-down'}>2</IonCol>
          </IonRow>
        </IonGrid>
      </>
    </div>
  );
};

export default GridListContainer;
