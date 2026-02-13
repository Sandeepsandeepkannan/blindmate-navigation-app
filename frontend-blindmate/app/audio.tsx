import { Audio } from 'expo-av';

const startRecording = async () => {
  const { status } = await Audio.requestPermissionsAsync();
  if (status !== 'granted') return;

  const recording = new Audio.Recording();
  await recording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
  await recording.getStatusAsync();
  await recording.startAsync();
};

const stopAndSend = async (recording) => {
  await recording.stopAndUnloadAsync();
  const uri = recording.getURI();
  
  // Convert file to base64 or upload as FormData to your backend
  const response = await fetch('YOUR_BACKEND_URL/transcribe', {
    method: 'POST',
    body: JSON.stringify({ audioUri: uri }),
  });
};