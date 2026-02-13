import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>

      <Ionicons name="person" size={120} color="white" />

      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.brand}>Blindmate</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/home')}
      >
        <FontAwesome5 name="microphone" size={20} color="white" />
        <Text style={styles.btnText}> Start Exploring</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050A18',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  brand: {
    color: '#2979FF',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2979FF',
    padding: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
