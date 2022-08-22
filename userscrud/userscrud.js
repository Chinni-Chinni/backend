db.users.find({gender : "Female"})
db.users.find({gender : "Female", $or : [{language : "Kannada"},{language : "Hindi"}]})
db.users.find({gender : {$in : ["Female","Male"]},language : {$in : ["Kannada","Hindi"]}} )
db.users.find({shirt_size : "S"})
db.users.find({gender : "Female",shirt_size : "XL"})
db.users.find({language : {$in : ["English","Hindi"]},gender : {$in : ["Male","Female"]}})


db.users.find({gender : "Female ", $or : [{language : "Tamil"},{language : "Hindi"},{language : "Bengali"}]} )
db.users.find({gender : "Male",language : "Korean"})