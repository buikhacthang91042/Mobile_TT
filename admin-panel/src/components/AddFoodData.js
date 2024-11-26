import React, { useState } from "react";
import "./AddFoodData.css";
import { db, collection, addDoc } from "../Firebase/FirebaseConfig"; // import các hàm từ FirebaseConfig

export const AddFoodData = () => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [restaurantName, setRestaurantName] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const [foodType, setFoodType] = useState("");
  const [mealType, setMealType] = useState("");
  const [foodAddon, setFoodAddon] = useState("");
  const [foodAddonPrice, setFoodAddonPrice] = useState("");

  const [restaurantPhone, setRestaurantPhone] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [restaurantAddressBuilidng, setRestaurantAddressBuilidng] =
    useState("");
  const [restaurantAddressStreet, setRestaurantAddressStreet] = useState("");
  const [restaurantAddressCity, setRestaurantAddressCity] = useState("");
  const [restaurantAddressPicode, setRestaurantAddressPicode] = useState("");

  const handleImageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return result.url; // Trả về URL hình ảnh đã tải lên
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngừng hành động mặc định của form

    if (!imageFile) {
      alert("Vui lòng chọn hình ảnh!");
      return;
    }

    const imageUrl = await handleImageUpload(imageFile); // Upload hình ảnh và nhận URL

    const foodData = {
      foodName,
      foodPrice,
      foodCategory,
      foodDescription,
      foodImageUrl: imageUrl, // Lưu URL hình ảnh vào Firestore
      restaurantName,

      restaurantPhone,
      foodType,
      mealType,
      foodAddon,
      foodAddonPrice,
      restaurantEmail,
      restaurantAddressBuilidng,
      restaurantAddressStreet,
      restaurantAddressCity,
      restaurantAddressPicode,
    };

    try {
      // Sử dụng `addDoc` và `collection` từ Firebase v9
      await addDoc(collection(db, "FoodData"), foodData);
      alert("Dữ liệu đã được lưu thành công");
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error);
    }
  };

  return (
    <div className="form-outer">
      <h1>Thêm đồ ăn mới</h1>
      <h2>Thông tin đồ ăn</h2>
      <form className="form-inner" onSubmit={handleSubmit}>
        <label>Tên đồ ăn</label>
        <input
          type="text"
          name="food_name"
          onChange={(e) => setFoodName(e.target.value)}
        />
        <br />

        <label>Mô tả đồ ăn</label>
        <input
          type="text"
          name="food_description"
          onChange={(e) => setFoodDescription(e.target.value)}
        />
        <br />
        <div className="form-row">
          <div className="form-col">
            <label>Giá đồ ăn</label>
            <input
              type="number"
              name="food_price"
              onChange={(e) => setFoodPrice(e.target.value)}
            />
          </div>
          <div className="form-col">
            <label>Loại đồ ăn</label>
            <select
              name="food_type"
              onChange={(e) => {
                setFoodType(e.target.value);
              }}
            >
              <option value="null">Chọn loại món ăn</option>
              <option value="com">Cơm</option>
              <option value="ga">Gà</option>
              <option value="bun">Bún</option>
              <option value="pizza">Pizza</option>
              <option value="pho">Phở</option>
              <option value="burger">Burger</option>
              <option value="banh">Bánh</option>
            </select>
          </div>
        </div>
              
        <div className="form-row">  
        <div className="form-col">
             <label>Danh mục đồ ăn</label>
             <select
              name="food_category"
              onChange={(e) => {
                setFoodCategory(e.target.value);
              }}
            >
              <option value="null">Chọn danh mục đồ ăn</option>
              <option value="monChinh">Món chính</option>
              <option value="doAnNhanh">Đồ ăn nhanh</option>
              <option value="monChay">Món chay</option>
              <option value="trangMieng">Đồ tráng miệng</option>
              <option value="doUong">Đồ uống</option>
              <option value="anVat">Ăn vặt</option>
        
            </select>
        </div>
        <div className="form-col">
             <label>Loại bữa ăn</label>
             <select
              name="food_category"
              onChange={(e) => {
                setMealType(e.target.value);
              }}
            >
              <option value="null">Chọn loại bữa ăn</option>
              <option value="breakfast">Buổi sáng</option>
              <option value="lunch">Buổi trưa</option>
              <option value="dinner">Buổi tối</option>
            
            
            </select>
        </div>
           </div>
              
            <div className="form-row">
                <div className="form-col">
                  <label>Add on name</label>
                  <input type="text" name="food_addon" 
                  onChange={(e) => {setFoodAddon(e.target.value)}} />
                </div>

                <div className="form-col">
                  <label>Add on price</label>
                  <input type="text" name="food_addon_price" 
                  onChange={(e) => {setFoodAddonPrice(e.target.value)}} />
                </div>
            </div>
     

        <label>Hình ảnh đồ ăn</label>
        <input
          type="file"
          name="food_image"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      
          <h2>Thông tin nhà hàng</h2>
          
        <label>Tên nhà hàng</label>
        <input
          type="text"
          name="restaurant_name"
          onChange={(e) => setRestaurantName(e.target.value)}
        />
                   
                   <div className="form-row">
                <div className="form-col">
                  <label>Số nhà của quán</label>
                  <input type="text" name="restaurant_address_building" 
                  onChange={(e) => {setRestaurantAddressBuilidng(e.target.value)}} />
                </div>

                <div className="form-col">
                  <label>Tên đường khu vực</label>
                  <input type="text" name="restaurant_address_street" 
                  onChange={(e) => {setRestaurantAddressStreet(e.target.value)}} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-col">
                  <label>Thành phố</label>
                  <input type="text" name="restaurant_address_city" 
                  onChange={(e) => {setRestaurantAddressCity(e.target.value)}} />
                </div>

                <div className="form-col">
                  <label>Mã khu vực nhà hàng</label>
                  <input type="text" name="restaurant_address_pincode" 
                  onChange={(e) => {setRestaurantAddressPicode(e.target.value)}} />
                </div>
            </div>
            
            <div className="form-row">
                <div className="form-col">
                  <label>Số điện thoại nhà hàng</label>
                  <input type="number" name="restaurant_phone" 
                  onChange={(e) => {setRestaurantPhone(e.target.value)}} />
                </div>

                <div className="form-col">
                  <label>Email nhà hàng</label>
                  <input type="email" name="restaurant_email"
                  onChange={(e) => {setRestaurantEmail(e.target.value)}}  /> 
                  
                </div>
            </div>

        <button type="submit">Thêm đồ ăn</button>
      </form>
    </div>
  );
};
