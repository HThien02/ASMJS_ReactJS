import { useState } from "react";

const Main = () => {
  const [age, checkAge] = useState("");
  const [phone, checkPhone] = useState("");
  const onHandleChangeAge = (e) => {
    const value = e.target.value;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    if (parseInt(value, 10) >= currentYear){
      checkAge(" Nhập lại năm sinh!");
    } else {
      checkAge("");
    }
  };
  const onHandleChangePhone = (e) => {
    const value = e.target.value;
    if (value.length > 0 && value[0] !== "0"){
      checkPhone(" SĐT phải bắt đầu từ số 0");
    } else if (value.length > 10) {
      checkPhone(" SĐT chỉ có 10 số");
    } else {
      checkPhone("");
    }
  };

  return (
    <form>
      <div>
        <p>Nhập tên vào đây mau:</p>
        <input type="text" name="" id="name" />
        <p>Nhập thành phố nhà ngươi đang sống:</p>
        <input type="text" name="" id="city" />
        <p>
          Nhập số điện thoại nữa: <span>{phone}</span>
        </p>
        <input type="text" name="" id="phone" onChange={onHandleChangePhone} />
        <p>Nhập năm sinh nốt:<span className="red">{age}</span></p>
        <input type="text" name="" id="age" onChange={onHandleChangeAge}/>
      </div>
      <button>Kiểm tra</button>
    </form>
  );
};
export default Main;
