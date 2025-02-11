import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Women from './Women';
import Men from '../screens/InnerScreens/Men';
import Kids from '../screens/InnerScreens/Kids';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import {Header} from '@react-navigation/elements';
import HeaderTop from '../common/HeaderTop';
import {icons} from '../utils/icons';

interface ShopProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'Shop'>;
}
const tab = createMaterialTopTabNavigator();
const Shop = ({navigation}: ShopProps) => {
  return (
    <>
      <HeaderTop text="categories" btn={icons().search} />
      <tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: '#DB3022',
            height: 3,
          },
        }}>
        <tab.Screen name="Women" component={Women} />
        <tab.Screen name="Men" component={Men} />
        <tab.Screen name="Kids" component={Kids} />
      </tab.Navigator>
    </>
  );
};

export default Shop;

const styles = StyleSheet.create({});

// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   FlatList,
//   ScrollView,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import CategoryCard from '../core_compenent/CategoryCard';
// let data: string[] = ['Women', 'Men ', 'Kids'];
// const Shop: React.FC = () => {
//   const navigation = useNavigation();
//   const [selectedCategory, setSelectedCategory] = useState<string>('Men');
//   const renderCategory = ({item}: {item: string}) => (
//     <View style={styles.flatListView}>
//       <TouchableOpacity
//         style={[
//           styles.categorybtn,
//           selectedCategory === item && styles.selectedCategory,
//         ]}
//         onPress={() => setSelectedCategory(item)}>
//         <Text
//           style={[
//             styles.categoryText,
//             selectedCategory === item && styles.selectedCategoryText,
//           ]}>
//           {item}
//         </Text>
//         {selectedCategory === item && (
//           <View style={styles.selectedCategoryBottom}></View>
//         )}
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.flatListView}>
//         <FlatList
//           data={data}
//           keyExtractor={(item: any) => item}
//           renderItem={renderCategory}
//           // horizontal={true}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListView}
//         />
//       </View>
//       <ScrollView>
//         <View style={styles.discountCard}>
//           <Text style={{fontSize: 24, fontWeight: '800', color: '#fff'}}>
//             SUMMER SALES{' '}
//           </Text>
//           <Text style={{fontWeight: '200', color: '#fff'}}>UPTO 50%off </Text>
//         </View>
//         <TouchableOpacity style={{marginBottom: 15}}>
//           <CategoryCard
//             title="New"
//             imagepath={require('../assets/image/cardimage.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={{marginBottom: 15}}>
//           <CategoryCard
//             title="Clothes"
//             imagepath={require('../assets/image/cardimage2.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={{marginBottom: 15}}>
//           <CategoryCard
//             title="Shoes"
//             imagepath={require('../assets/image/cardimage3.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={{marginBottom: 15}}>
//           <CategoryCard
//             title="Accesories"
//             imagepath={require('../assets/image/cardimage4.png')}
//           />
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default Shop;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   discountCard: {
//     height: 120,
//     width: '90%',
//     backgroundColor: '#DB3022',
//     marginHorizontal: 20,
//     marginVertical: 15,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     elevation: 20,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 10,
//     marginTop: 15,
//     backgroundColor: '#ffffff',
//   },
//   flatListView: {
//     backgroundColor: '#ffffff',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   categorybtn: {
//     marginHorizontal: 10,
//   },
//   selectedCategoryText: {
//     fontWeight: '400',
//     borderStartColor: '#DB3022',
//   },
//   categoryText: {
//     fontSize: 20,
//     marginHorizontal: 25,
//     fontWeight: '200',
//     marginVertical: 10,
//   },
//   selectedCategoryBottom: {
//     backgroundColor: '#DB3022',
//     height: 3,
//   },
//   card: {
//     paddingVertical: 50,
//     width: '100%',
//   },
// });
