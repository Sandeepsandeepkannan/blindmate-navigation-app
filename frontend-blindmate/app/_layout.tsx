import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av'; // Add this import
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  useEffect(() => {
    const initVoice = async () => {
      try {
        // 1. Prepare the audio session
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
        });

        const welcomeMessage = "Welcome to Blindmate. What would you like to do? Navigation, Indoor Mode, Scene AI, or SOS Alert.";
        
        // 2. Add a slight delay (500ms) to ensure the UI is loaded
        setTimeout(() => {
          Speech.speak(welcomeMessage, {
            language: 'en',
            pitch: 1.0,
            rate: 0.9,
          });
        }, 500);
      } catch (error) {
        console.log("Voice initialization error:", error);
      }
    };

    initVoice();
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </>
  );
}