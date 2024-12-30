import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import for the icons
import { Calendar } from 'react-native-calendars'; // Calendar component

export default function SearchScreen() {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle date selection
  const onDateSelect = (day) => {
    if (!startDate) {
      setStartDate(day.dateString);
    } else {
      setEndDate(day.dateString);
      setIsCalendarVisible(false); // Close the calendar after selecting both dates
    }
  };

  // Handle the traveler and room modal
  const handleModalSubmit = () => {
    setIsModalVisible(false);
  };

  // Close modal when clicking outside
  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Dismiss keyboard when clicking outside of TextInput
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Search</Text>
        </View>

        {/* Going to TextInput */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="pin-drop" size={20} color="#79b652" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Going to"
            placeholderTextColor="#888"
          />
        </View>

        {/* Date TextInput */}
        <TouchableOpacity style={styles.inputContainer} onPress={() => setIsCalendarVisible(true)}>
          <MaterialIcons name="calendar-today" size={20} color="#79b652" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Select Dates"
            placeholderTextColor="#888"
            value={startDate && endDate ? `${startDate} - ${endDate}` : ''}
            editable={false}
          />
        </TouchableOpacity>

        {/* Travellers TextInput */}
        <TouchableOpacity style={styles.inputContainer} onPress={() => setIsModalVisible(true)}>
          <MaterialIcons name="person" size={20} color="#79b652" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Travellers"
            placeholderTextColor="#888"
            value={`${travellers} Travellers, ${rooms} Rooms`}
            editable={false}
          />
        </TouchableOpacity>

        {/* Search Button */}
        <TouchableOpacity style={styles.searchButton} onPress={() => alert('Searching')}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        {/* Magnifying Glass Icon */}
        <View style={styles.magnifyingGlassContainer}>
          <MaterialIcons name="search" size={40} color="#79b652" />
        </View>

        {/* Start Searching Text */}
        <Text style={styles.startSearchingText}>Start Searching</Text>

        {/* Recent Search Text */}
        <Text style={styles.recentSearchText}>Your recent search will appear here</Text>

        {/* Calendar Modal */}
        <Modal
          visible={isCalendarVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsCalendarVisible(false)}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Calendar
                    markedDates={{
                      [startDate]: { selected: true, selectedColor: '#79b652' },
                      [endDate]: { selected: true, selectedColor: '#79b652' },
                    }}
                    onDayPress={onDateSelect}
                    theme={{
                      selectedDayBackgroundColor: '#79b652',
                      todayTextColor: '#79b652',
                      dayTextColor: '#000',
                      arrowColor: '#79b652',
                      monthTextColor: '#79b652',
                      textSectionTitleColor: '#79b652',
                      backgroundColor: '#fff',
                      textDisabledColor: '#d9e1e8',
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Traveller and Room Modal */}
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Select Travellers and Rooms</Text>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Travellers:</Text>
                    <TouchableOpacity
                      onPress={() => setTravellers(Math.max(1, travellers - 1))}
                      style={styles.modalButton}
                    >
                      <Text style={styles.modalButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalCount}>{travellers}</Text>
                    <TouchableOpacity
                      onPress={() => setTravellers(travellers + 1)}
                      style={styles.modalButton}
                    >
                      <Text style={styles.modalButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Rooms:</Text>
                    <TouchableOpacity
                      onPress={() => setRooms(Math.max(1, rooms - 1))}
                      style={styles.modalButton}
                    >
                      <Text style={styles.modalButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalCount}>{rooms}</Text>
                    <TouchableOpacity
                      onPress={() => setRooms(rooms + 1)}
                      style={styles.modalButton}
                    >
                      <Text style={styles.modalButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.modalDoneButton}
                    onPress={handleModalSubmit}
                  >
                    <Text style={styles.modalDoneButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  icon: {
    paddingRight: 10,
  },
  searchButton: {
    backgroundColor: '#79b652',
    width: '50%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 9,
    alignSelf: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  magnifyingGlassContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  startSearchingText: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  recentSearchText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginRight: 10,
  },
  modalButton: {
    backgroundColor: '#79b652',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  modalCount: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  modalDoneButton: {
    backgroundColor: '#79b652',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  modalDoneButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
