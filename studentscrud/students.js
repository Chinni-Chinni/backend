db.students_marks.find({gender : "Female"}).count()
db.students_marks.find({gender : "Male",$and : [{maths : {$gt:85}},{science : {$gt : 85}},{english:{$gt:85}}]}).count()
// other option
db.students_marks.find({gender : "Male",maths : {$gt:85}, science : {$gt : 85},english:{$gt:85}}).count()
db.students_marks.find({maths : {$gt : 50 , $lt : 75},english : {$gt : 50, $lt : 75}}).count()
db.students_marks.find({class : {$in :["I","II","III","IV","V"]},maths : {$gt : 50},science : {$gt : 50},english : {$gt : 50}}).count()
db.students_marks.find({class : "X",section : "A",maths : {$lt : 25},science : {$lt : 25},english : {$lt : 25}}).count()
db.students_marks.find({class: "V"}).sort({maths : -1}).limit(3);
db.students_marks.find({class : "I"}).sort({science : 1}).limit(5);
db.students_marks.find({section : "A",maths : {$lt : 50},science : {$lt : 50},english : {$lt : 50}}).count()
db.students_marks.find({section : "C",maths : {$gt :75},science : {$gt :75},english : {$gt : 75}})
db.students_marks.find().sort({maths : 1}).skip(2).limit(10)
db.students_marks.find().sort({science : -1}).skip(4).limit(20)
db.students_marks.find({gender : "Female"}).sort({maths : 1 , science : 1}).skip(3).limit(5)
db.students_marks.find({gender : "Male"}).sort({maths :-1 , science : -1,english : -1}).skip(2).limit(5)