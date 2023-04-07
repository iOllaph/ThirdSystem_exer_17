

let products: Product[] = [
    {
        id: 1,
        name: "leibal - soft chair",
        category:"Wood",
        price: 155,
        image: "/assets/products/1.jpg"
    },
    {
        id: 2,
        name: "leibal - soft chair",
        category:"Metal",
        price: 155,
        image: "/assets/products/1.jpg"
    },
    {
        id: 3,
        name: "leibal - soft chair",
        category:"Metal",
        price: 155,
        image: "/assets/products/5.jpg"
    },
    {
        id: 4,
        name: "leibal - soft chair",
        category:"Metal Black",
        price: 155,
        image: "/assets/products/5.jpg"
    }
];



const containerProducts = document.querySelector(".container-products");
const productsCategories = document.querySelector(".products-categories");


/*
    If are products in the localstorage we add to array,
    if not is declared empty
*/

if(localStorage.getItem("addedProducts")) {
    addedProducts = JSON.parse(localStorage.getItem("addedProducts"));
} else {
    addedProducts = []
}


 
udpateView() 



function udpateView() {

    
    containerProducts.innerHTML = "" 


    // Create an array to store categories created from the user

    const uniqueCategories  = [];
    

    console.log(uniqueCategories);


    if (addedProducts.length > 0) {


         /* 
        check if are item in addedProducts array
        to use combine with the products array
        */
    

        const combinedProducts = products.concat(addedProducts);
        


        for (let i= 0; i < combinedProducts.length; i++) {


            const product = combinedProducts[i];


            // Check if the category is not already in the uniqueCategories array

            if (!(uniqueCategories as any ).includes(product.category)) {

                // Add the category to the uniqueCategories array
                uniqueCategories.push(product.category);

                productsCategories.innerHTML += `
                    <span class="category-button" data-category="${product.category}">${product.category}</span>
                `;
            }


            containerProducts.innerHTML += `
            
                <div class="product-card">
                    <div class="add-product">
                            <span class="add-product-button">Add to cart</span>
                            <span class="add-product-symbol">+</span>
                    </div>
                    <div class="product-image">
                        <img src= ${product.image} alt="" />
                    </div>
                    <div class="text-wrapper">
                        <span class="text-wrapper-title"> ${product.name} </span>
                        <div class="text-wrapper-categories">
                            <span> ${product.category} </span> 
                        </div>
                        <span class="text-wrapper-price">R$ ${product.price} </span>
                    </div>
                </div>

            `
                
        }
    } else {
        for (let i= 0; i < products.length; i++) {


            const product = products[i];


            // Check if the category is not already in the uniqueCategories array

            if (!(uniqueCategories as any ).includes(product.category)) {

                // Add the category to the uniqueCategories array

                uniqueCategories.push(product.category);

                productsCategories.innerHTML += `
                    <span class="category-button" data-category="${product.category}">${product.category}</span>
                `;
            }


            containerProducts.innerHTML += `
            
                <div class="product-card">
                    <div class="add-product">
                            <span class="add-product-button">Add to cart</span>
                            <span class="add-product-symbol">+</span>
                    </div>
                    <div class="product-image">
                        <img src= ${product.image} alt="" />
                    </div>
                    <div class="text-wrapper">
                        <span class="text-wrapper-title"> ${product.name} </span>
                        <div class="text-wrapper-categories">
                            <span> ${product.category} </span> 
                        </div>
                        <span class="text-wrapper-price">R$ ${product.price} </span>
                    </div>
                </div>`
                
        }   

    }




}

 
/* 
    With this function we filtred the categoties created from the user 
*/

function filterByCategory(category: string) {

    /* 
        check if are item in addedProducts array
        to use combine with the products array
    */
    
    if (addedProducts.length > 0) {

         // Combine products and addedProducts arrays

        const combinedProducts = products.concat(addedProducts);


        const filteredProducts = combinedProducts.filter(product => product.category === category);


        containerProducts.innerHTML = ""; // Clear the container


        if (filteredProducts.length > 0) {


            for (let i = 0; i < filteredProducts.length; i++) {


                const product = filteredProducts[i];


                containerProducts.innerHTML += `
                    <div class="product-card">
                           <div class="add-product">
                                <span class="add-product-button">Add to cart</span>
                                <span class="add-product-symbol">+</span>
                        </div>
                        <div class="product-image">
                            <img src= ${product.image} alt="" />
                        </div>
                        <div class="text-wrapper">
                            <span class="text-wrapper-title"> ${product.name} </span>
                            <div class="text-wrapper-categories">
                                <span> ${product.category} </span> 
                            </div>
                            <span class="text-wrapper-price">R$ ${product.price} </span>
                        </div>
                    </div>`;


            }
        } else {

            containerProducts.innerHTML = "<p>No products found for this category.</p>";

        }
    }else {



        const filteredProducts = products.filter(product => product.category === category);


        containerProducts.innerHTML = ""; // Clear the container


        if (filteredProducts.length > 0) {


            for (let i = 0; i < filteredProducts.length; i++) {


                const product = filteredProducts[i];


                containerProducts.innerHTML += `

                    <div class="product-card">
                           <div class="add-product">
                                <span class="add-product-button">Add to cart</span>
                                <span class="add-product-symbol">+</span>
                        </div>
                        <div class="product-image">
                            <img src= ${product.image} alt="" />
                        </div>
                        <div class="text-wrapper">
                            <span class="text-wrapper-title"> ${product.name} </span>
                            <div class="text-wrapper-categories">
                                <span> ${product.category} </span> 
                            </div>
                            <span class="text-wrapper-price">R$ ${product.price} </span>
                        </div>
                    </div>`;

            }
        } else {

            containerProducts.innerHTML = "<p>No products found for this category.</p>";

        }
    }

  
}



/*
    Firt the button are created then we assing them.
    Add event listeners for category buttons
*/

const categoryButtons = document.querySelectorAll(".category-button");
categoryButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const category = (event.target as any).dataset.category; // Get category from data-category attribute
        filterByCategory(category);
    });
});



/*
    Firt the button are created then we assing them.
    Add event listeners for category buttons
*/

const categoryAllButton = document.querySelector(".category-all-button");
categoryAllButton.addEventListener("click", () => {

    containerProducts.innerHTML = ""; // Clear the container

    if (addedProducts.length > 0) {


        const combinedProducts = products.concat(addedProducts);
        

        for (let i= 0; i < combinedProducts.length; i++) {


            const product = combinedProducts[i];

           
            containerProducts.innerHTML += `
            
                <div class="product-card">
                    <div class="add-product">
                            <span class="add-product-button">Add to cart</span>
                            <span class="add-product-symbol">+</span>
                    </div>
                    <div class="product-image">
                        <img src= ${product.image} alt="" />
                    </div>
                    <div class="text-wrapper">
                        <span class="text-wrapper-title"> ${product.name} </span>
                        <div class="text-wrapper-categories">
                            <span> ${product.category} </span> 
                        </div>
                        <span class="text-wrapper-price">R$ ${product.price} </span>
                    </div>
                </div>

            `
       
        }
    }else {

        for (let i= 0; i < products.length; i++) {


            const product = products[i];


            containerProducts.innerHTML += `
            
                <div class="product-card">
                    <div class="add-product">
                            <span class="add-product-button">Add to cart</span>
                            <span class="add-product-symbol">+</span>
                    </div>
                    <div class="product-image">
                        <img src= ${product.image} alt="" />
                    </div>
                    <div class="text-wrapper">
                        <span class="text-wrapper-title"> ${product.name} </span>
                        <div class="text-wrapper-categories">
                            <span> ${product.category} </span> 
                        </div>
                        <span class="text-wrapper-price">R$ ${product.price} </span>
                    </div>
                </div>`
                
        }
    }
})
