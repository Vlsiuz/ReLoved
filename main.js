//Dialog
$("#dialog").dialog({
  autoOpen: false,
  show: {
    effect: "blind",
    duration: 1000
  },
  hide: {
    effect: "explode",
    duration: 1000
  }
});

$("#opener").on("click", function () {
  $("#dialog").dialog("open");
});
//Hide menu
let isHide = false

$('.left-filter-bar').click(function () {

  if (isHide) {
    $('.hide-menu').hide(500)
    isHide = false
  } else {

    $(' .hide-menu').show(500)
    isHide = true
  }


})
//Mens shoes filter

  const shoes = [
    {
      title: 'Nike Air Vapormax Evo ',
      size: 42,
      price: 450,
      image: 'images/mens-shoes/nike2.jpg',
      href: 'nike-men-shoes.html'
    },
    {
      title: 'Y-3 Kaiwa',
      size: 42,
      price: 679,
      image:'images/mens-shoes/y3.jpg',
      href: 'y-3-men-shoes.html'
    },
    {
      title: 'Jordan W Delta 2 ',
      size: 45,
      price: 269,
      image:'images/mens-shoes/jordan.jpg',
      href: 'jordan-men-shoes.html'
    },
    {
      title: 'Reebok Zig Kinetica II ',
      size: 44,
      price: 359,
      image:'images/mens-shoes/reebok.jpg',
      href: 'reebok-mens-shoes.html'
    },
    {
      title: 'Dr. Martens 1460 ',
      size: 44,
      price: 369,
      image:'images/mens-shoes/dr.martens.jpg',
      href: 'drmartens-men-shoes.html'
    },
    {
      title: 'Adidas Terrex Hikster Mid',
      size: 41,
      price: 299,
      image:'images/mens-shoes/adidas.jpg',
      href: 'adidas-men-shoes.html'
    }
  ];


 

const $shoesTemplate = $('#hidenDiv');
const $shoesList = $('#shoesList')
const priceMetric = 'лв.'

function renderShoes(shoesArr){
  $shoesList.empty();
  shoesArr.forEach(function (shoe) {
    const $templateClone = $shoesTemplate.clone()
    $templateClone.attr('id', '');
    $templateClone.removeClass('d-none');
    $templateClone.find('.name-mens').text(shoe.title)
    $templateClone.find('.price-mens').text(`${shoe.price} ${priceMetric}`)
    $templateClone.find('.name-mens').text(shoe.title)
    $templateClone.find('.image-mens').css('background-image', `url(${shoe.image || ''})`)
    $templateClone.find('.full-click').attr('href',shoe.href)
    
    $shoesList.append($templateClone)

 
  })
}
 renderShoes(shoes);



  $('#sizeDropdown').change(function(){
      const sizeValue = $(this).val();
      if(!sizeValue) {
        renderShoes(shoes);
        return;
      }
      const filteredSize = shoes.filter(function(shoe){
      return shoe.size == sizeValue
    });
    
    renderShoes(filteredSize);
    ;

  });



$('#brandDropdown').change(function(){
    const NameValue = $(this).val();
    if(!NameValue) {
      renderShoes(shoes);
      return;
    }
    const filteredName = shoes.filter(function(shoe){
    return shoe.title == NameValue
  });
  renderShoes(filteredName)
});


//Woman shoes filter

const shoesWoman = [
  {
    title: 'Heron Preston Bubble Level Ankle Strap',
    size: 37,
    price: 1279,
    image: 'images/women-shoes/heron.jpg',
    href: 'heron-women-shoes.html'
  },
  {
    title: 'Kenzo Boot',
    size: 38,
    price: 1059,
    image:'images/women-shoes/kenzo.jpg',
    href: 'kenzo-women-shoes.html'
  },
  {
    title: 'Casadei Blade',
    size: 37,
    price: 1350,
    image:'images/women-shoes/casadei.jpg',
    href: 'casadei-women-shoes.html'
  },
  {
    title: 'Filling Pieces Low Top Ghost 683',
    size: 38,
    price: 569,
    image:'images/women-shoes/fp.jpg',
    href: 'fp-women-shoes.html'
  },
  {
    title: 'Nike W Air Vapormax 2020 Fk ',
    size: 37,
    price: 449,
    image:'images/women-shoes/nike.jpg',
    href: 'nike-women-shoes.html'
  },
  {
    title: 'Pinko Colored Sneakers',
    size: 38,
    price: 550,
    image:'images/women-shoes/pinko.jpg',
    href: 'pinko-women-shoes.html'
  }
];




const $shoesWomanTemplate = $('#hidenDiv2');
const $shoesWomanList = $('#shoesList2')
const priceWomanShoesMetric = 'лв.'

function renderWomanShoes(shoesArr){
  $shoesWomanList.empty();
  shoesArr.forEach(function (shoe) {
    const $templateClone = $shoesWomanTemplate.clone()
    $templateClone.attr('id', '');
    $templateClone.removeClass('d-none');
    $templateClone.find('.name-mens').text(shoe.title)
    $templateClone.find('.price-mens').text(`${shoe.price} ${priceWomanShoesMetric}`)
    $templateClone.find('.name-mens').text(shoe.title)
    $templateClone.find('.image-mens').css('background-image', `url(${shoe.image || ''})`)
    $templateClone.find('.full-click').attr('href',shoe.href)
    
    $shoesWomanList .append($templateClone)

 
  })
}
renderWomanShoes(shoesWoman);

$('#sizeDropdown2').change(function(){
  const sizeValue = $(this).val();
  if(!sizeValue) {
    renderWomanShoes(shoesWoman);
    return;
  }
  const filteredSize = shoesWoman.filter(function(shoe){
  return shoe.size == sizeValue
});

renderWomanShoes(filteredSize);
;

});



$('#brandDropdown2').change(function(){
const NameValue = $(this).val();
if(!NameValue) {
  renderWomanShoes(shoesWoman);
  return;
}
const filteredName = shoesWoman.filter(function(shoe){
return shoe.title == NameValue
});
renderWomanShoes(filteredName)
});


//Mens clothes filter

const mensClothes = [
  {
    title: 'Heron Preston Shortsleeve Turtleneck Ctnmb',
    size: 'M',
    price: 379,
    image: 'images/mens-clothes/heronpreston.jpg',
    href: 'heron-men-clothes.html'
  },
  {
    title: 'The North Face Hmlyn Insulated Parka',
    size: 'M',
    price: 449,
    image:'images/mens-clothes/tnf.jpg',
    href: 'tnf-men-clothes.html'
  },
  {
    title: 'Nike Nsw Club Joggers Brushed Back',
    size: 'L',
    price: 100,
    image:'images/mens-clothes/nike.jpg',
    href: 'nike-men-clothes.html'
  },
  {
    title: 'Helly Hansen Logo Crew Sweatshirt',
    size: 'L',
    price: 125,
    image:'images/mens-clothes/hh.jpg',
    href: 'hh-men-clothes.html'
  },
  {
    title: 'Napapijri Northfarer 2.0',
    size: 'S',
    price: 419,
    image:'images/mens-clothes/napapijri.jpg',
    href: 'napapijri-men-clothes.html'
  },
  {
    title: 'Jordan 23 Engineered Shortsleeve Crewneck Tee',
    size: 'L',
    price: 99,
    image:'images/mens-clothes/jordan.jpg',
    href: 'jordan-men-clothes.html'
  }
];
const $menClothesTemplate = $('#hidenDiv3');
const $menClothesList = $('#shoesList3')
const menClothesPriceMetric = 'лв.'

function renderManClothes(clothesArr){
  $menClothesList.empty();
  clothesArr.forEach(function (clothes) {
    const $templateClone = $menClothesTemplate.clone()
    $templateClone.attr('id', '');
    $templateClone.removeClass('d-none');
    $templateClone.find('.name-mens').text(clothes.title)
    $templateClone.find('.price-mens').text(`${clothes.price} ${menClothesPriceMetric}`)
    $templateClone.find('.name-mens').text(clothes.title)
    $templateClone.find('.image-mens').css('background-image', `url(${clothes.image || ''})`)
    $templateClone.find('.full-click').attr('href',clothes.href)
    
    $menClothesList.append($templateClone)

 
  })
}
renderManClothes(mensClothes);

$('#sizeDropdown3').change(function(){
  const sizeValue = $(this).val();
  if(!sizeValue) {
    renderManClothes(mensClothes);
    return;
  }
  const filteredSize = mensClothes.filter(function(clothes){
  return clothes.size == sizeValue
});

renderManClothes(filteredSize);
;

});



$('#brandDropdown3').change(function(){
const NameValue = $(this).val();
if(!NameValue) {
  renderManClothes(mensClothes);
  return;
}
const filteredName = mensClothes.filter(function(clothes){
return clothes.title == NameValue
});
renderManClothes(filteredName)
});

//Women clothes filter


const WomenClothes = [
  {
    title: 'Versace Jeans Couture Piumino Corto',
    brand:'versace',
    size: 'M',
    price: 1159,
    image: 'images/women-clothes/versace.jpg',
    href: 'versace-women-clothes.html'
  },
  {
    title: 'Calvin Klein Jeans High Rise Skinny Ankle',
    brand:'ck',
    size: 'M',
    price: 219,
    image:'images/women-clothes/ck.jpg',
    href: 'ck-women-clothes.html'
  },
  {
    title: 'Alexander Wang Logo Terry Sweatshirt',
    brand: 'wang',
    size: 'S',
    price: 380,
    image:'images/women-clothes/aw.jpg',
    href: 'wang-women-clothes.html'
  },
  {
    title: 'Prada Rhinestone-Embellished Shift Dress',
    brand:'prada',
    size: 'S',
    price: 8046,
    image:'images/women-clothes/prada.jpg',
    href: 'prada-women-clothes.html'
  },
  {
    title: 'DSQUARED2 Dress Regular Fit',
    brand: 'dsq2',
    size: 'M',
    price: 1159,
    image:'images/women-clothes/dsquared2.jpg',
    href: 'dsq2-women-clothes.html'
  },
  {
    title: 'VERSACE JEANS COUTURE',
    brand: 'versace',
    size: 'S',
    price: 793,
    image:'images/women-clothes/bluza.jpg',
    href: 'versace2-women-clothes.html'
  }
];


const $womenClothesTemplate = $('#hidenDiv4');
const $womenClothesList = $('#shoesList4')
const $womenClothesPriceMetric = 'лв.'

function renderWomenClothes(clothesArr){
  $womenClothesList.empty();
  clothesArr.forEach(function (clothes) {
    const $templateClone = $womenClothesTemplate.clone()
    $templateClone.attr('id', '');
    $templateClone.removeClass('d-none');
    $templateClone.find('.name-mens').text(clothes.title)
    $templateClone.find('.price-mens').text(`${clothes.price} ${$womenClothesPriceMetric}`)
    $templateClone.find('.name-mens').text(clothes.title)
    $templateClone.find('.image-mens').css('background-image', `url(${clothes.image || ''})`)
    $templateClone.find('.full-click').attr('href',clothes.href)
    
    $womenClothesList.append($templateClone)

 
  })
}


renderWomenClothes(WomenClothes);



$('#sizeDropdown4').change(function(){
  const sizeValue = $(this).val();
  if(!sizeValue) {
    renderWomenClothes(WomenClothes);
    return;
  }
  const filteredSize = WomenClothes.filter(function(clothes){
  return clothes.size == sizeValue
});

renderWomenClothes(filteredSize);
;

});



$('#brandDropdown4').change(function(){
const NameValue = $(this).val();
if(!NameValue) {
  renderWomenClothes(WomenClothes);
  return;
}
const filteredName = WomenClothes.filter(function(clothes){
return  clothes.brand  == NameValue
});
renderWomenClothes(filteredName)
});

//Mens accessories filter

const mensAccessories = [
  {
    title: 'Ftshp 10th Anniversary Socks',
    brand:'ftshp',
    size: 'M',
    price: 29,
    image: 'images/mens-accessories/socks.jpg',
    href: 'socks-men-acc.html'
  },
  {
    title: 'Heron Preston Tie Dye Bucket Hat',
    brand:'heron preston',
    size: 'UNI',
    price: 199,
    image:'images/mens-accessories/hat.jpg',
    href: 'heron-men-acc.html'
  },
  {
    title: 'Versace Jeans Couture Range Warranty Label Waist Bag',
    brand: 'versace',
    size: 'UNI',
    price: 289,
    image:'images/mens-accessories/versace.jpg',
    href: 'versace-men-acc.html'
  },
  {
    title: 'New Era England Rugby Cotton Navy Casual Classic Cap',
    brand:'new era',
    size: 'UNI',
    price: 49,
    image:'images/mens-accessories/newera.jpg',
    href: 'ne-men-acc.html'
  },
  {
    title: 'Under Armour Heatgear Novelty Crew 3 Pack',
    brand: 'ua',
    size: 'M',
    price: 35,
    image:'images/mens-accessories/ua.jpg',
    href: 'ua-men-acc.html'
  },
  {
    title: 'Jordan Jan Aj1 Crossbody',
    brand: 'jordan',
    size: 'UNI',
    price: 69,
    image:'images/mens-accessories/aj.jpg',
    href: 'jordan-men-acc.html'
  }
];


const $menAccTemplate = $('#hidenDiv5');
const $menAccList = $('#shoesList5')
const $menAccPriceMetric = 'лв.'

function renderMenAcc(accArr){
  $menAccList.empty();
  accArr.forEach(function (accessories) {
    const $templateClone = $menAccTemplate.clone()
    $templateClone.attr('id', '');
    $templateClone.removeClass('d-none');
    $templateClone.find('.name-mens').text(accessories.title)
    $templateClone.find('.price-mens').text(`${accessories.price} ${$menAccPriceMetric}`)
    $templateClone.find('.name-mens').text(accessories.title)
    $templateClone.find('.image-mens').css('background-image', `url(${accessories.image || ''})`)
    $templateClone.find('.full-click').attr('href',accessories.href)
    
    $menAccList.append($templateClone)

 
  })
}


renderMenAcc(mensAccessories);
  
  
  
$('#sizeDropdown5').change(function(){
  const sizeValue = $(this).val();
  if(!sizeValue) {
    renderMenAcc(mensAccessories);
    return;
  }
  const filteredSize = mensAccessories.filter(function(accessories){
  return accessories.size == sizeValue
});

renderMenAcc(filteredSize);

});



$('#brandDropdown5').change(function(){
const NameValue = $(this).val();
if(!NameValue) {
  renderMenAcc(mensAccessories);
  return;
}
const filteredName = mensAccessories.filter(function(accessories){
return  accessories.brand  == NameValue
});
renderMenAcc(filteredName)
});

//Women accessories filter


const womenAccessories = [
  {
    title: 'PINKO Love Bell Simply',
    brand:'pinko',
    size: 'UNI',
    price: 596,
    image: 'images/women-accessories/pinko-damska-chanta-love-bell-simply-cl-pe-22-pltt-1p22l1-y7sp-cheren.jpg',
    href: 'pinko-women-acc.html'
  },
  {
    title: 'Heron Preston Nylon Tote Bag',
    brand:'heron preston',
    size: 'UNI',
    price: 599,
    image:'images/women-accessories/heron.jpg',
    href: 'heron-women-acc.html'
  },
  {
    title: 'PINKO Love Eyelet Belt H8',
    brand: 'pinko',
    size: '105',
    price: 492,
    image:'images/women-accessories/pinkokolan.jpg',
    href: 'pinko2-women-acc.html'
  },
  {
    title: 'JIMMY CHOO KYLA/S 25TH ',
    brand:'jimmychoo',
    size: 'UNI',
    price: 831,
    image:'images/women-accessories/jim.jpg',
    href: 'jimmy-women-acc.html'
  },
  {
    title: 'CHIARA FERRAGNI iphone13',
    brand: 'case',
    size: 'UNI',
    price: 71,
    image:'images/women-accessories/case.jpg',
    href: 'case-women-acc.html'
  },
  {
    title: 'Canada Goose Arctic wool beanie',
    brand: 'canada goose',
    size: 'UNI',
    price: 502,
    image:'images/women-accessories/cg.jpg',
    href: 'cg-women-acc.html'
  }
];


const $womenAccTemplate = $('#hidenDiv6');
const $womenAccList = $('#shoesList6')
const $womenAccPriceMetric = 'лв.'

function renderWomenAcc(accArr){
  $womenAccList.empty();
  accArr.forEach(function (accessories) {
    const $templateClone = $womenAccTemplate.clone()
    $templateClone.attr('id', '');
    $templateClone.removeClass('d-none');
    $templateClone.find('.name-mens').text(accessories.title)
    $templateClone.find('.price-mens').text(`${accessories.price} ${$womenAccPriceMetric}`)
    $templateClone.find('.name-mens').text(accessories.title)
    $templateClone.find('.image-mens').css('background-image', `url(${accessories.image || ''})`)
    $templateClone.find('.full-click').attr('href',accessories.href)
    
    $womenAccList.append($templateClone)

 
  })
}


renderWomenAcc(womenAccessories);
  



$('#sizeDropdown6').change(function(){
  const sizeValue = $(this).val();
  if(!sizeValue) {
    renderWomenAcc(womenAccessories);
    return;
  }
  const filteredSize = womenAccessories.filter(function(accessories){
  return accessories.size == sizeValue
});

renderWomenAcc(filteredSize);

});



$('#brandDropdown6').change(function(){
const NameValue = $(this).val();
if(!NameValue) {
  renderWomenAcc(womenAccessories);
  return;
}
const filteredName = womenAccessories.filter(function(accessories){
return  accessories.brand  == NameValue
});
renderWomenAcc(filteredName)


})



//Sidebar 
let isVisible = true
$('#tshirt').click(function(){
  if(isVisible){
    $('.filter').show(1500)
    isVisible = false
  }else {
    $('.filter').hide(1500)
    isVisible = true
  }
})

// Price Range Women Accessories

const $priceFilterMetric = 'lv.'
const $sliderRange = $("#slider-range")
$sliderRange.slider({
  range: true,
  min: 71,
  max: 831,
  values: [ 71, 831 ],
  slide: function( _, ui ) {
    $( "#amount" ).text( `${ui.values[0]}-${ui.values[1]} ${$priceFilterMetric}`);
  },
  change: function(_,ui){
    const[min, max] = ui.values;
    const filteredProduct = womenAccessories.filter(accessorie => accessorie.price >= min && accessorie.price <=max)
    renderWomenAcc(filteredProduct)
  }
});
$( "#amount" ).text(`${$sliderRange.slider("values",0)} - ${$sliderRange.slider("values",1)} ${$priceFilterMetric}`);



// Price Range Men Accessories
const $sliderRange2 = $("#slider-range2")
$sliderRange2.slider({
  range: true,
  min: 29,
  max: 289,
  values: [ 29, 831 ],
  slide: function( _, ui ) {
    $( "#amount2" ).text( `${ui.values[0]}-${ui.values[1]} ${$priceFilterMetric}`);
  },
  change: function(_,ui){
    const[min, max] = ui.values;
    const filteredProduct = mensAccessories.filter(accessorie => accessorie.price >= min && accessorie.price <=max)
    renderMenAcc(filteredProduct)
  }
});
$( "#amount2" ).text(`${$sliderRange2.slider("values",0)} - ${$sliderRange2.slider("values",1)} ${$priceFilterMetric}`);



// Price Range Women Clothes
const $sliderRange3 = $("#slider-range3")
$sliderRange3.slider({
  range: true,
  min: 219,
  max: 8046,
  values: [ 219, 8046 ],
  slide: function( _, ui ) {
    $( "#amount3" ).text( `${ui.values[0]}-${ui.values[1]} ${$priceFilterMetric}`);
  },
  change: function(_,ui){
    const[min, max] = ui.values;
    const filteredProduct = WomenClothes.filter(accessorie => accessorie.price >= min && accessorie.price <=max)
    renderWomenClothes(filteredProduct)
  }
});
$( "#amount3" ).text(`${$sliderRange3.slider("values",0)} - ${$sliderRange3.slider("values",1)} ${$priceFilterMetric}`);


// Price Range Men Clothes

const $sliderRange4 = $("#slider-range4")

$sliderRange4.slider({
  range: true,
  min: 99,
  max: 449,
  values: [ 99, 449 ],
  slide: function( _, ui ) {
    $( "#amount4" ).text( `${ui.values[0]}-${ui.values[1]} ${$priceFilterMetric}`);
  },
  change: function(_,ui){
    const[min, max] = ui.values;
    const filteredProduct = mensClothes.filter(accessorie => accessorie.price >= min && accessorie.price <=max)
    renderManClothes(filteredProduct)
  }
});
$( "#amount4" ).text(`${$sliderRange4.slider("values",0)} - ${$sliderRange4.slider("values",1)} ${$priceFilterMetric}`);



// Price Range Woman Shoes


const $sliderRange5 = $("#slider-range5")
$sliderRange5.slider({
  range: true,
  min: 449,
  max: 1350,
  values: [ 449, 1350 ],
  slide: function( _, ui ) {
    $( "#amount5" ).text( `${ui.values[0]}-${ui.values[1]} ${$priceFilterMetric}`);
  },
  change: function(_,ui){
    const[min, max] = ui.values;
    const filteredProduct = shoesWoman.filter(accessorie => accessorie.price >= min && accessorie.price <=max)
    renderWomanShoes(filteredProduct)
  }
});
$( "#amount5" ).text(`${$sliderRange5.slider("values",0)} - ${$sliderRange5.slider("values",1)} ${$priceFilterMetric}`);



// Price Range Men Shoes

const $sliderRange6 = $("#slider-range6")

$sliderRange6.slider({
  range: true,
  min: 269,
  max: 679,
  values: [ 269, 679 ],
  slide: function( _, ui ) {
    $( "#amount6" ).text( `${ui.values[0]}-${ui.values[1]} ${$priceFilterMetric}`);
  },
  change: function(_,ui){
    const[min, max] = ui.values;
    const filteredProduct = shoes.filter(accessorie => accessorie.price >= min && accessorie.price <=max)
    renderShoes(filteredProduct)
  }
});
$( "#amount6" ).text(`${$sliderRange6.slider("values",0)} - ${$sliderRange6.slider("values",1)} ${$priceFilterMetric}`);




/*

*/













