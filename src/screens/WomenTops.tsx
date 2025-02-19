import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useState, useMemo, useRef} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import HeaderTop from '../common/HeaderTop';
import {icons} from '../utils/icons';
import {FONTSIZE, FONTFAMILY, COLORS} from '../themes/Theme';
import {SvgXml} from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';

type RBSheet = any;
interface WomenTopsProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'WomenTops'>;
}
const renderStars = (rating: number) => {
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

const WomenTops = ({navigation}: WomenTopsProps) => {
  const refRBSheet = useRef<RBSheet>(null);
  const data = [
    {
      id: 1,
      name: 'Pullover',
      price: '34$ ',
      originalPrice: '21$',
      brand: 'Mango',
      rating: 4.3,
      totalRating: 3,
      image: require('../assets/image/TopsImage1.png'),
      image1: require('../assets/image/listimage2.png'),
      listviewname: 'Blouse',
    },
    {
      id: 2,
      name: 'Blouse',
      price: '12$ ',
      originalPrice: '9$',
      brand: 'Sitlly',
      rating: 0,
      totalRating: 0,
      image: require('../assets/image/TopsImage2.png'),
      image1: require('../assets/image/listimage.png'),
      listviewname: 'T-shirt SPANISH',
    },
    {
      id: 3,
      name: 'T-Shirt',
      price: '51$ ',
      brand: 'Sitlly',
      rating: 5,
      totalRating: 10,
      originalPrice: '21$',
      image: require('../assets/image/TopsImage3.png'),
      image1: require('../assets/image/listimage2.png'),
      listviewname: 'Blouse',
    },
    {
      id: 4,
      name: 'Shirt',
      price: '34$ ',
      originalPrice: '9$',
      brand: 'Sitlly',
      rating: 4.3,
      totalRating: 3,
      image: require('../assets/image/TopsImage4.png'),
      image1: require('../assets/image/listimage.png'),
      listviewname: 'T-shirt SPANISH',
    },
  ];
  const sort = [
    'Popular',
    'Newest',
    'Customer review',
    'Price: low to high',
    'Price: low to Medium',
    'Price: highest to low',
    'Price: highest to Medium',
    'Price: Medium to low',
    'Price: Medium to High',
  ];
  const categories = [
    'T-shirts',
    'Crop-tops',
    'Sleeveless',
    'Shirts',
    'Bottoms',
  ];
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("Women's Tops");
  const handledisplayText = () => {
    setDisplayText('');
  };

  const handleGrid = () => {
    setIsGridView(!isGridView);
  };
  const [favorites, setFavourites] = useState<number[]>([]);
  const toggleFavourite = (id: number): void => {
    if (favorites.includes(id)) {
      setFavourites(favorites.filter(favId => favId !== id));
    } else {
      setFavourites([...favorites, id]);
    }
  };

  const handleSwitch = (category: string) => {
    setSelectedCategory(category);
  };
  const handleSortSwitch = (sort: string) => {
    setSelectedSort(sort);
  };
  const [selectedCategory, setSelectedCategory] = useState<string>('T-shirts');
  const [selectedSort, setSelectedSort] =
    useState<string>('Price: low to high');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainView}>
        <View>
          <HeaderTop
            text={isGridView ? "Women's Tops" : ''}
            btn={icons().search}
            onPress1={() => navigation.goBack()}
            // onPress2={() => navigation.goBack()}
          />
          <View style={{marginHorizontal: 20, marginTop: 20}}>
            {!isGridView && (
              <Text
                style={isGridView ? [styles.womenTextList] : styles.womenText}>
                {displayText}
              </Text>
            )}
          </View>
          <FlatList
            horizontal={true}
            data={categories}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListView}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.categorybtn,
                  selectedCategory === item && styles.selectedCategory,
                ]}
                onPress={() => handleSwitch(item)}>
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === item && styles.selectedCategoryText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.upperView}>
            <View style={styles.filterView}>
              <TouchableOpacity
                style={{bottom: 2}}
                onPress={() => navigation.navigate('Filter')}>
                <SvgXml xml={icons().filter} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                <Text style={styles.filterText}>Filters</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceView}>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <SvgXml xml={icons().sort} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Text style={styles.PriceText}>{selectedSort}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.gridView}>
              <TouchableOpacity onPress={handleGrid}>
                <SvgXml
                  xml={isGridView ? icons().list : icons().grid}
                  style={{marginHorizontal: 5}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <RBSheet
            ref={refRBSheet}
            useNativeDriver={false}
            closeOnPressMask={true}
            closeOnPressBack={true}
            draggable={true}
            height={Dimensions.get('window').height / 2.5}
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
              <Text style={styles.sortTitleSheet}>Sort by</Text>
              <FlatList
                data={sort}
                keyExtractor={item => item}
                contentContainerStyle={styles.flatListView1}
                renderItem={({item}) => (
                  <Pressable
                    style={[
                      styles.sortBtn,
                      selectedSort === item && styles.selectedSortBtn,
                    ]}
                    onPress={() => handleSortSwitch(item)}>
                    <Text
                      style={[
                        styles.sortText,
                        selectedSort === item && styles.selectedSortTextMain,
                      ]}>
                      {item}
                    </Text>
                  </Pressable>
                )}
              />
            </View>
          </RBSheet>
        </View>
        <View style={isGridView ? styles.listTop : styles.flatTop}>
          <FlatList
            // scrollEnabled={isGridView ? false : true}
            contentContainerStyle={{width: '90%', marginVertical: 5}}
            data={data}
            numColumns={isGridView ? 2 : 1}
            key={isGridView ? 'grid' : 'list'}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Pressable>
                <View style={isGridView ? styles.listMain : styles.gridMain}>
                  <View
                    style={isGridView ? styles.listView : styles.gridMainView}>
                    <Image
                      style={isGridView ? styles.listImage : styles.gridImage}
                      source={isGridView ? item.image1 : item.image}
                    />
                  </View>
                  <View>
                    <Text style={styles.itemName}>
                      {isGridView ? item.listviewname : item.name}
                    </Text>
                    <Text style={styles.brandName}>{item.brand}</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Text style={{marginLeft: 10}}>
                        {renderStars(item.rating)}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: FONTFAMILY.Poppins_Regular,
                        }}>
                        ({item.totalRating}){' '}
                      </Text>
                    </View>
                    <Text
                      style={
                        isGridView ? [styles.listViewText] : styles.itemPrice
                      }>
                      {isGridView ? item.originalPrice : item.price}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => toggleFavourite(item.id)}
                    style={
                      isGridView
                        ? styles.heartButtonListView
                        : styles.heartButton
                    }>
                    <SvgXml
                      xml={
                        favorites.includes(item.id)
                          ? icons().heartFilled
                          : icons().heartEmpty
                      }
                    />
                  </TouchableOpacity>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WomenTops;

const styles = StyleSheet.create({
  flatListView: {
    paddingHorizontal: 10,
    // alignItems : 'flex-start'
  },
  categorybtn: {
    backgroundColor: '#222222',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  womenText: {
    fontSize: 34,
    fontFamily: FONTFAMILY.Poppins_Bold,
  },
  upperView: {
    // backgroundColor: '#f9f9f9',
    marginTop: 10,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  filterView: {
    marginTop: 10,
    flexDirection: 'row',
    width: '25%',
    // marginHorizontal : 10,
    justifyContent: 'space-around',
    marginVertical: 5,
  },

  mainView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  filterText: {
    fontFamily: FONTFAMILY.Poppins_Medium,
    fontSize: FONTSIZE.size_16,
  },
  selectedCategory: {},
  categoryText: {
    color: '#ffffff',
    fontFamily: FONTFAMILY.Poppins_Regular,
    fontSize: FONTSIZE.size_12,
    textAlign: 'center',
  },
  selectedCategoryText: {},
  gridView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  PriceText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  flatTop: {backgroundColor: '#f5f5f5', flex: 1, width: '100%'},
  listTop: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    width: '100%',
  },
  listMain: {
    width: '100%',
    marginVertical: 10,
  },
  gridMain: {
    backgroundColor: '#ffffff',
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  heartButtonListView: {
    position: 'absolute',
    bottom: 70,
    right: 10,
  },
  listViewText: {
    fontSize: 16,
    fontFamily: FONTFAMILY.Poppins_Regular,
    marginLeft: 10,
  },

  itemName: {
    fontSize: 16,
    fontFamily: FONTFAMILY.Poppins_Medium,
    marginLeft: 10,
    marginTop: 5,
  },
  gridImage: {
    height: 100,
    width: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  listImage: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  gridMainView: {width: '30%', borderTopLeftRadius: 20},
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    fontSize: 12,
    fontFamily: FONTFAMILY.Poppins_Thin,
    marginLeft: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: FONTFAMILY.Poppins_Regular,
    marginLeft: 10,
  },
  heartButton: {
    position: 'absolute',
    right: 0,
    bottom: -20,
    zIndex: 10,
  },
  womenTextList: {},
  bottomSheetContainer: {
    flex: 1,
    padding: 20,
  },
  sortTitle: {
    fontSize: 18,
    fontFamily: FONTFAMILY.Poppins_Medium,
    marginBottom: 10,
  },
  sortTitleSheet: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  sortOption: {
    paddingVertical: 15,
  },
  selectedSortOption: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 5,
  },
  sortOptionText: {
    fontSize: 16,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  selectedSortText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sortBtn: {
    // backgroundColor : '#000',
    // color : '#000',
  },
  flatListView1: {
    marginTop: 20,
    width: '100%',
    paddingBottom: 30,
  },
  selectedSortBtn: {
    backgroundColor: '#DB3022',
  },
  sortText: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Poppins_Regular,
    // textAlign : '',
    marginLeft: 10,
    marginBottom: 10,
    // alignSelf : 'center',
    // verticalAlign : 'middle',
    paddingTop: 5,
  },
  selectedSortTextMain: {
    color: COLORS.white,
  },
});

/**
 
 */
