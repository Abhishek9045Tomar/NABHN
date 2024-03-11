import React, { useState, useEffect } from 'react';
import {  Divider } from '@rneui/themed';
import {  SafeAreaView, ScrollView, View, ImageBackground, Pressable, Image, TouchableOpacity, Text, SectionList, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';

const Home = () => {
  const user = {
    name: 'Chaudhary', 
  };

  const data = [
        {
          title: 'Active Assessments',
          data: [
            {
              HospitalName: 'Max Hospital',
              DaysLeft: '3 Days Left',
              AssessmentNumber: 'SH/2023/N00711',
              Date: "05 Feb - 08 Mar'24",
              AssessmentType: 'On Site Assessment',
              Address: 'Shalimar Bagh, Delhi',
            },
            {
              HospitalName: 'Yatharth Hospital',
              DaysLeft: '6 Days Left',
              AssessmentNumber: 'SH/2023/N00711',
              Date: "25 Feb - 11 Mar'24",
              AssessmentType: 'On Site Assessment',
              Address: 'Chandigarh, Punjab',
            },
          ],
        },
        {
          title: 'Upcoming Assessments',
          data: [
            {
              HospitalName: 'Manas Hospital',
              AssessmentNumber: 'SH/2023/N00711',
              Date: "09 mar - 29 Mar'24",
              DaysLeft: '6 Days Left',
              AssessmentType: 'On Site Assessment',
              Address: 'Jaipur, Rajasthan',
            },
          ],
        },
      ];

  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const names = ['Abhi', 'Singh', 'Ram', 'Sham'];

  const handleAllocationBtn = ()=> {
     
    setModalVisible(!isModalVisible);

  }
  const handleStartAssessmentBtn = () => {
    // Handle Start Assessment button click
  };

    const renderItem = ({item}) => (
    <View style={styles.item}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight:'500',fontSize:20,color:'black'}}>{item.HospitalName}</Text>
        <View
        style={{
          backgroundColor:'rgba(244,208,208,1)',
          borderRadius:12,
          height:24,
          padding:3
        }}>
        <Text style={{fontSize:12,color:'red',paddingLeft:8,paddingRight:8}}>{item.DaysLeft}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          //justifyContent: 'space-between',
          
          
        }}>
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
       source={require('../../../assests/Images/Hserial.png')} 
      style={{ width: 18, height: 18, marginRight: 5, marginTop: 16, }} 
    />
    <Text style={{ fontSize: 13, borderRightWidth: 1, paddingRight: 35, marginTop: 16, color: 'black' }}>
      {item.AssessmentNumber}
    </Text>
  </View>

  <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
    <Image
       source={require('../../../assests/Images/calendar_today.png')} 
      style={{ width: 18, height: 18, marginRight: 5, marginTop: 16}} 
    />
        <Text style={{fontSize:13,marginTop:16,color:'black'}}>{item.Date}</Text>
     </View>

     
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
       source={require('../../../assests/Images/analytics.png')} 
      style={{ width: 18, height: 18, marginRight: 5 }} 
    />
        <Text style={{fontSize:13,borderRightWidth:1,paddingRight:20,color:'black'}}>{item.AssessmentType}</Text>
        </View>

     <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
      <Image
       source={require('../../../assests/Images/location_on.png')} 
      style={{ width: 18, height: 18, marginRight: 5 }} 
        />
        <Text style={{fontSize:13,color:'black', marginBottom:12,marginTop:12}}>{item.Address}</Text>
      </View>
      </View>
      <TouchableOpacity
        onPress={handleAllocationBtn}
        style={styles.buttonAllocation}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Allocated Departments</Text>
          <Image source={require('../../../assests/Images/arrow_down.png')} style={styles.allocationDropDowmImage} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleAllocationBtn}
        style={styles.startAssesment}>
        <Text style={styles.startAssesmentText}>Start Assessment</Text>
      </TouchableOpacity>
        {isModalVisible&&<DeptModel/>}
    </View>
  );

  const DeptModel = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const names = ['John', 'Jane', 'Doe', 'Alice'];
  
    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
       
        <Text>{item}</Text>
        
        <View style={styles.separator} />
      </View>
    );
  
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          backdropColor={'green'}
          backdropOpacity={1}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
             <Image source={require('../../../assests/Images/close.png')} style={styles.closeImage} />
            </TouchableOpacity>
              <Text style={styles.header}>Allocated Departments</Text>
              
              <View>
              <FlatList
                data={names}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
              
              </View>
              
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    );

  };



  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );


  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.container} bouncesVertical={false}>
      <ImageBackground
        source={require('../../../assests/Images/homeTopBG.png')} 
        style={styles.topView}
      >
        <View style={styles.header}>
          <View style={styles.leftContainer}>
              <Image
                source={require('../../../assests/Images/homeIcon.png')} 
                style={styles.leftImage}
              />
            <View style={styles.userInfo}>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
           </View>
          <View style={styles.timeContainer}>
            <TouchableOpacity onPress={() => console.log('Hamburger Icon Clicked')}>
            <Image
              source={require('../../../assests/Images/menu.png')} 
              style={styles.hamburgerIconTop}
            />
          </TouchableOpacity>
          <Text style={styles.timeText}>{new Date().toDateString()}</Text>
          </View>
        </View>
      </ImageBackground>  

      {/* List */}
      <View style={styles.listView}>
      <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      horizontal={'false'}
      numColumn = {2}
    />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23,46,64,1)',
  },
  listView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  topView: {
    //height: 200, 
    paddingVertical: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    //marginBottom: -30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  leftContainer: {
    //flexDirection: 'row',
    alignItems: 'left',
  },
  leftImage: {
    width: 50, 
    height: 50, 
    marginTop: 20,
    
  },
  userInfo: {
    marginTop: 20,
    //backgroundColor: 'red',
  },
  welcomeText: {
    fontSize: 16,
    color: 'white',
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    
  },
  hamburgerIconTop: {
    width: 30, 
    height: 30, 
    marginLeft: 'auto',
    marginBottom: 60,
  },
  allocationDropDowmImage: {
    width: 16, 
    height: 16, 
    marginLeft: 'auto',
    marginLeft: 12,
  },
  
  timeContainer: {
    position: 'absolute',
    bottom: 10,
    right: 6,
  },
  timeText: {
    color: 'white',
  },

  item: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    // flexDirection: 'column', 
    // alignItems: 'flex-start', 
    marginBottom: 25,
    backgroundColor: 'white', 
    padding: 16,
    borderRadius: 10, 
    borderWidth: 1.5,
    borderColor: 'rgba(203,203,203,1)',
    marginTop: 10,
  },
  sectionHeader: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 20,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonAllocation: {
    backgroundColor: 'rgba(218,238,255,1)',
    padding: 5,
    borderRadius: 12,
    height: 25,
    width: '100%',
    alignItems: 'center',
    
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
  popUpButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  startAssesmentText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400'
  },

  startAssesment: {
    backgroundColor: 'rgba(23,46,64,1)',
    padding: 5,
    borderRadius: 6,
    height: 32,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    
  },
  
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonImage: {
    width: 16, 
    height: 16, 
    marginLeft: 15, 
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(29,29,29,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'left',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth:0.8,
    borderBottomColor: 'gray',
    
  },
  closeImage: {
    width: 24, 
    height: 24, 
    alignSelf: 'flex-end',
  },
  
  safeArea: {
    flex: 1,
  },
});

export default Home;
