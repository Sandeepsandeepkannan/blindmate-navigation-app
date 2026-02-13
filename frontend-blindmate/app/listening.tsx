import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function NavigationlisteningScreen() {
  const [isListening, setIsListening] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Navigation</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.content}>
        <Text style={styles.whereToText}>Where to?</Text>
        
        <TouchableOpacity onPress={() => setIsListening(!isListening)}>
          <Text style={styles.tapToSpeakText}>Tap to speak</Text>
        </TouchableOpacity>

        {/* Voice Animation / Icon Section */}
        <View style={styles.voiceWrapper}>
          <View style={[styles.voiceCircle, isListening && styles.listeningCircle]}>
            <FontAwesome5 
              name="microphone" 
              size={60} 
              color={isListening ? "#00E676" : "white"} 
            />
            {!isListening && <Text style={styles.speakLabel}>SPEAK</Text>}
          </View>
          
          {isListening && (
            <View style={styles.listeningOverlay}>
              <Text style={styles.listeningText}>LISTENING...</Text>
              <Text style={styles.subHintText}>Speak your destination</Text>
            </View>
          )}
        </View>
      </View>

      {/* Bottom Destination Card */}
      {!isListening && (
        <View style={styles.destinationCard}>
          <View style={styles.destInfo}>
            <Text style={styles.destName}>City Center{"\n"}Pharmacy</Text>
            <Text style={styles.destMeta}>150m • Best Route</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={30} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // True black background
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  whereToText: {
    color: 'white',
    fontSize: 56,
    fontWeight: 'bold',
  },
  tapToSpeakText: {
    color: '#2979FF',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 60,
  },
  voiceWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  voiceCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: '#2979FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listeningCircle: {
    borderColor: '#00E676',
    backgroundColor: 'rgba(0, 230, 118, 0.05)',
  },
  speakLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    letterSpacing: 2,
  },
  listeningOverlay: {
    alignItems: 'center',
    marginTop: 30,
  },
  listeningText: {
    color: '#00E676',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 1,
  },
  subHintText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  destinationCard: {
    backgroundColor: '#0F172A', // Dark slate card
    borderRadius: 30,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  destInfo: {
    flex: 1,
  },
  destName: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  destMeta: {
    color: '#2979FF',
    fontSize: 16,
    marginTop: 8,
  },
  playButton: {
    backgroundColor: '#00E676',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
});