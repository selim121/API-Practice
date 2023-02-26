const productList = () =>{
    const productList = document.getElementById('products');
    for (const product of data) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col');
        productDiv.innerHTML = `
        <div class="card p-4 h-100">
            <img src="${product.imageURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Car Name: ${product.name}</h5>
                <p class="card-text">Car Detail: ${product.description}</p>
            </div>
            <a href="#" class="btn btn-primary w-50">Call Price: ${product.price}</a>
        </div>
    `
        productList.appendChild(productDiv);
    }
}

productList();
