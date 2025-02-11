import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import {FONTFAMILY, FONTSIZE} from '../themes/Theme';

interface WomenProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'Women'>;
}

const Women = ({navigation}: WomenProps) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.discountCard}>
          <Text style={{fontSize: 24, fontWeight: '600', color: '#fff'}}>
            SUMMER SALES
          </Text>
          <Text style={{fontWeight: '200', color: '#fff'}}>UPTO 50%off </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.cardView}>
            <Text style={styles.innerText}>New</Text>
            <Image
              source={require('../assets/image/cardimage.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('WomenTops')}}>
          <View style={styles.cardView}>
            <Text style={styles.innerText}>Clothes</Text>
            <Image
              source={require('../assets/image/cardimage2.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardView}>
            <Text style={styles.innerText}>Shoes</Text>
            <Image
              source={require('../assets/image/cardimage3.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardView}>
            <Text style={styles.innerText}>Accessories</Text>
            <Image
              source={require('../assets/image/cardimage4.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Women;

const styles = StyleSheet.create({
  discountCard: {
    height: 120,
    width: '90%',
    backgroundColor: '#DB3022',
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 20,
  },
  image: {
    height: '100%',
    width: '50%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardView: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 100,
    width: '90%',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  innerText: {
    width: '50%',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Poppins_Medium,
    textAlignVertical: 'center',
    // backgroundColor : 'blue',
    textAlign: 'center',
  },
});
