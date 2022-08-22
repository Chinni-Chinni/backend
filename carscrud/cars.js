db.cars.find({ gender: "Male", car_color: "Pink" });
db.cars.find({ gender: "Female", $or: [{ car_color: "Pink" }, { car_color: "Blue" }] })
cars.find({ gender: "Male", purchase_year: "1998" })
db.cars.find({ gender: "Female", purchase_year: "1985", car_color: "Yellow" })
db.cars.find({ gender: "Male", $or: [{ country: "Kenya" }, { country: "Germany" }], $or: [{ car_color: "Green" }, { car_color: "Green" }] })
db.cars.find({ country: "India", purchase_year: "2001" })
db.cars.find({ $or: [{ country: "Germany" }, { country: "Egypt" }, { purchase_year: "1998" }, { purchase_year: "1992" }] })

db.cars.find({ country: "India", car_color: "Blue" })

db.cars.find({ gender: "Female", car_color: "Green", $nor: [{ country: "Pakistan" }] })
db.cars.find({ gender: "Female", car_color: "Green", country: { $not: /Pakistan/ } });