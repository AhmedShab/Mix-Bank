import request from 'superagent'
import initialState from '../initialstate.js'
import React from 'react'


const receiveAccountTransaction = function (data) {

  console.log('inside receiveAccountTransaction ', data);
 return {
   type: 'GET_ACCOUNT_TRANSACTIONS',
   payload: data
 }
}

function fetchAccountTransaction () {
 return (dispatch) => {
   request
   .get('/index/api/v1/accounts/2/transactions')
     .end((err, res) => {
       if (err) {
         console.error(err.message)
         return
       }
       console.log(res);
       dispatch(receiveAccountTransaction(JSON.parse(res.text)))
     })
 }
}

 module.exports={
   receiveAccountTransaction,
   fetchAccountTransaction
 }
