// function sum() {
//   const value1 = document.getElementById("value1").value;
//   const value2 = document.getElementById("value2").value;
//   const result = parseInt(value1) + parseInt(value2);
//   document.getElementById("result").innerHTML = `Resultado: ${result}`;
//   document.getElementById("value1").value = "";
//   document.getElementById("value2").value = "";
//////
// const verificaValue = (value1, value2) => {
//   if ((value1 === " " || value2 === " ") || (isNaN(value1) || isNaN(value2))) {
//     throw new Error(
//       "São necessários dois valores para que a operação seja feita! Os valores devem ser númericos"
//     );
//   }
// };
// const soma = () => {
//   const value1 = document.getElementById("value1").value;
//   const value2 = document.getElementById("value2").value;
//   const result = parseInt(value1) + parseInt(value2);
//   const resultado = document.getElementById("result");
  
//   try {
//     verificaValue(value1, value2);
//     resultado.innerHTML = `Resultado: ${result}`;
//   } catch (error) {
//     resultado.innerHTML = `Erro: ${error.message}`;
//   }
//   finally{
//     document.getElementById("value1").value = " ";
//       document.getElementById("value2").value = " ";
//     }
// };

// window.onload = () => {
//   const button = document.getElementById("button");
//   button.addEventListener("click", soma);
// };
/// parte 2
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  
    return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP ${order.address.apartment}`
   
   

}

console.log(customerInfo(order));

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// orderModifier(order);


