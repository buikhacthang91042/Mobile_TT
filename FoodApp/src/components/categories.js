import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      {/* Tiêu đề Categories */}
      <Text style={styles.header}>Categories</Text>

      {/* Danh sách trượt */}
      <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={styles.scrollContent}>
        <View style={styles.box}>
          <Icon name="fast-food-outline" size={24} style={styles.icon} />
          
          <Text style={styles.boxText}>Món cơm</Text>
        </View>
        <View style={styles.box}>
          <Icon name="beer-outline" size={24} style={styles.icon} />
          <Text style={styles.boxText}>Trà sữa</Text>
        </View>
        <View style={styles.box}>
          <Icon name="fast-food-outline" size={24} style={styles.icon} />
          <Text style={styles.boxText}>Ăn chay</Text>
        </View>
        <View style={styles.box}>
          <Icon name="fast-food-outline" size={24} style={styles.icon} />
          <Text style={styles.boxText}>Bún, Mì, Phở</Text>
        </View>
    
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    alignItems: "center", 
   
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color:"red",
    borderBottomWidth:1,
    borderBottomColor:"red"
  },
  scrollContent: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    height:60,
    
  },
  box: {
    flexDirection:"row",
    alignItems: "center", 
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  icon: {
    marginBottom: 5,
    marginRight:5,
    color: "black",
   
  },
  boxText: {
    fontSize: 14,
    color: "#333",
    marginLeft:5
  },
});
