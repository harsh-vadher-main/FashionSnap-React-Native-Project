import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {ReactNode, useRef, useState} from 'react';
import HeaderTop from '../common/HeaderTop';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS, FONTFAMILY, FONTSIZE} from '../themes/Theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';

interface ClothScreenProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'Cloths'>;
}

type RBSheet = any;
const size = ['XS', 'S', 'M', 'L', 'Xl'];
const color = ['Black', 'White', 'Red', 'Green', 'Yellow'];
const data = [
  {
    id: 1,
    image: require('../assets/image/flatlistimage.png'),
  },
  {
    id: 2,
    image: require('../assets/image/flatlistimage2.png'),
  },
];

const itemData = [
  {
    id: 1,
    image: [
      require('../assets/image/flatlistimage.png'),
      require('../assets/image/flatlistimage2.png'),
    ],
    MainText: 'H&M',
    subText: 'Short Black Dress',
    rating: 3,
    totalRating: 10,
    price: '$19.99',
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 2,
    image: [
      require('../assets/image/flatlistimage.png'),
      require('../assets/image/flatlistimage2.png'),
    ],
    MainText: 'Zara',
    subText: 'Long dress',
    price: '26$',
    rating: 3.5,
    totalRating: 22,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 3,
    MainText: "Levi's",
    image: [
      require('../assets/image/flatlistimage.png'),
      require('../assets/image/flatlistimage2.png'),
    ],
    subText: 'Black Dress',
    rating: 4,
    price: '30$',
    totalRating: 40,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 4,
    MainText: 'AllenSolly',
    image: [
      require('../assets/image/flatlistimage.png'),
      require('../assets/image/flatlistimage2.png'),
    ],
    subText: 'Baggy Pants',
    rating: 5,
    price: '40$',
    totalRating: 54,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 5,
    MainText: 'Gucci',
    image: [
      require('../assets/image/flatlistimage.png'),
      require('../assets/image/flatlistimage2.png'),
    ],
    subText: 'Short top',
    rating: 3.7,
    price: '50$',
    totalRating: 30,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 6,
    MainText: 'H&M',
    image: [
      require('../assets/image/flatlistimage.png'),
      require('../assets/image/flatlistimage2.png'),
    ],
    subText: 'Short Black Dress',
    rating: 4,
    price: '43$',
    totalRating: 10,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 7,
    MainText: 'H&M',
    image: [
      require('../assets/image/flatlistimage.png'),
      require('../assets/image/flatlistimage2.png'),
    ],
    subText: 'Short Black Dress',
    rating: 4,
    price: '36$',
    totalRating: 10,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
];

const subData = [
  {
    id: 1,
    name: 'Evening Dress',
    price: '12$ ',
    originalPrice: '15$ ',
    brand: 'Dorothy Perkins',
    discount: 'NEW ',
    totalRating: 14,
    rating: 4,
    image: require('../assets/image/nextflatlist2.png'),
  },
  {
    id: 2,
    name: 'Sport Dress',
    price: '19$ ',
    originalPrice: '22$ ',
    brand: 'Sitlly',
    discount: 'NEW ',
    totalRating: 11,
    rating: 2,
    image: require('../assets/image/nextflatlist.png'),
  },
  {
    id: 3,
    name: 'Night Dress',
    price: '19$ ',
    originalPrice: '22$ ',
    brand: 'Dorothy Perkins',
    discount: 'NEW ',
    totalRating: 17,
    rating: 5,
    image: require('../assets/image/nextflatlist2.png'),
  },
];
const Cloths = ({navigation}: ClothScreenProps) => {
  const refShareSheet = useRef<RBSheet>(null);
  const refSizeSheet = useRef<RBSheet>(null);
  const refColorSheet = useRef<RBSheet>(null);
  const [selectedProduct, setSelectedProduct] = useState(itemData[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');
  const [favourites, setFavourites] = useState<number[]>([]);

  const toggleFavorites = (id: number): void => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter(favId => favId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  const renderStars = (rating: number): ReactNode => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<SvgXml xml={icons().filledstar} />);
      } else {
        stars.push(<SvgXml xml={icons().emptystar} />);
      }
    }
    return stars;
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderTop
        text="Short Dress"
        btn={icons().share}
        onPress1={() => navigation.goBack()}
        onPress2={() => refShareSheet.current.open()}
      />
      <ScrollView nestedScrollEnabled={true}>
        <RBSheet
          ref={refShareSheet}
          useNativeDriver={false}
          closeOnPressMask={true}
          closeOnPressBack={true}
          draggable={true}
          customStyles={{
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            },
            draggableIcon: {
              backgroundColor: '#9B9B9B',
              marginTop: 5,
            },
          }}>
          <Text style={styles.shareMidText}> Share Via</Text>
        </RBSheet>
        <RBSheet
          ref={refSizeSheet}
          useNativeDriver={false}
          closeOnPressMask={true}
          closeOnPressBack={true}
          draggable={true}
          customStyles={{
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            },
            draggableIcon: {
              backgroundColor: '#9B9B9B',
              marginTop: 5,
            },
          }}>
          <View>
            <Text style={styles.text}>Select Size</Text>
            <FlatList
              data={size}
              numColumns={3}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.sizeButton,
                    selectedSize === item && styles.selectedSizeButton,
                    ,
                  ]}
                  onPress={() => setSelectedSize(item)}>
                  <Text
                    style={[
                      styles.sizeTextList,
                      selectedSize === item && styles.selectedText,
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </RBSheet>
        <RBSheet
          ref={refColorSheet}
          draggable={true}
          closeOnPressMask={true}
          closeOnPressBack={true}
          customStyles={{
            container: {borderTopRightRadius: 20, borderTopLeftRadius: 20},
            draggableIcon: {backgroundColor: '#9B9B9B', marginTop: 5},
          }}>
          <FlatList
            data={color}
            keyExtractor={item => item}
            numColumns={3}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedColor === item && styles.selectedSizeButton,
                ]}
                onPress={() => setSelectedColor(item)}>
                <Text
                  style={[
                    styles.sizeTextList,
                    selectedColor === item && styles.selectedText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </RBSheet>

        <View>
          <FlatList
            data={selectedProduct.image}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Image source={item} style={styles.imageView} />
            )}
          />
        </View>
        <View style={styles.view1}>
          <TouchableWithoutFeedback onPress={() => refSizeSheet.current.open()}>
            <View style={styles.sizeView}>
              <Text style={styles.sizeText}>{selectedSize}</Text>
              <SvgXml xml={icons().downarrow} style={styles.downicons} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => refColorSheet.current.open()}>
            <View style={styles.sizeView}>
              <Text style={styles.sizeText}>{selectedColor}</Text>
              <SvgXml xml={icons().downarrow} style={styles.downicons} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity onPress={toggleFavorite}>
            {isFavorite ? (
              <SvgXml xml={icons().heartFilled} />
            ) : (
              <SvgXml xml={icons().heartEmpty} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <Text style={styles.brand}>{selectedProduct.MainText}</Text>
          <Text style={styles.subText}>{selectedProduct.subText}</Text>
          <Text style={styles.price}>{selectedProduct.price} </Text>
          <View style={{flexDirection: 'row'}}>
            <Text>{renderStars(selectedProduct.rating)}</Text>
            <Text style={styles.totalRating}>
              ({selectedProduct.totalRating})
            </Text>
          </View>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
        <View
          style={{
            height: 0.35,
            backgroundColor: '#9B9B9B',
            marginTop: 5,
          }}></View>
        <TouchableOpacity>
          <View style={styles.shippingView}>
            <Text style={styles.shoppingInfo}> Shipping Info </Text>
            <SvgXml xml={icons().next} style={styles.nextIcon} />
          </View>
        </TouchableOpacity>
        <View style={{height: 0.35, backgroundColor: '#9B9B9B'}}></View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 10,
              paddingBottom: 20,
            }}>
            <Text style={styles.shoppingInfo}>Support</Text>
            <SvgXml xml={icons().next} style={styles.nextIcon} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: -5,
          }}>
          <Text
            style={{
              fontSize: FONTSIZE.size_16,
              fontFamily: FONTFAMILY.Poppins_Medium,
            }}>
            You can like this also
          </Text>
          <Text
            style={{
              color : "#9B9B9B",
              fontSize: FONTSIZE.size_12,
              fontFamily: FONTFAMILY.Poppins_Regular,
            }}>
            12 items{' '}
          </Text>
        </View>
        <FlatList
          data={subData}
          horizontal
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
                <Text>{renderStars(item.rating)}</Text>
                <Text
                  style={{
                    color: '#9b9b9b',
                    fontWeight: '400',
                    fontFamily: FONTFAMILY.Poppins_Regular,
                  }}>
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
                onPress={() => toggleFavorites(item.id)}>
                <SvgXml
                  xml={
                    favourites.includes(item.id)
                      ? icons().heartFilled
                      : icons().heartEmpty
                  }
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
      <View style={styles.AddButtonView}>
        <TouchableOpacity style={styles.AddButton}>
          <Text style={styles.addBtnText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cloths;

const styles = StyleSheet.create({
  shareMidText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  imageView: {
    height: 410,
    width: 275,
    backgroundColor: 'green',
  },
  sizeView: {
    backgroundColor: '#fff',
    width: '35%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  colorView: {
    backgroundColor: 'yellow',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likebtn: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    zIndex: 1,
  },
  sizeText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Poppins_Regular,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  downicons: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  sizeButton: {
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  selectedSizeButton: {
    backgroundColor: '#000',
  },
  sizeTextList: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  selectedText: {
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.Poppins_Medium,
    marginVertical: 10,
  },
  shoppingInfo: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  nextIcon: {
    marginTop: 5,
  },
  details: {
    marginHorizontal: 13,
    marginTop: 10,
  },
  brand: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  subText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Poppins_Thin,
    marginTop: -10,
  },
  price: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.Poppins_Medium,
    color: '#000',
    position: 'absolute',
    right: 25,
  },
  totalRating: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  description: {
    marginTop: 10,
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  shippingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 10,
    marginVertical: 10,
  },
  AddButtonView: {
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 2,
  },
  AddButton: {
    backgroundColor: '#DB3022',
    marginHorizontal: 20,
    marginBottom: 10,
    height: 40,
    width: '85%',
    borderRadius: 25,
    justifyContent: 'center',
  },

  addBtnText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.white,
    fontFamily: FONTFAMILY.Poppins_Medium,
    textAlign: 'center',
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
  originalPrice: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  discountPrice: {
    color: '#DB3022',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
});
