let wrapper = document.querySelector(".sliderWrapper");
let menuItems = document.querySelectorAll(".menuitems");

let ProductImg = document.querySelector(".productimage");
let ProductTitle = document.querySelector(".producttitle");
let ProductPrice = document.querySelector(".productprice");
let ProductColors = document.querySelectorAll(".colors");
const ProductSizes = document.querySelectorAll(".sizes");

let productButton = document.querySelector(".productbutton");
let payment = document.querySelector(".paymentdetails");
let close = document.querySelector(".closebutton");

let choosenProduct = products[0];

let products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "images/air.png",
      },
      {
        code: "darkblue",
        img: "images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "images/jordan.png",
      },
      {
        code: "green",
        img: "images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "images/blazer.png",
      },
      {
        code: "green",
        img: "images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "images/crater.png",
      },
      {
        code: "lightgray",
        img: "images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "images/hippie.png",
      },
      {
        code: "black",
        img: "images/hippie2.png",
      },
    ],
  },
];


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    ProductTitle.textContent = choosenProduct.title;
    ProductPrice.textContent = "$" + choosenProduct.price;
    ProductImg.src = choosenProduct.colors[0].img;
    ProductColors.forEach((colors, index) => {
      colors.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

ProductColors.forEach((colors, index) => {
  colors.addEventListener("click", () => {
    ProductImg.src = choosenProduct.colors[index].img;
  });
});

ProductSizes.forEach((sizes, index) => {
  sizes.addEventListener("click", () => {
    ProductSizes.forEach((sizes) => {
      sizes.style.backgroundColor = "white";
      sizes.style.color = "black";
    });
    sizes.style.backgroundColor = "black";
    sizes.style.color = "white";
  });
});


productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});