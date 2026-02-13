import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function EmergencyAlert() {
  const [seconds, setSeconds] = useState(10);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    // Timer logic
    if (seconds > 0 && !isCancelled) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds, isCancelled]);

  const handleCancel = () => {
    setIsCancelled(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <MaterialIcons name="chevron-left" size={32} color="white" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Alert Icon */}
        <MaterialIcons name="warning" size={120} color="white" />

        <Text style={styles.alertTitle}>
          {isCancelled ? "EMERGENCY CANCELLED" : "EMERGENCY ALERT"}
        </Text>

        {/* Countdown / Status Text */}
        {!isCancelled ? (
          <Text style={styles.counterText}>{seconds}</Text>
        ) : (
          <Text style={styles.statusSubtext}>Help signal was not sent.</Text>
        )}

        {/* Action Button */}
        {!isCancelled ? (
          <TouchableOpacity 
            style={styles.okButton} 
            onPress={handleCancel}
            activeOpacity={0.8}
          >
            <Text style={styles.okButtonText}>I AM OKAY (CANCEL)</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={[styles.okButton, { backgroundColor: 'white' }]} 
            onPress={() => router.replace('/')}
          >
            <Text style={[styles.okButtonText, { color: '#D32F2F' }]}>RETURN HOME</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D32F2F', // Bright emergency red
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -50, // Slight offset to look balanced
  },
  alertTitle: {
    color: 'white',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 20,
    letterSpacing: 1,
  },
  counterText: {
    color: 'white',
    fontSize: 150,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  statusSubtext: {
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 60,
  },
  okButton: {
    backgroundColor: 'white',
    width: '90%',
    paddingVertical: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow for the button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  okButtonText: {
    color: '#D32F2F',
    fontSize: 22,
    fontWeight: '900',
  },
});