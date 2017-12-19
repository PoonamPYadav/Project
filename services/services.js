app.service("myservices", function() {
    this.mobileListary = function() {
      return [{

          Id: 1,
          img: "assets/img/mob1.jpg",
          title: "Samsung Galaxy J7 Prime",
          price: 50,
          os: "android",
          brand: "Samsung",
          features: [{
            sim: "Dual SIM",
            camera: "Primary Camera",
            scren: "Touchscreen",
            music: "Music Player"
          }]


        },
        {
          Id: 2,
          img: "assets/img/mob2.jpg",
          title: "Samsung Galaxy J2 Prime ",
          price: 230,
          os: "android",
          brand: "Samsung",
          features: [{
            sim: "Dual SIM",
            camera: "Primary Camera",
            scren: "Touchscreen",
            music: "Music Player"
          }]

        },
        {
          Id: 3,
          img: "assets/img/mob3.jpg",
          title: "Nokia 105 (Black, 16GB)",
          price: 200,
          os: "Window phone",
          brand: "Nokia",
          features: [{
            sim: "Dual SIM",
            camera: "Primary Camera",
            scren: "Touchscreen",
            music: "Music Player"
          }]

        }, {
          Id: 4,
          img: "assets/img/mob4.jpg",
          title: "Lenovo Z2 Plus (Black)",
          price: 150,
          os: "ioS",
          brand: "Lenovo"

        }, {
          Id: 5,
          img: "assets/img/mob5.jpg",
          title: "Nokia 6 (Matte Black, 32GB)",
          price: 100,
          os: "Window phone",
          brand: "Nokia"
        },
        {
          Id: 6,
          img: "assets/img/mob6.jpg",
          title: "Redmi 4 (Gold, 64GB)",
          price: 7899,
          os: "ioS",
          brand: "Mi"
        }
      ]


    }

    this.osListary = function() {
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



    this.mobfeatureListary = function() {
      return [

        {
          name: "Dual SIM"
        },
        {
          name: "Primary Camera"
        },
        {
          name: "Touchscreen"
        },
        {
          name: "Hotspot"
        },
        {
          name: "Music Player"
        }

      ];
    }



    this.mobileBrandListary = function() {
      return [{
          name: "Mi"
        },
        {
          name: "Lenovo"
        },
        {
          name: "Samsung"
        },
        {
          name: "Nokia"
        },
      ];

    }
  }

);
