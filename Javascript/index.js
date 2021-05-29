var custorder = [];
var totalPrice = 0;
            

function displayProduct() {
    console.log(custorder);
    document.getElementById("pageCart").innerHTML = "";
        var totalPrice = 0;
        for(var i=0; i<custorder.length; i++) {
                if(custorder[i] != "fake"){
                document.getElementById("pageCart").innerHTML += "<strong id=" + i +">" + custorder[i].prod_name + 
                "</strong><br>₱" + custorder[i].prod_price + ".00" + "&nbsp;&nbsp;" + "<button id='something' ' class='btn btn-danger' onClick='removeItem(" + i + ")'>Remove</button>" + "</br></br>";
                
                var productPrice = custorder[i].prod_price;
                totalPrice = totalPrice + productPrice;
            }
        }
        document.getElementById("pageTotal").innerHTML = "Total Price: " + "₱" + totalPrice;
    }

function removeItem(index){
    custorder[index] = "fake";
    displayProduct();
}

function topsOne() {
    var top1 = { 
    prod_name: "Ruffled T-Shirt",
    prod_price: 545
    };
    custorder.push(top1);
    displayProduct();
    top1 = {};
}

function topsTwo() {
    var top2 = { 
    prod_name: "Ruffled T-Shirt",
    prod_price: 695
    };
    custorder.push(top2);
    displayProduct();
    top2 = {};
}

function topsThree() {
    var top3 = { 
    prod_name: "Shirt with Embroidered Collar",
    prod_price: 2495
    };
    custorder.push(top3);
    displayProduct();
    top3 = {};
}

function topsFour() {
    var top4 = { 
    prod_name : "V-neck Basic Shirt",
    prod_price : 545
    };
    custorder.push(top4);
    displayProduct();
    top4 = {};
}

function topsFive() {
    var top5 = { 
    prod_name: "Striped T-shirt",
    prod_price: 1695
    };
    custorder.push(top5);
    displayProduct();
    top5 = {};
}

function topsSix() {
    var top6 = { 
    prod_name: "Embroidered Collar Blouse",
    prod_price: 2295
    };
    custorder.push(top6);
    displayProduct();
    top6 = {};
}

function bottomOne() {
    var bottom1 = { 
    prod_name: "Belted Bermuda Shorts",
    prod_price: 1995
    };
    custorder.push(bottom1);
    displayProduct();
    bottom1 = {};
}

function bottomTwo() {
    var bottom2 = { 
    prod_name: "90's Full-Length Jeans",
    prod_price: 2495
    };
    custorder.push(bottom2);
    displayProduct();
    bottom2 = {};
}

function bottomThree() {
    var bottom3 = { 
    prod_name: "Skort with Bow",
    prod_price: 1696
    };
    custorder.push(bottom3);
    displayProduct();
    bottom3 = {};
}

function bottomFour() {
    var bottom4 = { 
    prod_name: "Mom-Fit Bermuda Shorts",
    prod_price: 1696
    };
    custorder.push(bottom4);
    displayProduct();
    bottom4 = {};
}

function bottomFive() {
    var bottom5 = { 
    prod_name: "Flared Jeans",
    prod_price: 2295
    };
    custorder.push(bottom5);
    displayProduct();
    bottom5 = {};
}

function bottomSix() {
    var bottom6 = { 
    prod_name: "90's Full-Length Jeans",
    prod_price: 2495
    };
    custorder.push(bottom6);
    displayProduct();
    bottom6 = {};
}

function dajOne() {
    var daj1 = { 
    prod_name: "Linen Blended Short Dress",
    prod_price: 2295
    };
    custorder.push(daj1);
    displayProduct();
    daj1 = {};
}

function dajTwo() {
    var daj2 = { 
    prod_name: "Linen Shirt Dress",
    prod_price: 3295
    };
    custorder.push(daj2);
    displayProduct();
    daj2 = {};
}

function dajThree() {
    var daj3 = { 
    prod_name: "Floral Print Jumpsuit",
    prod_price: 2495
    };
    custorder.push(daj3);
    displayProduct();
    daj3 = {};
}

function dajFour() {
    var daj4 = { 
    prod_name: "Textured Jumpsuit",
    prod_price: 3295
    };
    custorder.push(daj4);
    displayProduct();
    daj4 = {};
}

function dajFive() {
    var daj5 = { 
    prod_name: "Printed Jumpsuit",
    prod_price: 4295
    };
    custorder.push(daj5);
    displayProduct();
    daj5 = {};
}

function dajSix() {
    var daj6 = { 
    prod_name: "Denim Jumpsuit",
    prod_price: 3295
    };
    custorder.push(daj6);
    displayProduct();
    daj6 = {};
}

function sabOne() {
    var sab1 = { 
    prod_name: "Leather Bucket Bag",
    prod_price: 4595
    };
    custorder.push(sab1);
    displayProduct();
    sab1 = {};
}

function sabTwo() {
    var sab2 = { 
    prod_name: "Leather Bucket Handbag",
    prod_price: 5995
    };
    custorder.push(sab2);
    displayProduct();
    sab2 = {};
}

function sabThree() {
    var sab3 = { 
    prod_name: "Animal Print Mini City Bag",
    prod_price: 1495
    };
    custorder.push(sab3);
    displayProduct();
    sab3 = {};
}

function sabFour() {
    var sab4 = { 
    prod_name: "Leather Heeled Mules with Jute Insole",
    prod_price: 2995
    };
    custorder.push(sab4);
    displayProduct();
    sab4 = {};
}

function sabFive() {
    var sab5 = { 
    prod_name: "Flat Contrast-Coloured Sandals",
    prod_price: 2995
    };
    custorder.push(sab5);
    displayProduct();
    sab5 = {};
}

function sabSix() {
    var sab6 = { 
    prod_name: "Strappy Leather High-Heel Sandals",
    prod_price: 3495
    };
    custorder.push(sab6);
    displayProduct();
    sab6 = {};
}


function toStringFunction(){
    var i = custorder.length;

    while (i--) {
        if (custorder[i] === "fake") {
            custorder.splice(custorder.indexOf("fake"), 1);
        }
    }
    console.log(custorder);
    toStringFunctiontotoonato();
}
function toStringFunctiontotoonato(){
    var products = JSON.stringify(custorder);
    document.getElementById("custorder").value = products;
}