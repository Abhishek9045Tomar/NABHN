// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import {ScrollView, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


// const generateData = (count) => {
//     const data = [];
  
//     for (let i = 1; i <= count; i++) {
//       data.push({
//         id: i,
//         Title: 'Name ',
//         Type: 'Test 2000',
//         City: 'Kollam',
//         State: 'Kerala',
//         Beds: 1000,
//         ApplicationNo: `T-H/2024/020${i}`,
//         ReferenceNo: `HCO-5/2024/020${i}`,
//         Date: '25-jan-2024 to 26-jan-2024',
//       });
//     }
  
//     return data;
//   };
  
//   const AssignHospitalList = () => {
//     const itemCount = 10;
//     const data = generateData(itemCount);
  
//     const itemHeight = 60;
//     const containerHeight = data.length * itemHeight;
  
//     return (
//         <ScrollView contentContainerStyle={[styles.scrollContainer, { minHeight: containerHeight }]}>
//              <Text style={styles.title}>Hospital List</Text>
//           <FlatList
//             data={data}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <View style={styles.container}>
//                 <View style={styles.itemContainer}>
//                   {Object.entries(item).map(([key, value]) => (
//                     <View key={key} style={styles.item}>
//                       <Text style={styles.label}>{key}   </Text>
//                       <Text style={styles.value}>{value}</Text>
//                     </View>
//                   ))}
//                 </View>
//                 <TouchableOpacity style={styles.button}>
//                   <Text style={styles.buttonText}>Start Assessment</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//             horizontal={false} // Ensure vertical display
//           />
//         </ScrollView>
//       );
//     };



// const styles = StyleSheet.create({
//     scrollContainer: {
//       flexGrow: 1,
//       paddingVertical: 20,
//     },
//     item: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         padding: 10,
//         alignItems: 'center', 
//       },
//       label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'black',
//       },
//       value: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'black',
//       },
//     container: {
//       width: '90%',
//       backgroundColor: '#E1F6FF',
//       paddingHorizontal: 24,
//       marginTop: 20,
//       marginLeft: 17,
//       borderRadius: 12,
//       marginBottom: 20,
//     },
//     itemContainer: {
//       flexDirection: 'column', 
//       padding: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: '#ccc',
//     },
//     title: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       margin: 6,
//       color: 'black',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         color: 'black',
//         marginBottom: 10,
//         alignSelf: 'center', 
//       },
//     entry: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       margin: 6,
//       color: 'black',
//     },
//     button: {
//       height: 50,
//       width: '90%',
//       backgroundColor: '#13A4DE',
//       justifyContent: 'center',
//       marginVertical: 12,
//       marginHorizontal: 24,
//       borderRadius: 4,
//     },
//     buttonText: {
//       color: '#fff',
//       fontSize: 16,
//       fontWeight: '500',
//       textAlign: 'center',
//     },
//   });

//export default AssignHospitalList;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AssignHospitalList = () => {
  const data = [
    {
      id: 1,
      title: 'Name',
      entry: 'Test 2000',
    },
    {
      id: 2,
      title: 'Type',
      entry: 'Final Assessment',
    },
    {
      id: 3,
      title: 'City',
      entry: 'Kollam',
    },
    {
      id: 4,
      title: 'State',
      entry: 'Kerala',
    },
    {
      id: 5,
      title: 'Beds',
      entry: 1000,
    },
    {
      id: 6,
      title: 'Application No.',
      entry: 'T-H/2024/02000',
    },
    {
      id: 7,
      title: 'Refernce No.',
      entry: 'HCO-5/2024/02000',
    },
    {
      id: 8,
      title: 'Date',
      entry: '25-jan-2024 to 26-jan-2024',
    },
  ];
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.title}>{item.entry}</Text>}
      />
    </View>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Start Assessment</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

export default AssignHospitalList;

const styles = StyleSheet.create({
  container: {
    height: 342,
    width: 357,
    backgroundColor: '#E1F6FF',
    paddingVertical: 32,
    paddingHorizontal: 24,
    marginTop: 50,
    marginLeft: 17,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 6,
    color:'black'
  },
  button:{
    height:50,
    width:'90%',
    backgroundColor:'#13A4DE',
    justifyContent:"center",
    marginVertical:12,
    marginHorizontal:24,borderRadius:20,
  },
  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"500",
    textAlign:"center",
    
  }
});