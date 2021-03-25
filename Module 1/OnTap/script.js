// function GenericArray(size, min, max){
//     let arr = [];
//     for(let i=0; i< size; i++){
//         arr.push(Math.floor(Math.random()*(max-min+1)+min));
//     }
//     return arr;
// }

// function indexOf(arr, keyword){
//     for(let i=0;i<arr.length; i++){
//         if(arr[i] == keyword){
//             return i;
//         }
//     }
//     return -1;
// }

class Product{
    constructor(name, desc, price){
        this.id = increment++;
        this.name = name;
        this.description = desc;
        this.price = price
    }
}

let increment = 1;

let p1 = new Product("Bia Huda", "Hãy uống đi anh", 10000);
let p2 = new Product("Bia Huda", "Hãy uống đi anh", 10000);
let p3 = new Product("Bia Huda", "Hãy uống đi anh", 10000);
let p4 = new Product("Bia Huda", "Hãy uống đi anh", 10000);
let p5 = new Product("Bia Huda", "Hãy uống đi anh", 10000);

let products = [p1,p2,p3,p4,p5];

function showProduct(){
    debugger;
    let product = document.getElementById('product');
    products.forEach(function(item, index){
        product.innerHTML += `
                            <div class="card">
                                <div class="card-heard">
                                    <h3>${item.name}</h3>
                                </div>
                                <div class="card-body">
                                    <p>${item.description}</p>
                                </div>
                                <div class="card-footer">
                                    <h3>${item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}<h3>
                                    <a class='btn btn-success'>order now</a>
                                </div>
                            </div>
                        `;
    });

}

function ready(){
    showProduct();
}

ready();