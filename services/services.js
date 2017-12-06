//angular.module('loginApp', [])
app.service("myservices",function(){

    this.getary = function(){
   return [{

     Id:1,
       img: "assets/img/mob1.jpg",
       title: "Samsung Galaxy J7 Prime (Gold, 32GB) with Offers",
       price: 5899,
       os: "ioS",
       features: [{
         sim: "Dual SIM",
         camera: "Primary Camera",
         scren: "Touchscreen",
         music: "Music Player"
       }]


     },
     {
         Id:2,
       img: "assets/img/mob2.jpg",
       title: "Samsung Galaxy J7 Prime (Gold, 32GB) with Offers",
       price: 9899,
       os: "android",
       features: [{
         sim: "Dual SIM",
         camera: "Primary Camera",
         scren: "Touchscreen",
         music: "Music Player"
       }]

     },
     {
         Id:3,
       img: "assets/img/mob3.jpg",
       title: "Nokia 105 (Black)",
       price: 8799,
       os: "Window phone",
       features: [{
         sim: "Dual SIM",
         camera: "Primary Camera",
         scren: "Touchscreen",
         music: "Music Player"
       }]

     }, {
         Id:4,
       img: "assets/img/mob4.jpg",
       title: "Lenovo Z2 Plus (Black)",
       price: 8899,
       os: "ioS"

     }, {
         Id:5,
       img: "assets/img/mob5.jpg",
       title: "Nokia 6 (Matte Black, 32GB)",
       price: 6899,
       os: "Window phone"
     },
     {
   Id:6,
       img: "assets/img/mob6.jpg",
       title: "Redmi 4 (Gold, 64GB)",
       price: 7899,
       os: "Blackberry"
     }]


      }



      this.getary2 = function(){
     return [{
          name: "Android"
        },
        {
          name: "iOS"
        },
        {
          name: "Blackberry"
        },
        {
          name: "Window phone"
        }


      ];

}



this.getary3 = function(){
return [

  {
    name: "Dual SIM"
  },
  {
    name: "Primary Camera"
  },
  {
    name: "Touchscreen "
  },
  {
    name: "Hotspot"
  },
  {
    name: "Music Player"
  }

];
}
}

);
