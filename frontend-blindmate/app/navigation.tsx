import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Navigation() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="close" size={28} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Navigation</Text>

      </View>

      {/* Voice UI */}
      <View style={styles.center}>

        <Text style={styles.bigText}>Where to?</Text>

        <FontAwesome5 name="microphone" size={80} color="white" />

        <Text style={styles.tap}>Tap to Speak</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050A18',
    padding: 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 22,
    marginLeft: 20,
    fontWeight: 'bold',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bigText: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  tap: {
    color: '#2979FF',
    fontSize: 18,
    marginTop: 20,
  },
});
