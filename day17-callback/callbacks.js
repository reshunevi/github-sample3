//setTimeOut

// function sayHello() {
//     console.log('hello');       
// }

// setTimeout(sayHello, 3000);

//N-increment by 5 then multiply by 3

function arithmetic(N, incrementBy5) {
    N = incrementBy5(N);
    N = multiplyBy3(N);
    console.log(N);

}
let N=5;
arithmetic(N, incrementBy5);

