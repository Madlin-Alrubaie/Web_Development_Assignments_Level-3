
let products = [];
let prices = [];
let quantities = [];




function addProduct() {

    let product = document.getElementById("product").value;

    let price = Number(document.getElementById("price").value);

    let quantity = Number(document.getElementById("quantity").value);


  

    if (product.trim() == "" || price <= 0 || quantity <= 0) {

        alert("تأكدي من إدخال اسم المنتج والسعر والكمية بشكل صحيح");

        return;
    }




    products.push(product);

    prices.push(price);

    quantities.push(quantity);


    // تحديث القائمة

    showProducts();


  

    document.getElementById("product").value = "";

    document.getElementById("price").value = "";

    document.getElementById("quantity").value = "";

}




function showProducts() {

    let list = document.getElementById("items");

    list.innerHTML = "";


    // إظهار رسالة إذا كانت القائمة فارغة

    if (products.length == 0) {

        document.getElementById("empty").style.display = "block";

    } else {

        document.getElementById("empty").style.display = "none";

    }


  

    for (let i = 0; i < products.length; i++) {

        let item = document.createElement("li");


   

        let info = document.createElement("div");

        info.className = "product-info";


        let name = document.createElement("strong");

        name.textContent = products[i];


        let details = document.createElement("small");

        details.textContent =
            prices[i] + " × " + quantities[i] +
            " = " + (prices[i] * quantities[i]) + " ريال";


        info.appendChild(name);

        info.appendChild(details);


 

        let actions = document.createElement("div");

        actions.className = "actions";


        let editButton = document.createElement("button");

        editButton.textContent = "تعديل";

        editButton.className = "edit-btn";

        editButton.onclick = function() {

            editProduct(i);

        };


        let deleteButton = document.createElement("button");

        deleteButton.textContent = "حذف";

        deleteButton.className = "delete-btn";

        deleteButton.onclick = function() {

            deleteProduct(i);

        };


        actions.appendChild(editButton);

        actions.appendChild(deleteButton);




        item.appendChild(info);

        item.appendChild(actions);

        list.appendChild(item);

    }




    calculateTotal();

}




function calculateTotal() {

    let total = 0;

    for (let i = 0; i < products.length; i++) {

        total += prices[i] * quantities[i];

    }


    document.getElementById("total").textContent =
        total.toLocaleString("en-US") + " ريال";

}



function editProduct(index) {

    let newName = prompt("اكتبي اسم المنتج الجديد:", products[index]);

    if (newName === null) {
        return;
    }

    if (newName.trim() == "") {

        alert("اسم المنتج لا يمكن أن يكون فارغاً");

        return;
    }


    let newPrice = prompt("اكتبي السعر الجديد:", prices[index]);

    if (newPrice === null) {
        return;
    }

    let newQuantity = prompt("اكتبي الكمية الجديدة:", quantities[index]);

    if (newQuantity === null) {
        return;
    }


    newPrice = Number(newPrice);

    newQuantity = Number(newQuantity);


    if (newPrice <= 0 || newQuantity <= 0) {

        alert("السعر والكمية يجب أن يكونا أكبر من صفر");

        return;
    }


    products[index] = newName;

    prices[index] = newPrice;

    quantities[index] = newQuantity;


    showProducts();

}




function deleteProduct(index) {

    let answer = confirm("هل تريدين حذف هذا المنتج؟");

    if (answer) {

        products.splice(index, 1);

        prices.splice(index, 1);

        quantities.splice(index, 1);

        showProducts();

    }

}




function clearCart() {

    if (products.length == 0) {

        alert("القائمة فارغة بالفعل");

        return;
    }


    let answer = confirm("هل تريدين حذف جميع المنتجات؟");


    if (answer) {

        products = [];

        prices = [];

        quantities = [];

        showProducts();

    }

}




function showDate() {

    let now = new Date();


    let day = now.toLocaleDateString("ar-YE", {
        weekday: "long"
    });


    let date = now.toLocaleDateString("ar-YE", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });


    let time = now.toLocaleTimeString("ar-YE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });


    document.getElementById("day").textContent = day;

    document.getElementById("date").textContent = date;

    document.getElementById("time").textContent = time;

}




showDate();

setInterval(showDate, 1000);
