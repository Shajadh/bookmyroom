import React from 'react';
import {
  Image,
  StyleSheet,
  Button,
  View,
  FlatList,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface FeaturedImage {
  id: number;
  image: any; 
}

interface Hotel {
  id: string;
  name: string;
  location: string;
  price: string;
  image: any; 
}

const { width } = Dimensions.get('window');

const featuredImages: FeaturedImage[] = [
  { id: 1, image: require('@/assets/images/hotel1.jpg') },
  { id: 2, image: require('@/assets/images/hotel2.jpg') },
  { id: 3, image: require('@/assets/images/hotel3.jpg') },
];

const hotelData: Hotel[] = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    location: 'New York, USA',
    price: '$250/night',
    image: require('@/assets/images/hotel1.jpg'),
  },
  {
    id: '2',
    name: 'Sunny Beach Resort',
    location: 'Miami, USA',
    price: '$300/night',
    image: require('@/assets/images/hotel2.jpg'),
  },
  {
    id: '3',
    name: 'Mountain Retreat',
    location: 'Denver, USA',
    price: '$200/night',
    image: require('@/assets/images/hotel3.jpg'),
  },
];

export default function HomeScreen() {
  const renderHotelCard = ({ item }: { item: Hotel }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>{item.location}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <Button title="Book Now" color="green" onPress={() => {}} />
      </View>
    </View>
  );

  return (
    <ScrollView>
       <View style={styles.header}>
              <Text style={styles.headerText}>BookmyRoom</Text>
            </View>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to HotelFinder!</Text>

        <Carousel
          width={width}
          height={200}
          data={featuredImages}
          loop
          autoPlay
          autoPlayInterval={3000}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.carouselImage} />
          )}
        />

        <Text style={styles.sectionTitle}>Explore Our Top Picks</Text>
        <FlatList<Hotel>
          data={hotelData}
          renderItem={renderHotelCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Need Help?</Text>
          <Text>Contact our 24/7 support team for assistance.</Text>
          <Button title="Contact Us" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor:'white'
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#79b652',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign:'center'
  },
  welcomeText: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    width: 200,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    height: 120,
    width: '100%',
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
});
