import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function IndoorMode() {
  const [permission, requestPermission] = useCameraPermissions();

  // Request permissions on mount
  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.permissionBtn} onPress={requestPermission}>
          <Text style={styles.permissionBtnText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Camera View - Takes up the whole screen */}
      <CameraView style={styles.camera} facing="back">
        
        {/* Top Navigation Bar */}
        <SafeAreaView style={styles.overlayTop}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <MaterialIcons name="arrow-back-ios" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Indoor Mode</Text>
            <View style={{ width: 28 }} /> {/* Spacer for centering */}
          </View>
        </SafeAreaView>

        {/* Center Target/Focus UI */}
        <View style={styles.focusContainer}>
            <View style={styles.focusBracketTopLeft} />
            <View style={styles.focusBracketTopRight} />
            <View style={styles.focusBracketBottomLeft} />
            <View style={styles.focusBracketBottomRight} />
            
            {/* AI Status Indicator */}
            <View style={styles.scanningIndicator}>
               <Text style={styles.scanningText}>ANALYZING ENVIRONMENT...</Text>
            </View>
        </View>

        {/* Bottom Feedback Card */}
        <View style={styles.bottomOverlay}>
          <View style={styles.detectionCard}>
            <View style={styles.iconCircle}>
                <FontAwesome5 name="couch" size={30} color="black" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.objectText}>Table Detected</Text>
              <Text style={styles.distanceText}>1.2 Meters • Center Front</Text>
            </View>
            <TouchableOpacity style={styles.audioButton}>
              <Ionicons name="volume-high" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    color: 'white',
    paddingBottom: 10,
  },
  permissionBtn: {
    backgroundColor: '#2979FF',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
  permissionBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  overlayTop: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  focusContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Brackets to give a "vision" feel
  focusBracketTopLeft: { position: 'absolute', top: '30%', left: '15%', width: 40, height: 40, borderTopWidth: 4, borderLeftWidth: 4, borderColor: '#00E676' },
  focusBracketTopRight: { position: 'absolute', top: '30%', right: '15%', width: 40, height: 40, borderTopWidth: 4, borderRightWidth: 4, borderColor: '#00E676' },
  focusBracketBottomLeft: { position: 'absolute', bottom: '30%', left: '15%', width: 40, height: 40, borderBottomWidth: 4, borderLeftWidth: 4, borderColor: '#00E676' },
  focusBracketBottomRight: { position: 'absolute', bottom: '30%', right: '15%', width: 40, height: 40, borderBottomWidth: 4, borderRightWidth: 4, borderColor: '#00E676' },
  
  scanningIndicator: {
    backgroundColor: 'rgba(0, 230, 118, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00E676',
  },
  scanningText: {
    color: '#00E676',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  bottomOverlay: {
    padding: 20,
    paddingBottom: 40,
  },
  detectionCard: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  objectText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  distanceText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  audioButton: {
    backgroundColor: '#7B61FF',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  }
});