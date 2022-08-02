const knex = require('knex');

const db = knex({
    client:'pg',
    connection:{
        host:'127.0.0.1',
        port:'5432',
        user:'postgres',
        password:'Love',
        database:'dvdrental'
    }
});

// db('country')

// // .insert([
// //     {country:'DI Lerning'},
// //     {country:'shaulan'}
// // ])



// .select('country_id','country')

// // .orderBy('country_id','desc')

// //update in pg
// // .update({country:'angola-1'})
// // .where({country_id:4})
// // .returning('*')

// .then(data =>{
//     console.log(data);
// })
db(product)

.catch(e=>{
    console.log(e);
})