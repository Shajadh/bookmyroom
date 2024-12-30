import React, { useState } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Notifications screen
const Notifications = () => (
  <View style={[styles.container, { backgroundColor: '#ffffff' }]}>
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/images/notification.png')}
        style={styles.image}
      />
    </View>
    <Text style={styles.text}>Notifications</Text>
    <Text style={styles.text}>You have 5 new notifications</Text>
  </View>
);

// Messages screen
const Messages = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]}>
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/images/message.png')}
        style={styles.image}
      />
    </View>
    <Text style={styles.text}>Messages</Text>
    <Text style={styles.text}>You have 3 unread messages</Text>
  </View>
);

export default function InboxScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'notifications', title: 'Notifications' },
    { key: 'messages', title: 'Messages' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
                <Text style={styles.headerText}>Inbox</Text>
              </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          notifications: Notifications,
          messages: Messages,
        })}
        onIndexChange={setIndex}
        initialLayout={{ width: 300 }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            renderLabel={({ route, focused, color }) => (
              <TouchableOpacity
                style={styles.tabButton}
                onPress={() => setIndex(routes.findIndex(r => r.key === route.key))}
              >
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? '#ffffff' : '#79b652' }
                  ]}
                >
                  {route.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#79b652',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#79b652',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabView: {
    flex: 1,
  },
  imageContainer: {
    marginBottom: 20, // Adjust spacing between image and text
  },
  image: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    resizeMode: 'contain', // Or 'cover', 'stretch', etc.
  },
  tabBar: {
    backgroundColor: '#79b652',
  },
  tabButton: {
    padding: 10,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
