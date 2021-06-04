var mongoose = require('mongoose');
var passwordHash = require('password-hash');

var conn = mongoose.createConnection('mongodb://localhost:27017/userdata', { useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true, useUnifiedTopology: true }, function (err, db) {
    if (err) {
        console.log('no');
    }

});


var usersprofile_schema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    dob: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
}, {

    strict: false,

    collection: 'userdatanew'

});
var user = conn.model('userdatanew', usersprofile_schema);
// var post = conn.model('users1', users_schema);

user.find({}, function (err, result) {

//     if (!err) {

        user.deleteMany({dob: {
    $gte: new Date('1996, 12, 12'),
    $lte: new Date('1912, 12, 12')
  }}, function(err, results) {
            if (err){
              console.log("failed");
              throw err;
            }
            console.log(results);
         });


        function getAge(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }


    var data = [];
    var data2 = [];


         for(var i = 0; i < result.length; i++) {
            // console.log(result[i].dob);
        data2.push(result[i].dob);
            data.push(getAge(result[i].dob));
            // data1 += data1 + getAge(result[i].dob);


        
            // console.log('age: ' + getAge(result[i].dob));


        }
        // console.log('age: ' + getAge('1922-12-22'));
        function getArraySum(a){
            var total=0;
            for(var i in a) { 
                total += a[i];
            }
            return total;
        }
        // console.log('age: ' + getAge(data));
         console.log("average age: " + getArraySum(data)/result.length);
        // console.log(result[0].dob);
        // exit;
    //    var data = JSON.stringify(result);
        // console.log(data2);
        // }
});
var today = new Date().toISOString().substr(0,10);

// console.log(today - );
// var new_post1 = new post({
    
//     _id: new mongoose.Types.ObjectId(),
//     username: 'Ankit3323',

//     lastname: 'Srivastava',
//     email: 'ankit@gmail.com',
//     password: passwordHash.generate('type: String, required: true'),
//     date: new Date() + ""

// });

var new_post = new user({
    dob: '1982-12-22',
    mobile: '7007294451',
    date: new Date() + ""
});

// var new_post = new post({

//     dob: 
//     date: new Date() + ""

// });

// new_post.save(function (err) {

//     //save done

//     if (err) {

//         console.log(err);

//         process.exit();

//     }

//     console.log('Post Saved')

// });

// new_post1.save(function (err) {

//     //save done

//     if (err) {

//         console.log(err);

//         process.exit();

//     }

//     console.log('Post Saved2')

// });


// var async = require("async");
// var records = [];

// for (var i = 0; i < 5; i++) {

//     records.push({
//         _id: new mongoose.Types.ObjectId(),
//         username: 'Ankit Numberankit ' + Math.random(1000),
//         lastname: 'srivastava',
//         email: 'ankit@gmial.com',
//         password: passwordHash.generate('tnerjvngvnrtgntr'),
//         date: new Date() + ""

//     });

// }
// var records2 = [];

// for (var i = 0; i < 5; i++) {

//     records2.push({
//         userId: records[i]._id,
//         dob: 'Ankit',
//         age: Math.random(100),
//         mobile: '123'+Math.random(100),
//         date: new Date() + ""

//     });

// }
// console.log(records);
// console.log(records2);
// // function insertAndNotify(records, callback) {

// async.eachLimit(records, 5, function (row, callback) {

//     var new_post = new post({
//         _id: row._id,
//         username: row.username,
//         lastname: row.lastname,
//         email: row.email,
//         password:row.password,
//         date: new Date() + ""

//     });

//     new_post.save(function (err, row) {

//         if (err) {

//             console.log(err);

//             callback(err);

//         }

//         else {
//             console.log('success');
//             callback();

//         }

//     });

// }

// );

// async.eachLimit(records2, 5, function (row, callback) {

//     var new_post1 = new user({

//         userId: row.userId,
//         dob: row.dob,
//         age: row.age,
//         mobile:row.mobile,
//         date: new Date() + ""

//     });

//     new_post1.save(function (err, row) {

//         if (err) {

//             console.log(err);

//             callback(err);

//         }

//         else {
//             console.log('success2');
//             callback();

//         }

//     });

// }

// );