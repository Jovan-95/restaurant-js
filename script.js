/////!!!!! Restaurant Ordering System
const menuList = document.querySelector('#menu-items');
const orderItems = document.querySelector('#order-items');
const totalAmount = document.querySelector('#total-amount');
const placeOrderBtn = document.querySelector('#place-order');
const orderNumberDisplay = document.querySelector('#order-number')

class MenuItem {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getDetails() {
        console.log(`${this.name}, ${this.price}, ${this.category}`)
    }
}

class Order {
    constructor(orderNumber, items, totalAmount) {
        this.orderNumber = orderNumber;
        this.items = [];
        this.totalAmount = totalAmount;
    }

    addOrderItem(menuItem) {
        this.items.push(menuItem);
        this.calculateTotal(menuItem);
    }

    removeOrderItem(itemName) {
        console.log(this.items = this.items.filter(item => item.name !== itemName))
        this.items = this.items.filter(item => item.name !== itemName)
    }

    calculateTotal() {
        console.log(this.totalAmount = this.items.reduce((total, item) => total + item.price, 0));
        this.totalAmount = this.items.reduce((total, item) => total + item.price, 0);
    }

    getOrderDetails() {
        console.log(`Order Number: ${this.orderNumber}, Total: ${this.totalAmount}`);
        this.items.forEach(item => item.getDetails());
    }


}

class Restaurant {
    constructor() {
        this.orders = [];
        this.menu = [];
    }

    addMenuItem(menuItem) {
        this.menu.push(menuItem)
    }

    removeMenuItem(itemName) {
        console.log(this.menu = this.menu.filter(item => item.name !== itemName))
        this.menu = this.menu.filter(item => item.name !== itemName)
    }

    createOrder() {
        const orderNumber = this.orders.length + 1; // Generate a unique order number
        const newOrder = new Order(orderNumber, [], 0);
        this.orders.push(newOrder);
        return newOrder;
    }

    getOrderByNum(orderNum) {
        let orderByNum = this.orders.find(order => order.orderNumber === orderNum);
        console.log(orderByNum)
    }
}

/// WORKFLOW

const item1 = new MenuItem('Burger', 100, 'main course')
const item2 = new MenuItem('Pizza', 80, 'main course')
const item3 = new MenuItem('Fries', 60, 'appetizer')
const item4 = new MenuItem('Ice cream', 50, 'dessert')
const item5 = new MenuItem('Cake', 55, 'dessert')
const item6 = new MenuItem('Pancakes', 40, 'dessert')

// item1.getDetails();

const restaurant = new Restaurant();

restaurant.addMenuItem(item1);
restaurant.addMenuItem(item2)
restaurant.addMenuItem(item3)
restaurant.addMenuItem(item4)
restaurant.addMenuItem(item5)
restaurant.addMenuItem(item6)


// restaurant.removeMenuItem('Cake');
// restaurant.getOrderByNum(1);

let createdOrder = restaurant.createOrder();

// createOrder.addOrderItem(item1)
// createOrder.addOrderItem(item3)

/// DOM
console.log('-------------------------------------')

restaurant.menu.forEach((item) => {
    let createdOrderItem;
    let li = document.createElement('li');
    menuList.appendChild(li);

    let spanName = document.createElement('span');
    spanName.classList.add('item-name');
    li.appendChild(spanName);

    let spanPrice = document.createElement('span');
    spanPrice.classList.add('item-price');
    li.appendChild(spanPrice);

    let addBtn = document.createElement('button');
    addBtn.classList.add('add-button');
    li.appendChild(addBtn);

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button')
    li.appendChild(removeBtn);


    spanName.innerHTML = `${item.name}`;
    spanPrice.innerHTML = `${item.price}`;
    addBtn.innerHTML = 'Add to Order';
    removeBtn.innerHTML = 'Remove from order';

    addBtn.addEventListener('click', function (event) {
        li.classList.add('active')


        createdOrder.addOrderItem(item);

        console.log(createdOrder)
        // console.log(restaurant)

        createdOrder.items.forEach((item) => {
            createdOrderItem = item;
        });

        orderNumberDisplay.innerHTML = `<div style="color: blue; font-size: 24px;">ORDER NUMBER:${createdOrder.orderNumber}</div>`;

        orderItems.innerHTML += `<div style="color: blue; font-size: 24px;">ORDER NAME:${createdOrderItem.name}</div>`

        totalAmount.innerHTML = `<div>${createdOrder.totalAmount}$</div>`

    });

    removeBtn.addEventListener('click', function () {
        li.classList.remove('active');
        let notRemovedItems = [];

        totalAmount.innerHTML = ``;
        orderItems.innerHTML = ``;

        createdOrder.removeOrderItem(item.name);
        createdOrder.calculateTotal();


        createdOrder.items.forEach((item) => {
            createdOrderItem = item.name;
            notRemovedItems.push(createdOrderItem)
        });

        totalAmount.innerHTML = `<div>${createdOrder.totalAmount}$</div>`

        console.log(notRemovedItems)
        notRemovedItems.forEach((el) => {
            // console.log(el)
            orderItems.innerHTML += `<div style="color: blue; font-size: 24px;">ORDER NAME:${el}</div>`
        })


    })

});


placeOrderBtn.addEventListener('click', function () {
    if (createdOrder.items.length > 0) {
        orderNumberDisplay.innerHTML = `<div style="color: blue; font-size: 24px;">ORDER NUMBER:${createdOrder.orderNumber + 1}</div>`;
        orderItems.innerHTML = alert('Your order is created!');
        orderItems.innerHTML = `Your order is preparing...`

    } else {
        orderItems.innerHTML = alert('Your order is empty!!!');
        orderItems.innerHTML = `Add menu items to your order`

    }

})
