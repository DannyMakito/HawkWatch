import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View , ScrollView, Image, TouchableOpacity, Dimensions , FlatList, Animated, ToastAndroid} from 'react-native';
import { Items } from '../components/Database/Database';
import Colors  from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProductInfo = ({route,navigation}) => {
  const {productID} = route.params;
  const [product, setProduct] = useState({})

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);
useEffect(() => {
  const unsubscribe = navigation.addListener( 'focus', ()=>{
    getDataFromDb()
  })

  return unsubscribe;
}, [navigation])

//retriving data by productID

const getDataFromDb  = async()=>{
  for (let index = 0; index < Items.length; index++) {
    if(Items[index].id == productID) {
      await setProduct(Items[index]);
    return;
    }
    
  }
}

//horrizontal productcard
const renderProduct = ({item,index}) =>{
  return (
    <View style={{width: width, height: 240, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={item} style={{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      }}/>
    </View>
  )
};

//Add to Cart funtion

const addToCart = async(id)=> {
let itemArray =   await AsyncStorage.getItem('cartItems');
itemArray = JSON.parse(itemArray);
if (itemArray){
  let array = itemArray;
  array.push(id);

  try {
    await AsyncStorage.setItem('cartItems', JSON.stringify(array)); 
    ToastAndroid.show(
      "Items Added successfully to cart",
      ToastAndroid.SHORT,
    );
    navigation.navigate('Store');
  } catch (error) {
    return error;
  }
}
else{
  let array = [];
  array.push(id);
  try{
    await AsyncStorage.setItem('cartItems', JSON.stringify(array));
    ToastAndroid.show(
      "Items Added successfully to cart",
      ToastAndroid.SHORT,
    );
    navigation.navigate('Store');
  } catch(error){
    return error;
  }
}
};



  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{
          width:'100%',
          backgroundColor: Colors.gray,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          position: 'relative',
          marginBottom: 6,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 16,
          paddingLeft: 16,
        }}>
            <TouchableOpacity  onPress={()=> navigation.goBack()}>
                  <Entypo name='chevron-left' style={{
                    fontSize: 20,
                    color: Colors.dark,
                    padding: 12,
                    backgroundColor: Colors.light,
                    borderRadius: 10
                  }}/>
            </TouchableOpacity>
          </View>
          <FlatList 
          data={product.productImageList ? product.productImageList : null}
          horizontal
          renderItem={renderProduct}
          decelarationRate={0.8}
          showsHorizontalScrollIndicator={false}
         snapToInterval={0.4}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x : scrollX}}}],
            {useNativeDriver: false},
          )}
          />
          <View
           style={{
             width: '100%', 
             flexDirection:'row',
             justifyContent: 'center', 
             alignItems: 'center', 
             marginBottom:16,
              marginTop: 32 }}>
              {  
                  product.productImageList ? 
                  product.productImageList.map((data,index) => {
                    let opacity = position.interpolate({
                      inputRange: [ index -1 , index, index +1],
                      outputRange: [0.2 , 1 , 0.2],
                      extrapolate: 'clamp',
                    })
                    return(
                      <Animated.View 
                      key={index}
                      style={{
                        width: '16%',
                        height: 2.4,
                        backgroundColor: Colors.black,
                        opacity,
                        marginHorizontal:5,
                        borderRadius: 100,
                        
                      }}>

                      </Animated.View>
                    )
                  }) 
                  : null}
          </View>
        </View>
        <View style={{
          paddingHorizontal:16,
          marginTop:6
        }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 14,
              }}>
                <Entypo name='shopping-cart' style={{
                  fontSize:18,
                  color: Colors.blue,
                  marginRight: 6,
                }}/>
                <Text style={{
                  fontSize: 12,
                  color: Colors.black,
                }}>
                  shopping
                </Text>
              </View>
              <View style={{
                flexDirection: 'row',
                marginVertical: 4,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
               <Text style={{
                 fontSize: 24,
                 letterSpacing: 0.5,
                 fontWeight: '600',
                 marginVertical: 4,
                 color: Colors.black,
                 maxWidth: '84%'
               }}
               >{product.productName}
               </Text>
               <Ionicons name='link-outline' style={{
                 fontSize: 24,
                 color: Colors.blue,
                 backgroundColor: Colors.blue + 10,
                 padding: 8,
                 borderRadius: 100

               }}/>
              </View>
              <Text style={{
                fontSize: 12,
                fontWeight:'400',
                color: Colors.black,
                opacity: 0.5,
                letterSpacing: 1,
                lineHeight: 20,
                maxWidth:'85%',
                maxHeight: 44,
                marginBottom: 18
              }}> 
                  {product. description}
              </Text>
              <View style={{
                      flexDirection: 'row',
                    justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 14,
                      borderBottomColor: Colors.white,
                      borderBottomWidth: 1,
                      padding :20,
              }}
              >
                  <View style={{
                      flexDirection: 'row',
                      width: '80%',
                      alignItems: 'center'
                  }}>
                      <View style={{
                          color: Colors.blue,
                          backgroundColor: Colors.gray,
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 12,
                          marginRight:10,
                          borderRadius: 100,
                      }}>
                        <Entypo name='location-pin' style={{
                          fontSize: 15,
                          color: Colors.blue,
                        }}/>
                      </View>
                      <Text style={{
                        color: Colors.black,
                      }}>
                        201 panora rd{'\n'} the reed,  centurion
                      </Text>
                  </View>
                  <Entypo name='chevron-right' style={{
                    fontSize: 22,
                    color: Colors.gray,
                  }}/>
              </View>
              <View style={{
                paddingHorizontal: 16,
              }}>
                <Text style={{
                  fontSize: 22,
                  fontWeight:'500',
                  maxWidth: '84%',
                  color: Colors.black,
                  marginBottom: 4,
                }}>
                  {product.productPrice}.00
                </Text>
              </View>
        </View>

      
      </ScrollView>

      <View style={{
        position: 'absolute',
        height: 50,
        width: '100%',
        bottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
                <TouchableOpacity  onPress={()=> product.isAvailable ? addToCart(product.id) : null}
                style={{
                    width: '86%',
                    height: '90%',
                    backgroundColor: Colors.blue,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    }}   >
                  <Text style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: Colors.white,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}>
                    {product.isAvailable ? "Add to cart" : "Not available"}
                  </Text>
                </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container :{
    backgroundColor: Colors.light,
    width: '100%',
    height: '100%',
    position: 'relative'
  }
})