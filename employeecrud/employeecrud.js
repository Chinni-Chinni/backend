db.employee_salary.find({gender : "Male"}).count()
db.employee_salary.find({gender : "Female",department : "Engineering",salary : {$lt : 1000000}}).count()
db.employee_salary.find({salary : {$lt : 80000}}).count()
db.employee_salary.find({department : "Accounting",department : "Legal",salary : {$lt: 100000} })
db.employee_salary.find({gender : "Male"}).sort({salary : -1})
db.employee_salary.find({gender : "Female"}).sort({salary : 1})
db.employee_salary.find({department : "Engineering" }).sort({salary : -1}).limit(5)
db.employee_salary.find({department : "Legal"}).sort({salary : 1}).limit(5)
db.employee_salary.find({gender : "Female", salary : {$gt : 30000 , $lt : 50000}})
db.employee_salary.find({gender : "Male",salary : {$gt : 50000,$lt : 100000}})
db.employee_salary.find({gender : "Female", department : "Engineering"}).sort({salary : 1}).limit(50)
db.employee_salary.find({gender : "Male", department : "Human Resources"}).sort({salary : -1}).limit(50)