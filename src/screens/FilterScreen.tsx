import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderTop from '../common/HeaderTop';
import {icons} from '../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../themes/Theme';
import {RangeSlider} from '@react-native-assets/slider';
import {Circle, SvgXml} from 'react-native-svg';
interface FilterProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'Filter'>;
}

const Colors = [
  '#020202',
  '#F9F9F9',
  '#B82222',
  '#BEA9A9',
  '#F26419',
  '#E2BB8D',
  '#151867',
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const category = ['All ', 'Men ', 'Women ', 'Boys ', 'Girls '];
const FilterScreen = ({navigation}: FilterProps) => {
  const [range, setRange] = useState<[number, number]>([0, 200]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const toggleColors = (color: string) => {
    setSelectedColor(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color],
    );
  };
  const toggleSize = (size: string) => {
    setSelectedSize(prev =>
      prev.includes(size) ? prev.filter(s => s != size) : [...prev, size],
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <HeaderTop text="Filters" onPress1={() => navigation.goBack()} />
          <View>
            <Text style={styles.PriceText}>Price Range</Text>
          </View>
          <View style={styles.barView}></View>
          <View style={styles.priceBar}>
            <Text style={styles.minValue}>${Math.floor(range[0])}</Text>
            <RangeSlider
              style={styles.slider}
              step={0}
              range={[0, 200]}
              crossingAllowed={true}
              minimumRange={0}
              maximumValue={200}
              minTrackStyle={{backgroundColor: '#9B9B9B'}}
              outboundColor="grey"
              thumbTintColor={'#DB3022'}
              thumbSize={22}
              midTrackStyle={{backgroundColor: '#DB3022'}}
              onValueChange={values => setRange(values)}
            />
            <Text style={styles.maxValue}>${Math.floor(range[1])}</Text>
          </View>
          <Text style={styles.colorsText}>Colors</Text>
          <View style={styles.colorsView}>
            <FlatList
              data={Colors}
              horizontal
              keyExtractor={item => item}
              contentContainerStyle={styles.list}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.colorCircle,
                    {backgroundColor: item},
                    selectedColor.includes(item) && styles.selectedColor,
                  ]}
                  onPress={() => toggleColors(item)}
                />
              )}
            />
          </View>
          <View style={{marginVertical: 20, width: '100%'}}>
            <Text
              style={{
                fontSize: FONTSIZE.size_20,
                fontFamily: FONTFAMILY.Poppins_Medium,
                marginHorizontal: 20,
              }}>
              Sizes
            </Text>
            <View style={styles.sizeView}>
              <FlatList
                data={sizes}
                horizontal
                contentContainerStyle={styles.sizeFlatList}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[
                      styles.sizeBtn,
                      selectedSize.includes(item) && styles.selectedSize,
                    ]}
                    onPress={() => toggleSize(item)}>
                    <Text
                      style={[
                        styles.sizeText,
                        selectedSize.includes(item) && styles.selectedSizeText,
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: FONTSIZE.size_20,
                  fontFamily: FONTFAMILY.Poppins_Medium,
                  marginHorizontal: 20,
                  marginTop: 5,
                }}>
                Category
              </Text>
              <View style={styles.sizeView}>
                <FlatList
                  data={category}
                  horizontal
                  keyExtractor={item => item}
                  contentContainerStyle={styles.categoryList}
                  renderItem={({item}: {item: string}) => (
                    <TouchableOpacity
                      style={[
                        styles.categoryBtn,
                        selectedCategory === item && styles.selectedCategoryBtn,
                      ]}
                      onPress={() => setSelectedCategory(item)}>
                      <Text
                        style={[
                          styles.categoryText,
                          selectedCategory === item &&
                            styles.selectedCategoryText,
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BrandScreen')}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginVertical: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: FONTSIZE.size_16,
                      fontFamily: FONTFAMILY.Poppins_Regular,
                    }}>
                    Brand
                  </Text>
                  <Text></Text>
                  <SvgXml style={styles.svgIcon} xml={icons().next} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'f5f5f5',
  },
  PriceText: {
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.Poppins_Medium,
    marginTop: 10,
    marginHorizontal: 20,
  },
  barView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceBar: {
    height: 70,
    backgroundColor: '#ffffff',
    width: '100%',
    shadowColor: '#000',
    elevation: 2,
  },
  slider: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  minValue: {
    position: 'absolute',
    left: 15,
    top: 10,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  maxValue: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  colorsView: {
    height: 100,
    backgroundColor: '#ffffff',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 2,
    marginTop: 5,
    flexDirection: 'row',
    shadowRadius: 4.5,
    justifyContent: 'space-between',
  },
  colorsText: {
    fontSize: FONTSIZE.size_18,
    marginTop: 20,
    fontFamily: FONTFAMILY.Poppins_Medium,
    marginHorizontal: 20,
  },
  list: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 25,
    marginHorizontal: 5,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#DB3022',
  },
  sizeView: {
    height: 100,
    backgroundColor: '#ffffff',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 2,
    marginTop: 5,
    flexDirection: 'row',
    shadowRadius: 4.5,
    justifyContent: 'space-between',
  },
  sizeFlatList: {
    marginHorizontal: 10,
    // backgroundColor: 'blue',
    // width : '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  sizeBtn: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 5,
    width: 35,
    height: 35,
  },
  selectedSize: {
    backgroundColor: '#DB3022',
    borderColor: COLORS.white,
  },
  sizeText: {
    fontSize: FONTSIZE.size_16,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  selectedSizeText: {
    color: COLORS.white,
  },
  categoryList: {
    marginVertical: 30,
  },
  categoryBtn: {
    height: 40,
    width: 100,
    borderColor: '#000',
    borderWidth: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  selectedCategoryBtn: {
    backgroundColor: '#DB3022',
    borderColor: '#fff',
  },
  categoryText: {
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.Poppins_Regular,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  selectedCategoryText: {
    color: '#ffffff',
  },
  svgIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
