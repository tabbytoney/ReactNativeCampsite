import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const ContactScreen = () => {
  return (
    <ScrollView>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Card wrapperStyle={{ margin: 10 }}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <Text>1 Nucamp Way</Text>
          <Text>Seattle, WA 989001</Text>
          <Text style={{ marginBottom: 10 }}>USA</Text>
          <Text>Phone: 1-205-555-1234</Text>
          <Text>Email: campsites@nucamp.co</Text>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default ContactScreen;
