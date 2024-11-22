import React from 'react'
import './AddFoodData.css'
export const AddFoodData = () => {
  return (
    <div className='form-outer'>
        <h1>Thêm đồ ăn mới</h1>
        <form className='form-inner'>
            <label>Tên đồ ăn</label> 
            <input type='text' name='food_name' />
            <br /> 
            <label>Mô tả đồ ăn</label> 
            <input type='text' name='food_description' />
            <br /> 
            <label>Giá đồ ăn</label> 
            <input type='text' name='food_price' />
            <br /> 
            <label>Hình ảnh đồ ăn</label> 
            <input type='file' name='food_image' />
            <br /> 
            <label>Tên nhà hàng</label> 
            <input type='text' name='restaurant_name' />
            <br /> 
            <label>Địa chỉ nhà hàng</label> 
            <input type='text' name='restaurant_address' />
            <br /> 
            <label>Số điện thoại nhà hàng</label> 
            <input type='text' name='restaurant_phone' />
            <br /> 
            <button>Thêm đồ ăn </button>
        </form>
    </div>
  )
}
