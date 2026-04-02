// console.log("1. pesan kopi...");
// const start = new Date()

// while (new Date() - start < 3000) {

// }
// console.log("2. pesan sudah siap, silakan dinikmati...");
// console.log("3. pesan roti...");
// console.log("4. roti sudah jadi, silakan dinikmati...")

// console.log("1. pesan teh...");
// setTimeout(() => {
//     console.log("2. pesan sudah siap, silakan dinikmati...");
// }, 3000);

// console.log("3. pesan kue...");
// console.log("4. kue sudah jadi, silakan dinikmati...")

const pesanKopi = new Promise((resolve, reject) => {
  let stock = true;
  setTimeout(() => {
    if (stock) {
      resolve("pesan sudah siap, silakan dinikmati...");
    } else {
      reject("maaf, stok kopi habis...");
    }
  }, 3000);
});

// pesanKopi.then((message) => {
//   console.log(message).catch((error) => {
//     console.log(error);
//   }); 
// });

async function pesanKopiAsync() {
  try {
    console.log("pesan dibuat...");
    const message = await pesanKopi;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
} 

pesanKopiAsync();