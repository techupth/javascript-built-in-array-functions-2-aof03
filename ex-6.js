const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (carCollection.includes(carBrand)) {
    return carBrand + " has already existed in the car collection.";
  } else {
    carCollection.push(carBrand);
    return "New car collection is: " + carCollection.join(",");
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //