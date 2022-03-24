import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Image, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import { Items } from '../components/Database/Database'


const Store = ({navigation}) => {
 const [product, setProduct] = useState([]);
 const [gadget, setGadget] = useState([]);

useEffect(() => {
  const unsubscribe = navigation.addListener( 'focus', ()=>{
    getDataFromDb()
  })

  return unsubscribe;
}, [navigation])

// get data from db

const getDataFromDb = () =>{
  let productList = [];
  let gadgetList = [];
  for (let index = 0; index < Items.length; index++) {
   if(Items[index].category == 'product'){
      productList.push(Items[index]);
   }else if(Items[index].category == 'gadget'){
     gadgetList.push(Items[index]);
   } 
  }

  setProduct(productList);
  setGadget(gadgetList);
};

//product card

const ProductCard =({data})=>{
  return(
    <TouchableOpacity style={{width:'45%'}} onPress={()=>navigation.navigate('ProductInfo', {productID: data.id})}>
    <View style={{
      width:'100%',
      height: 100,
      borderRadius: 10,
      backgroundColor: Colors.gray,
      position:'relative',
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 20

    }}>
      {
        data.isOff ? (
          <View style={{
            position:"absolute",
            width: "20%",
            height: 24,
            backgroundColor: Colors.green,
            top: 0,
            left:0,
            borderLeftRadius: 10,
            borderTopRightRadius: 10, 
          }}>
            <Text style= {{color: Colors.light }}>{data. offPercentage}</Text>
          </View>
        ) : null
      }

    <Image source={data.productImage} style={{
       width: '80%',
       height: '80%',
       resizeMode: 'contain',
     }}/>
    </View>
      <Text style={{
        fontSize: 12,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 2,
      }}
      >{data.productName}
      </Text>
      {
        data.category== "gadget" ? (data.isAvailable ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>

            <FontAwesome
             name='circle' 
             style={{fontSize:12, 
             marginRight: 6,
             color: Colors.green}}/>

            <Text style={{color: Colors.green, fontWeight: "500", fontSize: 14}}>Available</Text>
          </View>
        ): (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>

            <FontAwesome
             name='circle' 
             style={{fontSize:12, 
             marginRight: 6,
             color: Colors.red}}/>
            <Text style={{color: Colors.red, fontWeight: "500", fontSize: 14}}>Unvailable</Text>
          </View>
        ) 
        ):null}
      <Text style={{color: Colors.black}}>
        {data.productPrice}
      </Text>
   </TouchableOpacity>
  )
} 
  
return (
    <View  style={styles.container}>
     <ScrollView showsHorizontalScrollIndicator={false}>
     <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}> 
        <TouchableOpacity >
              <Entypo name='shopping-bag' size={29}
              style={{
                borderRadius: 10,
                backgroundColor: Colors.darkGray, 
                padding: 7,
                color: Colors.light
              }}
              />
        </TouchableOpacity>
        <Text style={{fontSize: 30, fontWeight:"600", color: Colors.black}}>Shop</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('MyCart')}>
               <MaterialCommunityIcons name='cart' size={30}
                 style={{
                  borderRadius: 10,
                  backgroundColor: Colors.black, 
                  padding: 7,
                  color: Colors.light
                }}
               />
          </TouchableOpacity>
      </View>
      <View>
        <Text style={{
          fontSize: 24, 
          fontWeight:"500",
          letterSpacing: 1,
          color: Colors.black,
          marginBottom: 10,
        }}
        >HawkWatch Shop & service
        </Text>
        <Text style={{
          fontSize: 16, 
          fontWeight:"300",
          letterSpacing: 1,
          color: Colors.darkGray,
          marginBottom: 10,
          lineHeight: 24
        }}
        >We offers top home and security gadgets
        </Text>
      </View>

      <View  style={{padding: 16}}>
        
      <View style={{ alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}> 
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10
          }}>
              <Text style={{
                fontSize: 18, 
                fontWeight:"500",
                letterSpacing: 1,
                color: Colors.black,
              }}
              >Products
              </Text>

              <Text  style={{
                fontSize: 14, 
                fontWeight:"400",
                letterSpacing: 1,
                color: Colors.black,
                opacity: 0.5,
              }}
              >41
              </Text>
          </View>
               <View>
                <Text  style={{
                fontSize: 18, 
                fontWeight:"500",
                letterSpacing: 1,
                color: Colors.blue,
                marginLeft: 10,
              }}>
                    SeeAll
                </Text>
          </View>
      </View>

           <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-around'}}>
        {
            product.map(data => {
            return <ProductCard data={data} key={data.id}/>
          })
        }
      </View>
      </View>

     

      <View  style={{padding: 16}}>
        
      <View style={{ alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}> 
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
          }}>
              <Text style={{
                fontSize: 18, 
                fontWeight:"500",
                letterSpacing: 1,
                color: Colors.black,
                marginBottom: 10
              }}
              >gadget
              </Text>

              <Text  style={{
                fontSize: 14, 
                fontWeight:"400",
                letterSpacing: 1,
                color: Colors.black,
                opacity: 0.5,
              }}
              >41
              </Text>
          </View>
               <View>
                <Text  style={{
                fontSize: 18, 
                fontWeight:"500",
                letterSpacing: 1,
                color: Colors.blue,
                marginLeft: 10,
              }}>
                    SeeAll
                </Text>
          </View>
      </View>

           <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-around'}}>
        {
            gadget.map(data => {
            return <ProductCard data={data} key={data.id}/>
          })
        }
      </View>
      </View>
      
     </ScrollView>
    </View>
  )
}

export default Store

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.light
  }
})