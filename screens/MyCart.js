import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Items } from '../components/Database/Database';
import Colors  from '../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MyCart = ({ navigation}) => {
    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState(null)

    useEffect(() => {
        const unsubscribe = navigation.addListener( 'focus', ()=>{
          getDataFromDb()
        })
      
        return unsubscribe;
      }, [navigation])

      //recieve data from locacl Db by ID

      const getDataFromDb = async()=>{
          let items = await AsyncStorage.getItem('cartItems');
          items = JSON.parse(items);
          let productData = [];
          if(items) {
              Items.forEach(data => {
                  if(items.includes(data.id)) {
                      productData.push(data)
                      return;
                  }
              });
              setProduct(productData)
              getTotal(productData)
          } else {
            setProduct(false);
            getTotal(false);
          }
      };

      const getTotal = (productData) => {
            let total = 0;
            for ( let index= 0; index < productData.length; index++){
                let productPrice = productData[index].productPrice;
                total = total + productPrice;
            }
            setTotal(total);
      };
    
      const renderProducts =(data,index) =>{
        return(
            <View key={index}>
                <Text style={{
                  fontSize: 12 ,
                  color: Colors.black ,
                  fontWeight: '400',
              }}>
                    {data.productName}
                </Text>
            </View>
        )
      }
    
  return (
    <View style={styles.container}>
      <ScrollView>
          <View style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 16,
              paddingHorizontal: 16,
              justifyContent: 'space-between',
              alignItems: 'center'
          }}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                  <MaterialCommunityIcons name='chevron-left' style={{
                        fontSize: 20,
                        color: Colors.dark,
                        padding: 12,
                        backgroundColor: Colors.light,
                        borderRadius: 12,
                  }}/>
              </TouchableOpacity>
              <Text style={{
                  fontSize: 20 ,
                  color: Colors.black ,
                  fontWeight: '500',
              }}>
                Order Details
              </Text>
              <View style={{
                  
                }}>

              </View>
          </View>

              <Text style={{
                  fontSize: 20,
                  color: Colors.black ,
                  fontWeight: '500',
                  letterSpacing: 1,
                  paddingTop: 20,
                  paddingLeft: 16,
                  paddingBottom: 10
              }}>
                  My Cart
              </Text>

              <View style={{
                  
                }}>
                    {
                        product? product.map(renderProducts) : null
                    }

              </View>
      </ScrollView>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
    container :{
        backgroundColor: Colors.lightOverlayColor,
        width: '100%',
        height: '100%',
      }
})