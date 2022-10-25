//constants
const SERVERNAME = 'relifeAppServer';
const PORT = 3000;

// modules
const express = require('express'); // express
const SQL = require('./class/sql.js'); // sql
require('dotenv').config(); // env

// express
const app = express();

// use ejs
app.set("view engine", "ejs");
// static folder
app.use(express.static('public'));

// db
const myDB = new SQL(process.env.HOST, process.env.USER, process.env.PASS, process.env.DBNAME);

// test data columns
const userColumns = ['lastname', 'firstname', 'age', 'gender', 'mailaddress', 'loginid', 'password'];
const genreColumns = ['genrename'];
const chainColumns = ['genreid', 'chainname'];
const shopColumns = ['chainid', 'shopname', 'zipcode', 'shopaddress', 'telephone', 'weekdayopen', 'weekdayclose', 'holidayopen1', 'holidayclose1', 'holidayopen2', 'holidayclose2', 'jam', 'latitude', 'longitude', 'img_url', 'imgin_url', 'twitter_url', 'instagram_url', 'facebook_url', 'article', 'staffname', 'staffphone', 'staffmail'];
const menuColumns = ['shopid', 'menuname', 'price', 'img_url', 'article'];
const seatColumns = ['shopid', 'typeid', 'reserved'];
const reviewColumns = ['shopid', 'userid', 'stars', 'article'];
const favoriteColumns = ['shopid', 'userid'];
const reservedColumns = ['userid', 'seatid', 'starttime', 'endtime'];
const typeColumns = ['name'];
const areaColumns = ['areaname'];
const prefectureColumns = ['areaid', 'prefname'];

// test data 
// user
const userValues = [
    ['John', 'Highway', 71, true, 'john@ebisu-do.jp', 'john', 'pass1'],
    ['Peter', 'Lowstreet', 40, true, 'peter@ebisu-do.jp', 'peter', 'pass2'],
    ['Amy', 'Apple st', 65, false, 'amy@ebisu-do.jp', 'amy', 'pass3'],
    ['Hannah', 'Mountain', 21, true, 'hannah@ebisu-do.jp', 'hannah', 'pass4'],
    ['Michael', 'Valley', 45, false, 'micheal@ebisu-do.jp', 'micheal', 'pass5'],
    ['Sandy', 'Ocean blvd', 22, false, 'sandy@ebisu-do.jp', 'sandy', 'pass6'],
    ['Betty', 'Green Grass', 21, true, 'betty@ebisu-do.jp', 'betty', 'pass7'],
    ['Richard', 'Sky st', 31, true, 'richard@ebisu-do.jp', 'richard', 'pass8'],
    ['Susan', 'One way', 81, false, 'susan@ebisu-do.jp', 'susan', 'pass9'],
    ['Vicky', 'Yellow Garden', 25, false, 'vicky@ebisu-do.jp', 'vicky', 'pass10'],
    ['Ben', 'Park Lane', 38, true, 'ben@ebisu-do.jp', 'ben', 'pass11'],
    ['William', 'Central st', 94, true, 'william@ebisu-do.jp', 'william', 'pass12'],
    ['Chuck', 'Main Road', 89, true, 'chuck@ebisu-do.jp', 'chuck', 'pass13'],
    ['Viola', 'Sideway', 33, false, 'viola@ebisu-do.jp', 'viola', 'pass14'],
];

// genre
const genreValues = [
    ['genre1'],
    ['genre2'],
    ['genre3'],
    ['genre4'],
    ['genre5'],
    ['genre6'],
];

// chain
const chainValues = [
    [1, 'chain1'],
    [1,'chain2'],
    [2, 'chain3'],
];

// shop
const shopValues = [
    [1, 'HighwayShop1', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
    [1, 'HighwayShop2', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
    [1, 'HighwayShop3', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge4', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
    [1, 'HighwayShop5', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge6', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
    [1, 'HighwayShop7', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
    [1, 'HighwayShop8', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
    [1, 'HighwayShop9', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
    [1, 'HighwayShop10', '891-0114', 'テスト県テスト市１－１－１', '090-2039-23942', '09:00', '19:00', '10:00', '20:00', '9:30', '19:30', 90, 93.12, 123.33, 'https://yahoo.co.jp', 'https://google.com', 'https://twitter.com', 'https://instagram.com', 'https://facebook.com', 'hogehogehogehoge', 'testHighway', '090-1323-2932', 'john@ebisu-do.jp'],
];

// menu
const menuValues = [
    [1, 'cake', 800, 'https://yahoo.co.jp', 'hagehagehage'],
    [1, 'chicken', 900, 'https://google.co.jp', 'hogehogehoge'],
    [1, 'salad', 500, 'https://goo.ne.jp', 'higehigehige'],
    [2, 'hamburg', 600, 'https://goo.ne.jp', 'higehigehige'],
    [2, 'sushi', 400, 'https://goo.ne.jp', 'higehigehige'],
    [3, 'donut', 200, 'https://goo.ne.jp', 'higehigehige'],
    [3, 'fried chicken', 300, 'https://goo.ne.jp', 'higehigehige'],
    [4, 'hamburger', 600, 'https://goo.ne.jp', 'higehigehige'],
    [5, 'pork', 1000, 'https://goo.ne.jp', 'higehigehige'],
];

// seat
const seatValues = [
    [1, 1, false],
    [1, 2, false],
    [1, 1, false],
    [1, 2, false],
    [2, 1, false],
    [2, 1, false],
    [2, 1, false],
    [2, 1, false],
    [3, 1, false],
    [3, 1, false],
    [3, 1, false],
    [3, 1, false],
    [4, 1, false],
    [5, 1, false],
    [5, 1, false],
    [6, 1, false],
    [6, 1, false],
    [7, 1, false],
    [7, 1, false],
    [8, 1, false],
];

// review
const reviewValues = [
    [1, 1, 5, false],
    [1, 2, 4, false],
    [1, 1, 3, false],
    [1, 2, 2, false],
    [2, 1, 5, false],
    [2, 1, 4, false],
    [2, 1, 3, false],
    [2, 1, 5, false],
    [3, 1, 4, false],
    [3, 1, 4, false],
    [3, 1, 5, false],
    [3, 1, 3, false],
    [4, 1, 2, false],
    [5, 1, 2, false],
    [5, 1, 1, false],
    [6, 1, 5, false],
    [6, 1, 4, false],
    [7, 1, 3, false],
    [7, 1, 4, false],
    [8, 1, 3, false],
];

// favorite
const favoriteValues = [
    [1, 1],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 1],
    [2, 1],
    [2, 1],
    [3, 1],
    [3, 1],
    [3, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [5, 1],
    [6, 1],
    [6, 1],
    [7, 1],
    [7, 1],
    [8, 1],
];

// reserved
const reservedValues = [
    [1, 1, '2022-10-21 08:48:55', '2022-10-21 09:48:55'],
    [2, 1, '2022-10-21 09:48:55', '2022-10-21 10:48:55'],
    [3, 2, '2022-10-21 10:48:55', '2022-10-21 11:48:55'],
    [4, 2, '2022-10-21 11:48:55', '2022-10-21 12:48:55'],
    [5, 3, '2022-10-21 12:48:55', '2022-10-21 13:48:55'],
    [6, 3, '2022-10-21 13:48:55', '2022-10-21 14:48:55'],
    [7, 4, '2022-10-21 14:48:55', '2022-10-21 15:48:55'],
    [8, 4, '2022-10-21 15:48:55', '2022-10-21 16:48:55'],
    [9, 5, '2022-10-21 16:48:55', '2022-10-21 17:48:55'],
    [10, 5, '2022-10-21 17:48:55', '2022-10-21 18:48:55'],
    [11, 6, '2022-10-21 18:48:55', '2022-10-21 19:48:55'],
    [12, 6, '2022-10-21 19:48:55', '2022-10-21 20:48:55'],
    [13, 7, '2022-10-21 20:48:55', '2022-10-21 21:48:55'],
];

// type
const typeValues = [
    ['普通席'],
    ['高級席'],
    ['VIP席'],
];

// area
const areaValues = [
    ['北海道'],
    ['東北'],
    ['関東'],
    ['関西'],
    ['中国'],
    ['中部'],
    ['九州'],
];

// prefecture
const prefValues = [
    [7, '鹿児島県'],
    [2, '岩手県'],
    [3, '栃木県'],
    [4, '石川県'],
    [5, '神奈川県'],
    [7, '福岡県'],
    [6, '島根県'],
    [5, '高知県'],
    [4, '福井県'],
    [7, '宮崎県'],
];

// root
app.get('/', async(_, res) => {
    res.render('index');
    console.log("finished");
});

// reserve
app.get('/reserve', async(_, res) => {
    // extract data
    await doubleJoinDB('reserve', 'user', 'shop', 'userid', 'shopid');
    // all reserve data
    const reserveData = myDB.getValue;
    // extract start time
    const allStarttimeLists = await Promise.all(reserveData.map(async(time) => await getJSTtime(time.starttime)));
    // extract end time
    const allEndtimeLists = await Promise.all(reserveData.map(async(time) => await getJSTtime(time.endtime)));
    // registered time
    const registeredTimeLists = await Promise.all(reserveData.map(async(time) => time.updated_at ? await getJSTtime(time.updated_at) : await getJSTtime(time.created_at)));
    // render page
    res.render('reserve', {data: myDB.getValue, start: allStarttimeLists, end: allEndtimeLists, regist: registeredTimeLists});
    console.log("finished");
});

// shop
app.get('/shop', async(_, res) => {
    await selectAllDB('shop');
    res.render('shop', {data: myDB.getValue});
    console.log("finished");
});

// user
app.get('/user', async(_, res) => {
    await selectAllDB('user');
    res.render('user', {data: myDB.getValue});
    console.log("finished");
});

// master
app.get('/master', async(_, res) => {
    res.render('master');
    console.log("finished");
});

// reserve new
app.get('/reserve_new', async(_, res) => {
    console.log('hoge');
    res.render('reserve_new');
    console.log("finished");
});

// reserve edit
app.get('/reserve_edit', async(_, res) => {
    res.render('reserve_edit');
    console.log("finished");
});

// user new
app.get('/user_new', async(_, res) => {
    res.render('user_new');
    console.log("finished");
});

// user edit
app.get('/user_edit', async(_, res) => {
    res.render('user_edit');
    console.log("finished");
});

// shop new
app.get('/shop_new', async(_, res) => {
    res.render('shop_new');
    console.log("finished");
});

// shop edit
app.get('/shop_edit', async(_, res) => {
    res.render('shop_edit');
    console.log("finished");
});

// listen to port
app.listen(PORT, () => {
    console.log(`${SERVERNAME} listening on port ${PORT}`);
});

// select from database
const selectDB = async(table, column, values) => {
    // query
    await myDB.doInquiry("SELECT * FROM ?? WHERE ?? IN (?)", [table, column, values]);
    console.log(await myDB.getValue);
}

// select all from database
const selectAllDB = async(table) => {
    // query
    await myDB.doInquiry("SELECT * FROM ??", [table]);
    console.log(await myDB.getValue);
}

// insert into database
const insertDB = async(table, column, values) => {
    // query
    await myDB.doInquiry("INSERT INTO ??(??) values ?", [table, column, values]);
    console.log('finished!');
}

// update data
const updateDB = async(table, column, value) => {
    // query
    await myDB.doInquiry("UPDATE ?? SET ?? = ?", [table, column, value]);
    console.log('finished!');
}

// delete data
const deleteDB = async(table, column, value) => {
    // query
    await myDB.doInquiry("DELETE FROM ?? WHERE ?? = ?", [table, column, value]);
    console.log('finished!');
}

// single left out join table
const singleJoinDB = async(table1, table2, joinId) => {
    // query
    await myDB.doInquiry("SELECT * FROM ?? LEFT JOIN ?? ON ??.?? = ??.id", [table1, table2, table1, joinId, table2]);
    console.log('finished!');
}

// double left out join table
const doubleJoinDB = async(table1, table2, table3, joinId1, joinId2) => {
    // query
    await myDB.doInquiry("SELECT * FROM ?? LEFT JOIN ?? ON ??.?? = ??.id LEFT JOIN ?? ON ??.?? = ??.id", [table1, table2, table1, joinId1, table2, table3, table1, joinId2, table3]);
    console.log('finished!');
}

// get jst time from utc
const getJSTtime = function (date) {
    return new Promise(async function (resolve, reject) {
        try {
            // get jst time
            const jstTime = date.toLocaleString({ timeZone: 'Asia/Tokyo' });
            // res
            resolve(jstTime);
            
        } catch (e) {
            // error
            console.log(e);
            // reject
            reject();
          }
    });
}