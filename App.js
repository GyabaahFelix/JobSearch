import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator();

const LoginPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { name, email });
    } else {
      alert('Please enter both name and email');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let’s log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const jobCards = [
    { id: '1', title: 'Software Engineer', company: 'Google' },
    { id: '2', title: 'Product Manager', company: 'Facebook' },
    { id: '3', title: 'Data Scientist', company: 'Amazon' },
    { id: '4', title: 'UX Designer', company: 'Apple' },
    { id: '5', title: 'DevOps Engineer', company: 'Microsoft' },
    { id: '6', title: 'QA Engineer', company: 'Netflix' },
    { id: '7', title: 'Backend Developer', company: 'Uber' },
    { id: '8', title: 'Frontend Developer', company: 'Airbnb' },
  ];

  const JobCard = ({ title, company }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardCompany}>{company}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {name}!</Text>
      <Text style={styles.email}>{email}</Text>
      <FlatList
        data={jobCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard title={item.title} company={item.company} />
        )}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FAFAFD',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#356899',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#0D0D26',
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: '#AFAFB6',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#356899',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0D0D26',
  },
  email: {
    fontSize: 16,
    color: '#0D0D26',
    marginBottom: 20,
  },
  cardsContainer: {
    paddingVertical: 10,
  },
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardCompany: {
    fontSize: 14,
    color: '#6A6A6A',
  },
});
