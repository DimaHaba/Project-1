var imageValues = []; // объявление массива

imageValues[0] = {
    name: "LEGITIM",
    link: "http://fozzyshop.com.ua/72653-thickbox_default/voda-mineralnaya-borjomi-evro-steklo.jpg",
    rate: "http://xn--c1adjcbdvaecb1a2a5j.xn--p1ai/template/images/logo-5688f464d8f7e.jpg",
    price:  "5$"
}
imageValues[1] = {
    name: "RODD",
    link: "http://www.ikea.com/us/en/images/products/rodd-floor-lamp-base-black__0120136_PE276562_S4.JPG",
    rate: "http://xn--c1adjcbdvaecb1a2a5j.xn--p1ai/template/images/logo-5688f464d8f7e.jpg",
    price:  "25$"
}
imageValues[2] = {
    name: "JARA",
    link: "http://www.ikea.com/us/en/images/products/jara-lamp-shade-white__0331375_PE522995_S4.JPG",
    rate: "http://xn--c1adjcbdvaecb1a2a5j.xn--p1ai/template/images/logo-5688f464d8f7e.jpg",
    price:  "11.99$"
}

imageValues[3] = {
    name: "GRUNDTAL",
    link: "http://www.ikea.com/us/en/images/products/grundtal-hanger-for-door__0209200_PE362809_S4.JPG",
    rate: "http://xn--c1adjcbdvaecb1a2a5j.xn--p1ai/template/images/logo-5688f464d8f7e.jpg",
    price:  "5,50$"
}
imageValues[4] = {
    name: "BOHOLMEN",
    link: "http://www.ikea.com/us/en/images/products/boholmen-colander-black__0122322_PE278601_S4.JPG",
    rate: "http://xn--c1adjcbdvaecb1a2a5j.xn--p1ai/template/images/logo-5688f464d8f7e.jpg",
    price:  "2,99$"
}

imageValues[5] = {
    name: "POTATISCHIPS GRÄDDFIL & LÖK",
    link: "http://www.ikea.com/us/en/images/products/potatischips-graddfil-lok-sour-cream-and-onion-potato-chips__79438_PE203428_S4.JPG",
    rate: "http://xn--c1adjcbdvaecb1a2a5j.xn--p1ai/template/images/logo-5688f464d8f7e.jpg",
    price:  "5,50$"
}
for (var i = 0; i < imageValues.length; i++) {
  var element = "<article><p><h3>"+imageValues[i].name+"</h3>"+
                "<br /> <div><img src='"+imageValues[i].link+"'width='120px' height='150px' /></div>"+
                "<br /> <img src='"+imageValues[i].rate+"'width='150px' height='50px' />"+
                "<br /> <h4>"+ imageValues[i].price +
                "</h4></p></article>";
  
  document.getElementById("output").innerHTML += element;
}