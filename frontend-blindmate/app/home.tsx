import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.location}>90A, 5th Main R...</Text>

        <Ionicons name="person-circle" size={50} color="white" />
      </View>

      {/* Grid */}
      <View style={styles.grid}>

        <View style={styles.row}>

          <MenuButton
            title="Navigation"
            color="#FFD700"
            icon={<MaterialCommunityIcons name="navigation-variant" size={45} />}
            onPress={() => router.push('/navigation')}
          />

          <MenuButton
            title="Indoor"
            color="#00E676"
            icon={<FontAwesome5 name="home" size={40} />}
          />

        </View>

        <View style={styles.row}>

          <MenuButton
            title="Scene AI"
            color="#2979FF"
            icon={<FontAwesome5 name="camera" size={40} />}
          />

          <MenuButton
            title="SOS"
            color="#FF3D00"
            icon={<MaterialIcons name="error-outline" size={45} />}
          />

        </View>

      </View>

    </View>
  );
}

/* Card */
function MenuButton({ title, icon, color, onPress }: any) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color }]}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050A18',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  location: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },

  grid: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  card: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 25,
    padding: 20,
    justifyContent: 'space-between',
  },

  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
