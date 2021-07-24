class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;
}

const productList = {
  products: [
    // new Product(),
    {
      title: 'A Pillow',
      imageUrl:
        'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1277&q=80',
      price: 19.99,
      description: 'A soft pillow.'
    },
    {
      title: 'A Carpet',
      imageUrl:
        'https://images.unsplash.com/photo-1600166898405-da9535204843?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60',
      price: 89.99,
      description: 'A nice carpet'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src='${prod.imageUrl}' alt='${prod.title}'>
          <div class='product-item__content'>
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>ADD TO CART</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();