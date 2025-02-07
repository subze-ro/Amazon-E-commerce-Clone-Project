import {renderOrderSummary} from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-class.js'
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';


Promise.all([
  loadProductsFetch(),
  
  new Promise((resolve) => {
    loadCart(() => {});  
    resolve();
  }) 

]).then((values) => {
  console.log(values)
  renderOrderSummary();
  renderPaymentSummary();
});


/*
// an example of using Promises which help us write asychronous code better and avoid nesting issues
new Promise((resolve) => {  
  loadProducts(() => {    
    resolve('value1');
  });

}).then((value) => {

  console.log(value )
  return new Promise((resolve) => {
    loadCart(() => {});  
    resolve();
  });  

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary(); 
});

//an example of using callbacks which create a lot of nesting: code inside code inside code

loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
  });  
});


*/
