import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const Cardslider = ({title, data}) => {
  // console.log(title);


  return (
    <View style={styles.container}>
      <Text style={styles.cardoutheader}>{title}</Text>
      <FlatList
        style={styles.cardsout}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
            
          <View style={styles.card}>
            <View style={styles.s1}>
              <Image
                source={{uri: item.foodImageUrl.replace('localhost', '192.168.1.9')}}
                style={styles.cardImage}
              />
            </View>
            
            <View style={styles.s2}>
              <Text style={styles.txt1}>{item.foodName}</Text>
              <View style={styles.s2in}>
              <Text style={styles.txt2}>{item.foodPrice}đ</Text>
              </View>
            </View>
            <View style={styles.s3}>
                <Text style={styles.muaBTN}>Mua</Text>
            </View>
          </View>
          
        )}
      />
    </View>
  );
};

export default Cardslider;

const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
    },
    cardoutheader: {
      fontSize: 24,
      color: '#333', 
      fontWeight: 'bold',
      marginHorizontal: 10,
      marginBottom: 15, 
    },
    cardsout: {
      width: '100%',
    },
    card: {
      width: 280, 
      height: 320,
      marginHorizontal: 10,
      borderRadius: 15,
      backgroundColor: '#ffffff',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    cardImage: {
      width: '100%',
      height: 180,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    s2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    txt1: {
      fontSize: 16,
      color: '#333',
      fontWeight: '600',
      width: '65%', 
    },
    txt2: {
      fontSize: 18,
      color: '#e63946', 
      fontWeight: 'bold',
    },
    s2in: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    s3: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 15,
      width: '100%',
    },
    muaBTN: {
      backgroundColor: '#0077b6', 
      color: '#ffffff',
      paddingVertical: 8,
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 20, 
      textAlign: 'center',
      width: '90%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2, 
    },
  });
  
