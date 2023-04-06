class Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;



    constructor(id: number, name: string, category: string, price: number, image:string) {
        this.id =id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }
}

const inputTitle = document.querySelector("#input-title") as HTMLInputElement;
const inputCategory = document.querySelector("#input-category") as HTMLInputElement;
const inputPrice = document.querySelector("#input-price") as HTMLInputElement;
const inputSelect = document.querySelector("#input-select") as HTMLSelectElement;

const previewImg = document.querySelector("#selected-image") as HTMLImageElement;
const formContainer = document.querySelector("#container-form-input") as HTMLFormElement;


let addedProducts: Product[] = [];



checkselect();



/*  
    Inside the event listener, we get the current value of the input element using event.target.value. 
    We then use a regular expression (/^\d*\.?\d*$/) to test if the value is valid - 
    this regular expression allows zero or more digits (\d*), 
    optionally followed by a period (\.?) and zero or more digits again (\d*). 
    If the value doesn't match this pattern, it's not a valid input.
*/

inputPrice.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;
    const validInput = /^\d*\.?\d*$/.test(value);
    if (!validInput) {
        (event.target as HTMLInputElement).value = value.slice(0, -1);
    }
});



/*
If the value of select input is zero the image display must be none
*/

function checkselect() {

    if (inputSelect.value == "0") {
        previewImg.style.display = "none"
    } else {
        previewImg.style.display = "block"
    }

}



/* 
    Function to preview the image selected in the input select
*/

function previewImage(select: HTMLSelectElement) { 
    previewImg.src = select.value;
    checkselect();
}



function addProduct() { 



    /* 
        The regular expression /^[a-zA-Z]+$/ matches any string that contains only uppercase or lowercase letters. 
        The ^ and $ characters indicate the beginning and end of the string, respectively, 
        and the + character indicates that one or more letters are required.
    
    */

    if (!inputTitle.value || !/^[a-zA-Z]+$/.test(inputTitle.value)) {

        alert("Please enter a valid title (letters only)!");
        return;

    } else if (!inputCategory.value || !/^[a-zA-Z]+$/.test(inputCategory.value)) {

        alert("Please enter a valid category (letters only)!");
        return; 

    } else if (!inputPrice.value) {

        alert("Please Enter a Price")
        return;

    }else if (inputSelect.value == "0") {

        alert("Please select an image")
        return;
    }



    const price = parseFloat(inputPrice.value);
   


    const product = new Product(

        addedProducts.length + 1,
        inputTitle.value,
        inputCategory.value,
        price ,
        previewImg.src

    )

    
    product.id = addedProducts.length + 1;


    addedProducts.push(product);
    
    localStorage.setItem("addedProducts", JSON.stringify(addedProducts));


    formContainer.reset()
    checkselect ();

    console.log(addedProducts);


    

}










