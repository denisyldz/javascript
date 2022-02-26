function addToCart(quantity,productName = "elma") {
    console.log("ürün sepete eklendi! : " + productName +" , adet : " + quantity)
}
//productName = "elma" default bir atamadır. addToCart fonksiyonunun içine hiçbir değer girilmezse girilen default değerini döndürür


//addToCart()
addToCart(10,"armut")
//addToCart("kıyafet")



let sayHello = ()=> { // parantezlerin koyulması, sayHello nun artık bir fonksiyon olduğu ve her çağırıldığında içine yazılan kodları çalıştıracağı anlamına gelir
    console.log("hello world")
}

sayHello()

let sayHello2 = function () {
    console.log("hello world 2")
}
//iki fonksiyon açısından react kütüphanesinde çalışırken arrow ya da function fonksiyonunu nerede ne zaman kullanacağımızı belirleriz
sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}
addToCart2("elma",5,20)
addToCart2("armut",2,10)
addToCart2("limon",3,30)

//obje tanımı
let product1 = {productName:"elma",unitPrice : 10,quantity : 5}

function addToCart3(product) {
    console.log("Product: ",product.productName)
    console.log("Quantity: ",product.quantity)
    console.log("Price: ",product.unitPrice)
}

//veri sayı ise değer tip(primitive)(stack te depolanır), veri obje ise referans tip 
//olur(referans numaraları farklı iken birbirlerine eşitlediğmizde yalnızca bellekteki 
//adresi değişir(stack e gelen obje heap de de depolanır)
//let sayi1 = 10  bellekte oluştu
//let sayi2 = 20
//sayi1=sayi2
//sayi2= 100
//console.log(sayi1) // çıktısı 20 olucaktır
addToCart3(product1)
let product2 = {productName:"elma",unitPrice : 10,quantity : 5}
let product3 = {productName:"elma",unitPrice : 10,quantity : 5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
    
}

let products = [
    {productName:"elma",unitPrice : 10,quantity : 5},
    {productName:"armut",unitPrice : 10,quantity : 5},
    {productName:"limon",unitPrice : 10,quantity : 5}
    
]
addToCart4(products)

function add(bisey,...numbers) { //rest operatörü
    let total = 0
    for (let i = 0; i< numbers.length; i++) {
        total = total + numbers[i]
    }
    
    console.log(total)
    console.log(bisey)
    
}

add(20,30)
add(20,30,30,20)


let numbers = [30,45,78,34] //spread ayrıştırır rest toparlar
//console.log(...numbers) bu kod her bir değeri spread yapar birer birer gösterir
//console.log(numbers) bu kod array gibi getirir
console.log(Math.max(...numbers))


//arrayi distract ettik
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name : "iç anadolu", population : "20m"},
    {name : "Marmara", population : "20m"},
    {name : "karadeniz", population : "15m"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)



let newProductName, newUnitPrice, newQuantity 
({productName:newProductName, unitPrice: newUnitPrice,quantity: newQuantity} = {productName:"elma",unitPrice : 10,quantity : 5}) //parametre olduğu için sonlara açık parantez koyduk



console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

