import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import {FONTFAMILY} from '../themes/Theme';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'HomeScreen'>;
}

const renderItem = (rating: any) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<SvgXml key={`filled-${i}`} xml={icons().filledstar} />);
    } else {
      stars.push(<SvgXml key={`empty-${i}`} xml={icons().emptystar} />);
    }
  }
  return stars;
};
const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [favourites, setFavourites] = useState<number[]>([]); // Array to store IDs of favourite items

  const toggleFavourite = (id: number): void => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter(favId => favId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  const [favourites1, setFavourites1] = useState<number[]>([]);
  const toggleFavourite1 = (id: number): void => {
    if (favourites1.includes(id)) {
      setFavourites1(favourites1.filter(favId => favId !== id));
    } else {
      setFavourites1([...favourites1, id]);
    }
  };
  const data = [
    {
      id: 1,
      name: 'Evening Dress',
      price: '12$ ',
      originalPrice: '15$ ',
      discount: '-20% ',
      rating: 3.5,
      totalRating: 10,
      brand: 'Dorothy Perkins',
      image: require('../assets/image/firstImage.png'),
    },
    {
      id: 2,
      name: 'Sport Dress',
      price: '19$ ',
      originalPrice: '22$ ',
      brand: 'Sitlly',
      rating: 4.3,
      totalRating: 17,
      discount: '-15% ',
      image: require('../assets/image/secondImage.png'),
    },
    {
      id: 3,
      name: 'Night Dress',
      price: '19$ ',
      brand: 'Dorothy Perkins',
      rating: 3.7,
      totalRating: 27,
      originalPrice: '22$ ',
      discount: '-15% ',
      image: require('../assets/image/thirdImage.png'),
    },
    {
      id: 4,
      name: 'Day Dress',
      price: '19$ ',
      originalPrice: '22$ ',
      brand: 'Sitlly',
      rating: 4.3,
      totalRating: 27,
      discount: '-15% ',
      image: require('../assets/image/firstImage.png'),
    },
    {
      id: 5,
      name: 'Party Dress',
      price: '19$ ',
      originalPrice: '22$ ',
      rating: 4.0,
      totalRating: 37,
      brand: 'Dorothy Perkins',
      discount: '-15% ',
      image: require('../assets/image/secondImage.png'),
    },
  ];

  const data1 = [
    {
      id: 1,
      name: 'Evening Dress',
      price: '12$ ',
      originalPrice: '15$ ',
      brand: 'Dorothy Perkins',
      discount: 'NEW ',
      image: require('../assets/image/nextflatlist2.png'),
    },
    {
      id: 2,
      name: 'Sport Dress',
      price: '19$ ',
      originalPrice: '22$ ',
      brand: 'Sitlly',
      discount: 'NEW ',
      image: require('../assets/image/nextflatlist.png'),
    },
    {
      id: 3,
      name: 'Night Dress',
      price: '19$ ',
      originalPrice: '22$ ',
      brand: 'Dorothy Perkins',
      discount: 'NEW ',
      image: require('../assets/image/nextflatlist2.png'),
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.headerView}>
          <Image
            source={require('../assets/image/mainbg.jpg')}
            style={styles.headerImg}
          />
          <Text style={styles.text1}>Street clothes</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.saletext}>Sale</Text>
            <Text style={styles.subText}>Super summer sale </Text>
          </View>
          <Pressable>
            <Text
              style={{
                fontSize: 14,
                marginTop: 60,
                marginHorizontal: 10,
                fontWeight: '300',
              }}>
              View all{' '}
            </Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            horizontal
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <View key={item.id} style={styles.mainlistview}>
                <View
                  style={{
                    backgroundColor: '#DB3022',
                    width: 35,
                    height: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    top: 30,
                    left: 10,
                    zIndex: 1,
                  }}>
                  <Text style={{zIndex: 1, fontSize: 11, color: '#fff'}}>
                    {item.discount}
                  </Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Cloths')}>
                  <Image source={item.image} style={styles.flatlistImage} />
                </TouchableWithoutFeedback>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row'}}>
                    {renderItem(item.rating)}
                  </View>
                  <Text style={{color: '#9b9b9b', fontWeight: '400'}}>
                    ({item.totalRating})
                  </Text>
                </View>
                <Text style={styles.brandText}>{item.brand}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                  <Text style={styles.discountPrice}>{item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.likebtn}
                  onPress={() => toggleFavourite(item.id)}>
                  <SvgXml
                    xml={
                      favourites.includes(item.id)
                        ? icons().heartFilled
                        : icons().heartEmpty
                    }
                  />
                  {/* <SvgXml xml={icons().heartEmpty}/>
                  <SvgXml xml={icons().heartFilled}/> */}
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.saletext}>New</Text>
            <Text style={styles.subText}>You've never seen it before! </Text>
          </View>
          <Pressable>
            <Text
              style={{
                fontSize: 14,
                marginTop: 60,
                marginHorizontal: 10,
                fontWeight: '300',
                // textDecorationLine : 'underline'
              }}>
              View all{' '}
            </Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            horizontal
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            data={data1}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <View style={styles.mainlistview}>
                <View style={styles.insideView}>
                  <Text style={{zIndex: 1, fontSize: 11, color: '#fff'}}>
                    {item.discount}
                  </Text>
                </View>
                <Image source={item.image} style={styles.flatlistImage} />
                <View style={{flexDirection: 'row'}}>
                  {/* <View>{renderItem()}</View> */}
                  <Text
                    style={{
                      color: '#9b9b9b',
                      fontWeight: '400',
                      fontFamily: FONTFAMILY.Poppins_Regular,
                    }}>
                    (10){' '}
                  </Text>
                </View>
                <Text style={styles.brandText}>{item.brand}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                  <Text style={styles.discountPrice}>{item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.likebtn}
                  onPress={() => toggleFavourite1(item.id)}>
                  <SvgXml
                    xml={
                      favourites1.includes(item.id)
                        ? icons().heartFilled
                        : icons().heartEmpty
                    }
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerView: {
    // flex: 1,
    // position: 'relative',
    backgroundColor: '#f5f5f5',
  },
  headerImg: {
    height: 200,
    width: '100%',
    top: 0,
  },
  text1: {
    fontSize: 34,
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: '#fff',
    fontFamily: FONTFAMILY.Poppins_Bold,
  },
  saletext: {
    fontSize: 34,
    marginHorizontal: 20,
    marginTop: 20,
    alignContent: 'flex-start',
    // backgroundColor : 'red',
    alignSelf: 'flex-start',
    fontFamily: FONTFAMILY.Poppins_Bold,
  },
  subText: {
    fontSize: 12,
    top: -10,
    // backgroundColor: 'green',
    color: '#9B9B9B',
    marginHorizontal: 20,
    // fontWeight: '400',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  flatList: {
    marginHorizontal: 10,
    borderRadius: 10,
  },

  mainlistview: {
    marginRight: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  insideView: {
    backgroundColor: 'black',
    width: 40,
    height: 20,
    justifyContent: 'center',
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 30,
    top: 30,
    left: 10,
    zIndex: 1,
  },

  flatlistImage: {
      height: 180,
      width: 120,
      borderRadius: 10,
  },
  discountPrice: {
    color: '#DB3022',
    // fontWeight: '400',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  originalPrice: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through',
    // fontWeight: '400',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  likebtn: {
    position: 'absolute',
    right: 0,
    bottom: 60,
    zIndex: 10,
  },
  brandText: {
    fontSize: 13,
    color: '#9B9B9B',
    fontWeight: '300',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
});
