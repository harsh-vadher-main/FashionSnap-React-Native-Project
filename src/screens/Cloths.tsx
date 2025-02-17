import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderTop from '../common/HeaderTop';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FONTFAMILY, FONTSIZE} from '../themes/Theme';
import {ScrollView} from 'react-native-gesture-handler';

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
    MainText: 'H&M',
    subText: 'Short Black Dress',
    rating: 4,
    totalRating: 10,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 2,
    MainText: 'Zara',
    subText: 'Long dress',
    rating: 3.5,
    totalRating: 22,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 3,
    MainText: "Levi's",
    subText: 'Black Dress',
    rating: 4,
    totalRating: 40,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 4,
    MainText: 'AllenSolly',
    subText: 'Baggy Pants',
    rating: 5,
    totalRating: 54,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 5,
    MainText: 'Gucci',
    subText: 'Short top',
    rating: 3.7,
    totalRating: 30,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 6,
    MainText: 'H&M',
    subText: 'Short Black Dress',
    rating: 4,
    totalRating: 10,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
  {
    id: 7,
    MainText: 'H&M',
    subText: 'Short Black Dress',
    rating: 4,
    totalRating: 10,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
  },
];
const Cloths = () => {
  const refShareSheet = useRef<RBSheet>(null);
  const refSizeSheet = useRef<RBSheet>(null);
  const refColorSheet = useRef<RBSheet>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <HeaderTop
          text="Short Dress"
          btn={icons().share}
          onPress2={() => refShareSheet.current.open()}
        />
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
            horizontal
            data={data}
            showsHorizontalScrollIndicator={true}
            renderItem={({item}) => (
              <View key={item.id}>
                <Image source={item.image} style={styles.imageView} />
              </View>
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
      </ScrollView>
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
});
