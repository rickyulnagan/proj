//(function ($) {
    infogwrap = $("#infog-wrap");
    imgPath = "https://media.philstar.com/infog/dining-guide-greenhills-estancia-tiendesitas/";

/* ------
    MODEL
*/

    var init_tab = [
        // 0
        { 
            iconSrc: imgPath + "icon1.png",
            pinSrc: imgPath + "pin1.png",
            title: "Filipino Comfort Food",
            className: "filipino-comfort-food"
        },
        // 1
        {
            iconSrc: imgPath + "icon2.png",
            pinSrc: imgPath + "pin2.png",
            title: "Something Seafood",
            className: "something-seafood"
        },
        // 2
        {
            iconSrc: imgPath + "icon3.png",
            pinSrc: imgPath + "pin3.png",
            title: "Modern Dining",
            className: "modern-dining"
        },
        // 3
        {
            iconSrc: imgPath + "icon4.png",
            pinSrc: imgPath + "pin4.png",
            title: "Taste of Asia",
            className: "taste-of-asia"
        },
        // 4
        {
            iconSrc: imgPath + "icon5.png",
            pinSrc: imgPath + "pin5.png",
            title: "Desserts Destination",
            className: "desserts-destination"
        },
        // 5
        {
            iconSrc: imgPath + "icon6.png",
            pinSrc: imgPath + "pin6.png",
            title: "Fusion Flavors",
            className: "fusion-flavors"
        },
        // 6
        {
            iconSrc: imgPath + "icon7.png",
            pinSrc: imgPath + "pin7.png",
            title: "Hang Out Place",
            className: "hang-out-place"
        }
    ]; 

    var infog_details = [
        {
            ID: 1,
            name: "Manam",
            mainPhoto: {
                src: imgPath + "manam/manam-lead-sisig.jpg",
                caption: "Among Filipino food, sisig is a favorite! And among the many restaurants, Manam serves up the best sisig in Metro Manila! This along with other Filipino dishes, classic or with a twist."
            },
            mustTry: {
                label: "House Crispy Sisig, Sinigang na Beef Short Rib and Watermelon, Ube or Classic Champorado",
                list: [
                    imgPath + "manam/manam-photo-1-sinigang.jpg",
                    imgPath + "manam/manam-photo-2-champorado.jpg",
                    imgPath + "manam/manam-photo-3-breakfast-c.jpg",
                ]
            },
            location: "Ground Floor, O Square 2, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 2,
            name: "Bangus",
            className: "Bangus",
            mainPhoto: {
                src: imgPath + "bangus/pinalutong-na-bangus1.jpg",
                caption: "Choose from healthy seafood options and signature milkfish dishes at fish specialty restaurant Bangus, cooking since the 1970s."
            },
            mustTry: {
                label: "Adobong Bangus sa Dilaw na Luya, Pinalutong na Bangus",
                list: [
                    imgPath + "bangus/adobong-bangus.jpg",
                    imgPath + "bangus/pinalutong-na-bangus2.jpg"
                ]
            },
            location: "Ground Floor, Connecticut Carpark Arcade, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 3,
            name: "Blue Posts",
            className: "Blue-Posts",
            mainPhoto: {
                src: imgPath + "blue%20posts%20boiling/lemon-butter-shrimps.jpg",
                caption: "Best eaten with hands are baggies of freshest crabs and shrimps here at Blue Posts, which is Davao’s renowned seafood restaurant."
            },
            mustTry: {
                label: "Garlic Lemon Butter Shrimp, Garlic Fried Crab",
                list: [
                    imgPath + "blue%20posts%20boiling/garlic-fried-crab.jpg"
                ]
            },
            location: "2nd Floor, O Square 1, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 4,
            name: "Gringo",
            className: "Gringo",
            mainPhoto: {
                src: imgPath + "gringo/babybackribs.jpg",
                caption: "Satisfy cravings for Latin American and Tex-Mex flavors at Gringo-Chicken, Ribs and Friends. Big servings of colorful dishes are best shared."
            },
            mustTry: {
                label: "Original or Southern Spice Chicken, Gringo Baby Back Ribs",
                list: [
                    imgPath + "gringo/32764898_2094321203930415_6472097393847304192_o.jpg",
                    imgPath + "gringo/southern-spice-chicken.jpg",
                    imgPath + "gringo/original-chicken---ribs.jpg"
                ]
            },
            location: "Ground Floor, O Square 1, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 5,
            name: "Wildflour",
            className: "Wildflour",
            mainPhoto: {
                src: imgPath + "wildflour/ube-leche-flan.jpg",
                caption: "Choose from a bountiful pastry assortment, cooked and baked fresh in-house at Wildflour Café and Bakery, which also offers a full bistro and dinner menu."
            },
            mustTry: {
                label: "Ube Leche Flan, everything out of the oven",
                list: [
                    imgPath + "wildflour/Wild-Mushroom-Toast.jpg",
                    imgPath + "wildflour/Garlic-Cranberry-Walnut-Bread.jpg"
                ]
            },
            location: "Ground Floor, O Square 1, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 6,
            name: "SGS House of Minis",
            className: "SGS-House-of-Minis",
            mainPhoto: {
                src: imgPath + "house%20of%20minis/angus-burger.jpg",
                caption: "Indulge in steak specialties of the house, prime cuts served in sizzling and complemented with soup of the day, salad and dinner rolls."
            },
            mustTry: {
                label: "Angus Burger with Caramelized Onions, Swiss Steak with Cheese Sauce",
                list: [
                    imgPath + "house%20of%20minis/Grilled-Garlic-Chicken.jpg",
                    imgPath + "house%20of%20minis/HOM-Salpicao.jpg",
                    imgPath + "house%20of%20minis/T-Bone-Steak.jpg"
                ]
            },
            location: "Ground Floor, Shoppesville, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 7,
            name: "Kamameshi Town",
            className: "Kamameshi-Town",
            mainPhoto: {
                src: imgPath + "kamemashi/gyu.jpg",
                caption: "Experience Japan’s authentic and historic kamameshi or kettle rice flavored with sauces like soy and mirin then topped with chicken, salmon and shrimp."
            },
            mustTry: {
                label: "Tori Kamameshi, Buta Kamameshi, Gyu Kamameshi",
                list: [
                    imgPath + "kamemashi/32977846_1280696458730928_1175355935565021184_o.jpg",
                    imgPath + "kamemashi/36759714_1320493124751261_8290776414592958464_n.jpg",
                    imgPath + "kamemashi/39910949_1375684812565425_729248750660222976_n.jpg"
                ]
            },
            location: "Ground Floor, Missouri Building, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 8,
            name: "Lugang Café",
            className: "Lugang-Cafe",
            mainPhoto: {
                src: imgPath + "lugang/xiao-long-bao.jpg",
                caption: "Head on to Lugang Café if looking for the perfect xiao long bao. Fourteen, world-class Chinese chefs cook contemporary Taiwanese cuisine here."
            },
            mustTry: {
                label: "Steamed Pork Xiao Long Bao, Taiwanese Fried Pork Chop",
                list: [
                    imgPath + "lugang/taiwanese-fried-pork.jpg",
                    imgPath + "lugang/xiao-long-bao2.jpg",
                    imgPath + "lugang/xiao-long-bao3.jpg"
                ]
            },
            location: "Ground Floor, O Square 1, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 9,
            name: "Kimono Ken",
            className: "Kimono-Ken",
            mainPhoto: {
                src: imgPath + "kimono%20ken/chirashi.jpg",
                caption: "Enjoy contemporary and fusion flavors at Kimono Ken, the go-to casual Japanese dining destination in the metro."
            },
            mustTry: {
                label: "Uni Spaghetti, Uzura Tamago Bacon Yaki, Chirashi Bowl",
                list: [
                    imgPath + "kimono%20ken/uni-spag.jpg",
                    imgPath + "kimono%20ken/ebi-TEMPURA.jpg"
                ]
            },
            location: "2nd Floor, O Square 1, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 10,
            name: "Samgyeopmasarap",
            className: "Samgyeopmasarap",
            mainPhoto: {
                src: imgPath + "samgyeopmasarap/Samgyeopmasarap.jpg",
                caption: "Grill unlimited beef and pork slices at this Korean barbecue place. Samgyeopmasarap also refills side dishes."
            },
            mustTry: {
                label: "Unlimited Pork BBQ, Unlimited Beef BBQ",
                list: [
                    imgPath + "samgyeopmasarap/Samgyeopmasarap(1).jpg",
                    imgPath + "samgyeopmasarap/Samgyeopmasarap(3).jpg"
                ]
            },
            location: "2nd Floor, Connecticut Carpark Arcade, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 11,
            name: "Le Ching",
            className: "Le-Ching",
            mainPhoto: {
                src: imgPath + "leching/stewedbeef.jpg",
                caption: "Visit Le Ching Tea House and have a fill of the best dim sums in town. The Chinese restaurant is known for authentic Cantonese cuisine."
            },
            mustTry: {
                label: "Dim sum, Chicken & Mushroom Rice, Stewed Beef Brisket Noodles",
                list: [
                    imgPath + "leching/spareribs.jpg",
                    imgPath + "leching/siomai.jpg",
                ]
            },
            location: "Ground Floor, Shoppesville, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 12,
            name: "Farmacy",
            className: "Farmacy",
            mainPhoto: {
                src: imgPath + "farmacy/farmacy-lead-photo-c.jpg",
                caption: "Relive the memories of ice cream parlors from the 90s at Farmacy Ice Cream & Soda Fountain, a destination for everything sweet and cool."
            },
            mustTry: {
                label: "Candied Bacon Ice Cream, Pick Me Up Sundae",
                list: [
                    imgPath + "farmacy/farmacy-photo-2.jpg",
                    imgPath + "farmacy/farmacy-photo-3.jpg",
                ]
            },
            location: "Ground Floor, O Square 1, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 13,
            name: "Three Sisters",
            className: "Three-Sisters",
            mainPhoto: {
                src: imgPath + "three%20sisters/porkbbq2.jpg",
                caption: "Look no more for feel-good Filipino flavors that taste like home at Three Sisters of Pasig. It offers group meals perfect for families and friends."
            },
            mustTry: {
                label: "Pork Barbecue, Pancit Bihon, Halo-Halo",
                list: [
                    imgPath + "three%20sisters/prokbbq-pancit.jpg",
                    imgPath + "three%20sisters/pork-bbq.jpg",
                    imgPath + "three%20sisters/pancit.jpg"
                ]
            },
            location: "Building B, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 14,
            name: "Da Gabriele",
            className: "Da-Gabriele",
            mainPhoto: {
                src: imgPath + "da%20gabrielle/Antipasti-di-Montagna---Gabriele.jpg",
                caption: "Say “Delizioso!” at Da Gabriele Italian Restaurant where antipasti, Panini, pasta and pizza boasts of authentic flavors from their country of origin."
            },
            mustTry: {
                label: "Antipasti Di Montagna, Bucatini Alla Matriciana, Gabriele’s Four Ham Pizza",
                list: [
                    imgPath + "da%20gabrielle/Matriciana-di-Pasta---Gabriele.jpg",
                ]
            },
            location: "Ground Floor, Building A, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 15,
            name: "Tom Sawyer",
            className: "Tom-Sawyer",
            mainPhoto: {
                src: imgPath + "tom%20sawyer/crispy-chicken.jpg",
                caption: "Retro-inspired Tom Sawyer Fried Chicken cooks fried chicken the old-fashioned way. There’s also ribs, fish fillet and spaghetti, among others, in the menu."
            },
            mustTry: {
                label: "Tom Sawyer’s Krispy Chicken, Baby Back Ribs",
                list: [
                    imgPath + "tom%20sawyer/back-ribs.jpg",
                ]
            },
            location: "Ground Floor, Building A, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 16,
            name: "Masil",
            className: "Masil",
            mainPhoto: {
                src: imgPath + "masil/Premium-Set-B---Masil.jpg", 
                caption: "Have premium Korean barbecue in an upscale ambiance at Masil Korean Charcoal Grills Restaurant grilling finest imported meat."
            },
            mustTry: {
                label: "Premium Set of Saeng Galbi, Yangnyeom Galbi, LA Galbi and more",
                list: [
                    imgPath + "masil/Masil-photo-2.jpg",
                    
                ]
            },
            location: "Ground Floor, Building A, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 17,
            name: "Sentro 1771",
            className: "Sentro-1771",
            mainPhoto: {
                src: imgPath + "sentro/corned-beef-sinigang.jpg",
                caption: "Enter the home of Filipino modern cuisine. Sentro 1771 continues to infuse local dishes with modern twists while keeping true to their roots."
            },
            mustTry: {
                label: "Sinigang na Corned Beef, Fried Kesong Puti, Adobo Catfish Flakes, and Rated GG",
                list: [
                    imgPath + "sentro/catfish-adobo-flakes.jpg",
                    imgPath +"sentro/catfish-sentro-style.jpg",
                    imgPath +"sentro/rated-gg.jpg",
                ]
            },
            location: "Gastropub, Estancial Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 18,
            name: "XO46",
            className: "XO46",
            mainPhoto: {
                src: imgPath + "xo46/crispy-pata.jpg",
                caption: "Visit XO46 Heritage Bistro and eat the comforting and the familiar, the all-time and homegrown favorites, the best of Filipino food from around the country."
            },
            mustTry: {
                label: "Krispy Pata XO Style, Bicol Express Naga Style, Kare-Kareng Dagat",
                list: [
                    imgPath +"xo46/xo46-laing.jpg",
                    imgPath +"xo46/xo46-kare-kare.jpg",
                ]
            },
            location: "Lower Ground Floor, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 19,
            name: "Black Olive",
            className: "Black-Olive",
            mainPhoto: {
                src: imgPath + "black%20olive/paella.jpg",
                caption: "Taste continental cuisine at its finest in Black Olive, a pub-style restaurant boasting of Mediterranean and Italian menu and assortment of wine."
            },
            mustTry: {
                label: "Black Olive Paella, Mykonos Mussel Pot, Signature Crispy Pork Knuckles",
                list: [
                    imgPath +"black%20olive/29512570_894389400742559_4382548139639381039_n.jpg",
                    imgPath +"black%20olive/mussels.jpg",
                    imgPath +"black%20olive/pork-knuckle.jpg",
                ]
            },
            location: "Gastropub, Estancial Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 20,
            name: "Bistro Madrid",
            className: "Bistro-Madrid",
            mainPhoto: {
                src: imgPath + "bistro-madrid/arroz-caldero.jpg",
                caption: "Be transported to Spain’s capital at Café Madrid with its cold cuts selection, posh wine cellar, and authentic menu whipped up by the Spanish owner and chef."
            },
            mustTry: {
                label: "Arroz Al Caldero, Callos A La Penelope, Colgados de Toledo",
                list: [
                    imgPath + "bistro-madrid/colgados.jpg",
                    imgPath + "bistro-madrid/paella.jpg",
                    imgPath + "bistro-madrid/CALLOS-A-LA-PENeLOPE.jpg",
                ]
            },
            location: "Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 21,
            name: "Florabel",
            className: "Florabel",
            mainPhoto: {
                src: imgPath + "florabel/pan-fried-sea-bass.jpg",
                caption: "Feel tucked inside a garden while enjoying continental flavors and dishes inside Florabel, which also concocts refreshing sorbet drinks."
            },
            mustTry: {
                label: "The Chef’s Award-winning Adobo, Parma Ham and Melon Salad, Green Tea Seafood Rissoto",
                list: [
                    imgPath + "florabel/adobo.jpg",
                    imgPath + "florabel/US-Angus-Prime-Rib-eye.jpg",
                ]
            },
            location: "Ground Floor, North Wing, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        /* {
            ID: 22,
            name: "Spice and Claver",
            className: "Spice-and-Claver",
            mainPhoto: {
                src: imgPath + "spice%20and%20cleaver/pizza-sausage.jpg",
                caption: "Load in protein at Spice and Cleaver where artisanal sausages are meticulously prepared and grilled by hand. There’s also puffiza, pizza with puff dough crust."
            },
            mustTry: {
                label: "The Mask, Pizza Sausage, Farmer’s Ham and Onion, Baked Camembert",
                list: [
                    //imgPath + "spice%20and%20cleaver/pizza-sausage.jpg",
                ]
            },
            location: "Lower Ground Floor, Estancial Mall, Capitol Commons",
            codeMap: "code",
        }, */
        {
            ID: 23,
            name: "Highlands Prime Steakhouse",
            className: "Highlands-Prime-Steakhouse",
            mainPhoto: {
                src: imgPath + "highland%20prime%20steakhouse/1903986_665132206900004_1019487669_n.jpg",
                caption: "Get the best of the west at Highlands Prime Steakhouse that cooks imported meat to steak perfection in an old country ambiance."
            },
            mustTry: {
                label: "Prime Rib, Fillet Mignon, Cowboy Buffalo Wings",
                list: [
                    imgPath + "highland%20prime%20steakhouse/buffalo-wings.jpg",
                ]
            },
            location: "Ground Floor, North Wing, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 24,
            name: "Shi Lin",
            className: "Shi-Lin",
            mainPhoto: {
                src: imgPath + "shi-lin/shi-lin-lead-photo.jpg",
                caption: "Dine in for some authentic Taiwanese cuisine at Shi Lin. Bring friends and family for freshly steamed dim sum and more."
            },
            mustTry: {
                label: "Spicy Spareribs, Fresh Taiwanese Togu, Braised Beef Noodle Soup",
                list: [
                    imgPath + "shi-lin/shi-lin-spicy-spareribs.jpg",
                    imgPath + "shi-lin/shi-lin-noodle-soup.jpg",
                    imgPath + "shi-lin/shi-lin-tofu.jpg",
                ]
            },
            location: "Lower Ground Floor, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        /* {
            ID: 25,
            name: "Poke Poke",
            className: "Poke-Poke",
            mainPhoto: {
                src: imgPath + "poke%20poke/29694898_1784995781807313_3830447089561768605_n.jpg",
                caption: "Choose healthy with Hawaii’s poke-poke, a bowl of rice topped with seafood and vegetables of choice. Poke Poke also fuses Japanese, Korean, Italian and Californian flavors."
            },
            mustTry: {
                label: "Squash with Salted Egg, Shui Zhu Beef, Chinese Pepper Shrimp",
                list: [
                    imgPath + "poke%20poke/30705449_1789304048043153_3426710021466793250_n.jpg"
                ]
            },
            location: "Lower Ground Floor, Estancia Mall, Capitol Commons",
            codeMap: "code",
        }, */
        {
            ID: 26,
            name: "Churchill Bar",
            className: "Churchill-Bar",
            mainPhoto: {
                src: imgPath + "churchill/oldfashioned.jpg",
                caption: "End the night away with Churchill Bar’s iconic drinks inspired by the man himself, Winston Churchill."
            },
            mustTry: {
                label: "The Churchill, Gin and Tonic, Old Fashioned",
                list: [
                    imgPath + "churchill/26994040_2004340113147077_6609483886677872776_n.jpg",
                    imgPath +"churchill/Gin-and-tonic.jpg",
                ]
            },
            location: "Ground Floor, North Wing, Estancia, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 27,
            name: "CoCo Ichibanya",
            className: "Coco-ichibanya",
            mainPhoto: {
                src: imgPath + "coco-ichibanya/pork-omelet-curry.jpg",
                caption: "CoCo Ichibanya is the house of curry so satisfy the palate with this creamy and saucy Japanese dish paired with rice. Choose the toppings, from meats to vegetables, as well the level of spiciness."
            },
            mustTry: {
                label: "Pork Cutlet Omelet Curry, Pari-Pari Chicken and Vegetable Curry, Cheese Hamburg Steak Curry",
                list: [
                    imgPath + "coco-ichibanya/pork-omelet-curry-2.jpg",
                    imgPath +"coco-ichibanya/Pari-Pari-Chicken-Curry.jpg",
                    imgPath +"coco-ichibanya/Pari-PariChickenandVegetableCurry.jpg",
                    imgPath +"coco-ichibanya/32845208_2098441337103790_136925348397842432_n.jpg",
                    imgPath +"coco-ichibanya/40438564_2193334607614462_2289070543447523328_n.jpg",
                ]
            },
            location: "Lower Ground Floor, South Wing, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 28,
            name: "Motorino Pizzeria Napoletana",
            className: "Motorino-Pizzeria-Napoletana",
            mainPhoto: {
                src: imgPath + "motorino/Truffle-and-Honey-Pizza.jpg",
                caption: "Love pizzas? Then taste an authentic Napoletana (Neapolitan) pizza from Motorino Pizzeria. Originating from Naples, Italy, the Napoletana pizza has sparse but ultra tasty toppings, soupy center and spotted crust."
            },
            mustTry: {
                label: "Margherita, Quattro Formaggio, Soppressata Piccante, Classic Motorino Meatballs",
                list: [
                    imgPath + "motorino/Pasta-Arrabiatta-FB.jpg",
                    imgPath +"motorino/Parmesan-and-Mascarpone-pasta.jpg",
                ]
            },
            location: "Ground Floor, South Wing, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 29,
            name: "Buffalo Wild Wings",
            className: "Buffalo-Wild-Wings",
            mainPhoto: {
                src: imgPath + "buffalo-wings/wings.jpg",
                caption: "Wings, beer and your favorite sports? Head on over to Buffalo Wild Wings where good food, good times and good sporting matches can be had under one roof."
            },
            mustTry: {
                label: "Traditional Wings (12 Signature Sauces), The Sampler, Juicy Steak Burger",
                list: [
                    imgPath + "buffalo-wings/wings2.jpg",
                    imgPath +"buffalo-wings/wings3.jpg",
                    imgPath +"buffalo-wings/burger.jpg",
                ]
            },
            location: "Ground Floor, South Wing, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 30,
            name: "UCC Clockwork",
            className: "UCC-Clockwork",
            mainPhoto: {
                src: imgPath + "UCC/coffee.jpg",
                caption: "Perk up the day with a great cup of coffee at UCC Clockwork—best had to start a busy day. By brunch time, there’s a menu of wonderful and healthy dishes to choose from."
            },
            mustTry: {
                label: "Signature Café Mocha, Single Origin Coffee, Arr-oats Caldo, Adobo Floss Pasta Plate",
                list: [
                    imgPath + "UCC/arrozcaldo.jpg",
                    imgPath +"UCC/adobo-pasta.jpg"
                ]
            },
            location: "Ground Floor, South Wing, Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 31,
            name: "Rico's Lechon (OPENING SOON)",
            className: "Ricos-Lechon",
            mainPhoto: {
                src: imgPath + "ricos/original-lechon.jpg",
                caption: "No need to fly down south to Cebu to get a hefty serving of that beloved Cebu lechon! A visit to Rico’s Lechon, known as “Home of Cebu’s Best Lechon,” would be enough."
            },
            mustTry: {
                label: "Original Lechon, Spicy Lechon, Lechon Humba, Lechon Chicharon ni Rico",
                list: [
                    imgPath + "ricos/spicy-lechon.jpg",
                    imgPath +"ricos/lechon-chicaron.jpg",
                    imgPath +"ricos/lechon-humba.jpg"
                ]
            },
            location: "2nd Floor, Food Village, Building B, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 32,
            name: "K-Pub (OPENING SOON)",
            className: "Kpub",
            mainPhoto: {
                src: imgPath + "kpub/kpub-cover2.jpg",
                caption: "If craving for meat-all-you-can, then KPub is the place to be. Buzzing with the sounds of sizzling samgyupsal and Korean Music, you will surely get transported straight to downtown Seoul. It also houses the Green Room, the only Heineken Bar in the Philippines."
            },
            mustTry: {
                label: "So Bulgogi, JeyoukBokkum, GodungumGui",
                list: [
                    /* imgPath + "",
                    imgPath +"",
                    imgPath +"", */
                ]
            },
            location: "2nd Floor, Building B, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 33,
            name: "Aysee",
            className: "Aysee",
            mainPhoto: {
                src: imgPath + "masil/Papaitan-and-Sisig---Aysee.jpg",
                caption: "Aysee started as a snack bar in the late 80s, providing meals for Kapampangan PBA players. Thirty years later, it’s now recognized for having the best sisig in the Philippines."
            },
            mustTry: {
                label: "Pork Sisig, Kalderetang Kambing, Sizzling Dinakdakan, Papaitang Baka",
                list: [
                    imgPath + "aysee/Papaitang-Baka.jpg",
                    imgPath +"aysee/Kalderetang-Kambing.jpg",
                    imgPath + "aysee/porksisig.jpg",
                ]
            },
            location: "2nd Floor, Building B, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 34,
            name: "JT's Manukan",
            className: "JTs-Manukan",
            mainPhoto: {
                src: imgPath + "JTs/Chicken-Inasal.jpg",
                caption: "From a simple take-out counter in 2003, Joel Torre and his wife transformed  their manukan into what we know today—a full-service restaurant known for its delicious grilled chicken, marinated in the Ilonggo way."
            },
            mustTry: {
                label: "Chicken Inasal, Kansi, Boneless Bangus, Spareribs",
                list: [
                    imgPath + "JTs/Kansi.jpg",
                    imgPath +"JTs/Boneless-Bangus.jpg",
                    imgPath +"JTs/Spareribs.jpg",
                ]
            },
            location: "2nd Floor, Food Village, Building B, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 35,
            name: "Max's",
            className: "Maxs",
            mainPhoto: {
                src: imgPath + "max/friedchicken.jpg",
                caption: "If tradition has taste, then it would be definitely taste like Max’s. One of the longest running homegrown restaurants in the Philippines has been pleasing the Filipino palate for decades."
            },
            mustTry: {
                label: "Max’s Fried Chicken, Kare-Kare, Sinigang na Tiyan ng Bangus, Crispy Pata",
                list: [
                    imgPath + "max/sinigang.jpg",
                    imgPath +"max/kare-kare.jpg",
                    imgPath +"max/crispy-pata.jpg",
                ]
            },
            location: "Building C, Estancia Mall, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 36,
            name: "Ooma",
            className: "Ooma",
            mainPhoto: {
                src: imgPath + "ooma/ooma-lead-photo.jpg",
                caption: "Experience a bold new take on casual Japanese fare, through playful and creative dishes—paired with a range of beers and sakes. A buzzy Tsukiji Market-like setting completes the experience."
            },
            mustTry: {
                label: "Sushi Mixers, California Taco Maki Mixers, Pork and Squid Takoyaki Aburi Bowls",
                list: [
                    imgPath + "ooma/ooma-photo-1-sushi.jpg",
                    imgPath +"ooma/ooma-photo-2-maki.jpg",
                    imgPath +"ooma/ooma-photo-3-bowl.jpg",
                ]
            },
            location: "Ground Floor, O Square 2, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 37,
            name: "Rita's",
            className: "Ritas",
            mainPhoto: {
                src: imgPath + "ritas/ritas-lead-photo.jpg",
                caption: "Enter the sweet haven of Rita’s where authentic frozen custard and Italian ice can be enjoyed. This is the only and first of its kind in the Philippines and it promises to serve up happiness!"
            },
            mustTry: {
                label: "Frozen Custard, Italian Ice, Gelati (combination of Frozen Custard and Italian Ice)",
                list: [
                    imgPath + "ritas/ritas-photo-1.jpg",
                    imgPath +"ritas/ritas-photo-2.jpg",
                    imgPath +"ritas/ritas-photo-3.jpg",
                ]
            },
            location: "Ground Floor, O Square 2, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 38,
            name: "District 8",
            className: "District-8",
            mainPhoto: {
                src: imgPath + "district8/paella.jpg",
                caption: "Visit District 8 Manila and dine fine food inside a gastropub setting! Of course, there’s plenty of TVs to catch your favorite games, and at times, a band to play live music."
            },
            mustTry: {
                label: "Chicken Taco Rice, Wagyu Ajillo, Oyster and Uni, Paella y Callos",
                list: [
                    imgPath + "district8/wagyu.jpg",
                    imgPath +"district8/paella2.jpg",
                ]
            },
            location: "G-Strip, Greenhills Mall",
            codeMap: "code",
        },
        {
            ID: 39,
            name: "Bulacan Lugaw Kitchen",
            className: "Bulacan-Lugaw-Kitchen",
            mainPhoto: {
                src: imgPath + "bulakan-lugaw/tokwatbaboy.jpg",
                caption: "Bulacan’s best tasting lugaw with tokwa’t baboy is now at Metro Manila. This comfort food is sure to warm up tummies and hearts, especially on rainy days. Match with refreshing gulaman"
            },
            mustTry: {
                label: "LTB (Lugaw, Tokwa’t Baboy), Calumpit Longganisa, Liquid Gold Gulaman",
                list: [
                    imgPath + "bulakan-lugaw/lugaw.jpg",
                ]
            },
            location: "Ground Floor, Connecticut Arcade, Greenhills Mall",
            codeMap: "code",
        }, 
        {
            ID: 40,
            name: "Bijin Nabe",
            className: "Bijin-Nabe",
            mainPhoto: {
                src: imgPath + "bijin-nabe/chickendumplings.jpg",
                caption: "Experience a new food concept by Tsukada Nojo, the Bijin Nabe that is a collagen soup from organic chicken. Promising health benefits, the chicken collagen soup is cooked in a hot pot and can be added with various meat and vegetable toppings."
            },
            mustTry: {
                label: "Bijin Nabe Collagen Soup, Smoked Salmon Spring Rolls, Chicken Dumplings, Crispy eggplant Slices",
                list: [
                    imgPath + "bijin-nabe/crispy-eggplant-slice.jpg",
                    imgPath + "bijin-nabe/smoke-salmon-springrolls.jpg",
                    imgPath + "bijin-nabe/chicken-dumpling2.jpg"
                ]
            },
            location: "2nd Floor, Missouri Building, Greenhills Mall",
            codeMap: "code",
        },
        /* {
            ID: 41,
            name: "Dr. Tam",
            className: "Dr-Tam",
            mainPhoto: {
                src: imgPath + "no-photo2.jpg",
                caption: "Looking for a healthy option that doesn’t pinch on full flavor? At Dr. Tam, get the goodness of Filipino cuisine offered to you with all the freshness of vegan."
            },
            mustTry: {
                label: "Dr. Tam’s Vegan House Mechado, Dr. Tam’s Vegan House KareKare, Dr. Tam’s Soy Coffee, Dr. Tam’s Vegan Ice Cream",
                list: []
            },
            location: "Food Village, Tiendesitas, Ortigas East",
            codeMap: "code",
        }, */
        {
            ID: 42,
            name: "Kinuron",
            className: "Kinuron",
            mainPhoto: {
                src: imgPath + "kinuron/Baby-Back-Ribs-in-Hickory-BBQ-Sauce.jpg",
                caption: "From the Bicolano dialect, “kinuron” translates to “food cooked in a clay pot.” Dine here and know that every dish is true to the word, delivering only the best of Bicol."
            },
            mustTry: {
                label: "Baby Back Ribs in Hickory BBQ Sauce, Baked Salmon in Fruit Sauce, Waldorf Salad, Choco Beehives",
                list: [
                    imgPath + "kinuron/Baked-Salmon-in-fruit-Sauce.jpg",
                    imgPath + "kinuron/Waldorf-Salad.jpg",
                    imgPath + "kinuron/Choco-Beehives.jpg"
                ]
            },
            location: "2nd Floor, Building B, Tiendesitas, Ortigas East",
            codeMap: "code",
        },
        {
            ID: 43,
            name: "Fiery Style (OPENING SOON)",
            className: "Fiery-Style",
            mainPhoto: {
                src: imgPath + "fiery-style/Signature-Double-Dipped-Rib-Eye.jpg",
                caption: "Get only best fresh-off-the-grill dishes at Fiery Style. This Tex-Mex joint has all your Southwestern favorites. And then cap with an ice-cold beer or a refreshing cocktail."
            },
            mustTry: {
                label: "Signature Double Dipped Rib Eye, Lord of the Wings, Chili Chocolate Fudge, Minty Mojito",
                list: [
                    imgPath + "fiery-style/Lord-of-the-Wings.jpg",
                    imgPath + "fiery-style/Chili-Chocolate-Fudge.jpg",
                    imgPath + "fiery-style/Minty-Mojito.jpg"
                ]
            },
            location: "Lower Ground Floor, South Wing Estancia Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 44,
            name: "Tipsy Pig",
            className: "Tipsy-Pig",
            mainPhoto: {
                src: imgPath + "tipsypig/Jack-and-Coke-BBQ-Ribs.jpg",
                caption: "Tipsy Pig is not your typical watering hole. This delightful restaurant offers good food and an extensive list of signature brews and alcoholic drinks you can never say no to."
            },
            mustTry: {
                label: "Jack and Coke BBQ Ribs, Crispy River Prawn with Salted Egg Butter, Tipsy Boneless Crispy Pata, Signature Flavored Beer",
                list: [
                    imgPath + "tipsypig/Signature-Flavored-Beer.jpg",
                    imgPath + "tipsypig/Crispy-River-Prawn-with-Salted-Egg-Butter.jpg",
                    imgPath + "tipsypig/Tipsy-Boneless-Crispy-Pata.jpg"
                ]
            },
            location: "Gastropub, Estancial Mall, Capitol Commons",
            codeMap: "code",
        },
        {
            ID: 45,
            name: "Ikkoryu Fukuoka Ramen",
            className: "Ikkoryu-Fukuoka-Ramen",
            mainPhoto: {
                src: imgPath + "ikkouryu/Aburi-Chashu-Tonkotsu.jpg",
                caption: "With over 40 long years of tradition, this ramen restaurant comes to you with hearty and indulgent soul food. Now ready your palate for hearty servings brimming with umami."
            },
            mustTry: {
                label: "Aburi Chashu Tonkotsu, Ikkoryu Original Tonkotsu, Spicy Tobanjan Tonkotsu, Tantan Tonkotsu",
                list: [
                    imgPath + "ikkouryu/Tantan-Tonkotsu.jpg",
                    imgPath + "ikkouryu/Spicy-Tobanjan-Tonkotsu.jpg",
                    imgPath + "ikkouryu/Ikkoryu-Original-Tonkotsu.jpg"
                ]
            },
            location: "Lower Ground Floor, North Wing, Estancia Mall, Capitol Commons",
            codeMap: "code",
        }
    ];

/* 
 * GREENHILLS : San Juan City’s iconic retail center
*/

    infog_init( "greenhills-infog-v1", {
        title: "GREENHILLS",
        subtitle: "San Juan City’s iconic retail center",
        mapSrc: imgPath + "map-greenhills.jpg",
        pinSrc: imgPath + "pin-greenhills.png",
        marker: [
            {
                tabID: 0,
                list : [
                    {
                        ID: 1,
                        posX: "47.5",
                        posY: "86"
                    },
                    {
                        ID: 39,
                        posX: "75",
                        posY: "72.9"
                    }
                ]
            },
            {
                tabID: 1,
                list : [
                    {
                        ID: 2,
                        posX: "76",
                        posY: "52"
                    },
                    {
                        ID: 3,
                        posX: "35",
                        posY: "86.5"
                    }
                ]
            },
            {
                tabID: 2,
                list : [
                    {
                        ID: 4,
                        posX: "42",
                        posY: "82"
                    },
                    {
                        ID: 5,
                        posX: "22",
                        posY: "85.5"
                    },
                    {
                        ID: 6,
                        posX: "66",
                        posY: "39"
                    },
                    {
                        ID: 38,
                        posX: "71",
                        posY: "82.9"
                    }
                ]
            },
            {
                tabID: 3,
                list : [
                    {
                        ID: 7,
                        posX: "75",
                        posY: "28"
                    },
                    {
                        ID: 8,
                        posX: "34",
                        posY: "79"
                    },
                    {
                        ID: 9,
                        posX: "25",
                        posY: "79"
                    },
                    {
                        ID: 10,
                        posX: "76",
                        posY: "61"
                    },
                    {
                        ID: 11,
                        posX: "64",
                        posY: "54"
                    },
                    {
                        ID: 36,
                        posX: "53",
                        posY: "81"
                    },
                    {
                        ID: 40,
                        posX: "81",
                        posY: "35"
                    }
                ]
            },
            {
                tabID: 4,
                list : [
                    {
                        ID: 12,
                        posX: "28",
                        posY: "86.75"
                    },
                    {
                        ID: 37,
                        posX: "59",
                        posY: "85.9"
                    }
                    
                ]
            }
        ]
    });


/* 
 * TIENDESITAS : The heart of the new Ortigas East
*/

    infog_init("tiendesitas-infog-v1", {
        title: "TIENDESITAS",
        subtitle: "The heart of the new Ortigas East",
        mapSrc: imgPath + "TIENDESITAS-map.jpg",
        pinSrc: imgPath + "pin-tiende.png",
        marker: [
            {
                tabID: 0,
                list : [
                    {
                        ID: 13,
                        posX: "48",
                        posY: "81"
                    },
                    /* {
                        ID: 41,
                        posX: "66",
                        posY: "39"
                    }, */
                    {
                        ID: 31,
                        posX: "41",
                        posY: "45"
                    },
                    {
                        ID: 42,
                        posX: "59",
                        posY: "56"
                    },
                    {
                        ID: 34,
                        posX: "54",
                        posY: "73"
                    },
                    {
                        ID: 33,
                        posX: "43",
                        posY: "67"
                    },
                    {
                        ID: 35,
                        posX: "81",
                        posY: "76"
                    }
                ]
            },
            {
                tabID: 2,
                list : [
                    {
                        ID: 14,
                        posX: "26",
                        posY: "55"
                    },
                    {
                        ID: 15,
                        posX: "22",
                        posY: "63.5"
                    },
                ]
            },
            {
                tabID: 3,
                list : [
                    {
                        ID: 16,
                        posX: "32",
                        posY: "80" 
                    },
                    {
                        ID: 32,
                        posX: "47",
                        posY: "54" 
                    }
                ]
            }
        ]
    });

/* 
 * ESTANCIA : Inside the rising Capitol Commons
*/

    infog_init("estancia-infog-v1", {
        title: "ESTANCIA",
        subtitle: "Inside the rising Capitol Commons",
        mapSrc: imgPath + "estancia-map.jpg",
        pinSrc: imgPath + "pin-estancia.png",
        marker: [
            {
                tabID: 0,
                list : [
                    {
                        ID: 17,
                        posX: "13",
                        posY: "87"
                    },
                    {
                        ID: 18,
                        posX: "36",
                        posY: "48"
                    }
                ]
            },
            {
                tabID: 2,
                list : [
                    {
                        ID: 19,
                        posX: "3",
                        posY: "84" 
                    },
                    {
                        ID: 20,
                        posX: "83",
                        posY: "39"
                    },
                    {
                        ID: 21,
                        posX: "64",
                        posY: "57"
                    },
                    /* {
                        ID: 22,
                        posX: "65",
                        posY: "42"
                    }, */
                    {
                        ID: 23,
                        posX: "75",
                        posY: "55"
                    },
                    {
                        ID: 28,
                        posX: "27",
                        posY: "52"
                    },
                    {
                        ID: 30,
                        posX: "40",
                        posY: "69"
                    },
                    {
                        ID: 43,
                        posX: "31",
                        posY: "74"
                    }
                ]
            },
            {
                tabID: 3,
                list : [
                    {
                        ID: 24,
                        posX: "43",
                        posY: "48"
                    },
                    /* {
                        ID: 25,
                        posX: "48",
                        posY: "64"
                    }, */
                    {
                        ID: 27,
                        posX: "16",
                        posY: "55"
                    },
                    {
                        ID: 45,
                        posX: "62",
                        posY: "42"
                    }
                ]
            },
            {
                tabID: 6,
                list : [
                    {
                        ID: 26,
                        posX: "86",
                        posY: "59"
                    },
                    {
                        ID: 44,
                        posX: "2",
                        posY: "93"
                    },
                    {
                        ID: 29,
                        posX: "23",
                        posY: "79"
                    },
                ]
            },
        ]
    });

/* ------
    VIEWS
*/
    // blocks 
    function _marker(article, list, key, data){
        return '<div class="marker marker-' + key + ' ' + article.className + 
                '" style="left:' + list.posX + '%;top:' + list.posY + '%; " marker="' + article.name + '" article_id = "' + list.ID + 
                '">\
                    <span>' + article.name + '</span>\
                    <img src="'+ data.tab.pinSrc + '" >\
                </div>';
    }
    function _articleMainPhoto(data){
        return '<div class="main">\
                    <img src="'+ data.mainPhoto.src + '">\
                    <div class="caption">'+ data.mainPhoto.caption +'</div>\
                </div>';
    }
    function _articleMustTry(data){
        console.log(data);
        html = '<div class="must-try">\
                    <div class="sub-title">Must Try:</div>\
                    <div class="label">'+ data.mustTry.label + '</div>\
                    <div class="photos total-'+ data.mustTry.list.length +'">';
            $.each(data.mustTry.list, function (key, src) {
                html += '<div class="small-photo">\
                        <img src="'+ src +'">\
                    </div>';
        });
        html += '   </div>\
                </div>';
        return html;
    }
    function _location(data){
        return '<div class="location">\
                    <div class="sub-title">Location:</div>\
                    <div class="label">'+ data.location +'</div>\
                </div>';
    }
    function replace_pin(data, pinSrc){
        $.each(data, function (key, attr) {
            data[key].tab.pinSrc = pinSrc;
        });
        return data;
    }
    function filter_tab(marker) {
        var arrTablist = [];
        $.each(marker, function(key, data){
            id = parseInt(data.tabID);
            if (init_tab[id] ){
                arrTablist.push({
                    tab: init_tab[id],
                    list: data.list
                });
            }
        });
        return arrTablist;
    }
    
    function html_tablist(arrTab) {
        html = '<ul>';
        active = "active";
        $.each(arrTab, function(key, data) {
            html += '<li class="tab '+active+' tab-' + key + ' ' + data.tab.className + '" tabCont="'+data.tab.className+'">'+
                '<div class="icon icon-'+key+'"><img src="'+data.tab.iconSrc+'"></div>'+
                '<div class="title">'+data.tab.title+'</div>'+
            '</li>';
            if (active) active = "";
        });
        html += '<li class="tab show-all">\
            <div class="icon"><img src="'+imgPath+'icon6.png"></div>\
            <div class="title">SHOW ALL</div>\
        </li>';
        html += '</ul>';
        return html;
    }

    function html_tabContent(arrTab) {
        html = '';
        $.each(arrTab, function(key, data) {
            html += '<div class="tabcontent tabcontent-'+key+' '+data.tab.className+'">';
            $.each(data.list, function (key, list) {
                article = get_detail(list.ID);
                html += _marker(article, list, key, data);
            });
            html +='</div>'; 
        });
        return html;
    }

    function infog_init(selID, info) {
        arrTab = [];
        console.log(info.marker);
        arrTab = filter_tab(info.marker);
        arrTab = replace_pin(arrTab, info.pinSrc);
        //html template
        tplHTML = '<div class="infog-items ' + selID + '">\
            <div class="map"><img src="'+info.mapSrc+'"></div>\
            <div class="title-wrap">\
                <div class="infog-title">'+ info.title + '</div>\
                <div class="infog-subtitle">'+ info.caption + '</div>\
            </div>' +
            '<div class="tab-wrap">' + 
                '<div class="tab-list">'
                    + html_tablist(arrTab) +
                '</div>' +
                '<div class="tabcontent-list">'
                    + html_tabContent(arrTab) +
                '</div>' +
            '</div>\
            <div class="marker-details slider closed"><div class="content-wrap"></div></div>'+
        '</div>';
        infogwrap.append(tplHTML);
    }
    
    function get_detail(ID){
        article = {};
        $.each(infog_details, function (key, data) {
            if (ID == data.ID) {
                article = data;
                return false;
            }
        });
        return article;
    }
    function html_detail(elem, data) {
        html = '<div class="close"><span>x</span></div>\
                <div class="title">'+ data.title + '</div>' +
                _articleMainPhoto(data) + 
                _location(data) + 
                _articleMustTry(data);
        elem.find('.content-wrap').html(html).find(".close").on('click', function () {
            //console.log("closed");
            elem.addClass('closed').find('.content-wrap').html();
        })
        //console.log(data);
    }

/* ----------
    CONTROLLER
*/

    infogwrap.find('.tab').on('click', function(){
        _this = $(this);
        _this.parents("ul").find('.tab').removeClass("active");
        _this.addClass("active");
        if (_this.hasClass("show-all") ){
            _this.parents(".tab-wrap").find(".tabcontent").show(); return false;
        }
        tabcont = _this.attr("tabcont");
        _this.parents(".tab-wrap").find(".tabcontent").hide().parent().find("." + tabcont).show();
    });

    infogwrap.find('.marker').on('click', function(){
        console.log("click");
        _this = $(this);
        data = get_detail( _this.attr('article_id') );
        data.title = _this.attr("marker");
        _this.parents(".infog-items").find('.marker-details').removeClass('closed');
        html_detail(_this.parents(".infog-items").find(".marker-details"), data);
    });


//})(jQuery);