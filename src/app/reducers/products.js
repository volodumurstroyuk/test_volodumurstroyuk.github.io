const initialState = {
    "collection": [
        {
            "id": 321,
            "name": "<b> Halloween <b/>",
            "clean_name": "Halloween",
            "description": null,
            "view": "plain",
            "is_all_tab": false,
            "name_color": "#ec8700",
            "description_color": null,
            "background_color": "#202020",
            "image_url": "//cdn-staging.swiftgift.me/images/categories/e2/40dbd20c3cab0401a9165e8b4ef909.jpg",
            "background_url": null,
            "short_name": "Halloween"
        },
        {
            "id": 322,
            "name": "Missing someone? Let them know!",
            "clean_name": "Missing someone? Let them know!",
            "description": null,
            "view": "carousel",
            "is_all_tab": false,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Missing someone? Let them know!"
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Flower Lovers</b><b/>",
            "clean_name": "Gifts for Flower Lovers",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#f582aa",
            "image_url": "//cdn.swiftgift.me/images/categories/c8/cdd35774feddaa7ebb959db3b5d47c.jpg",
            "background_url": null,
            "short_name": "Flower Lovers",
            "children": [
                {
                    "id": 123,
                    "name": "Bouquets"
                },
                {
                    "id": 299,
                    "name": "City Garden"
                },
                {
                    "id": 300,
                    "name": "Balloons"
                }
            ]
        },
        {
            "id": 320,
            "name": "Gifts for Libra",
            "clean_name": "Gifts for Libra",
            "description": null,
            "view": "carousel",
            "is_all_tab": false,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Gifts for Libra"
        },
        {
            "id": 326,
            "name": "<b> Business Gifts </b>",
            "clean_name": "Business Gifts",
            "description": null,
            "view": "plain",
            "is_all_tab": false,
            "name_color": null,
            "description_color": null,
            "background_color": "#070707",
            "image_url": "//cdn-staging.swiftgift.me/images/categories/9b/c9588af99245f4e9fcbea08d28a6c4.jpg",
            "background_url": null,
            "short_name": "Business Gifts"
        },
        {
            "id": 114,
            "name": "New Arrivals",
            "clean_name": "New Arrivals",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "New Arrivals"
        },
        {
            "id": 327,
            "name": "Loved one going through a hard time?",
            "clean_name": "Loved one going through a hard time?",
            "description": null,
            "view": "carousel",
            "is_all_tab": false,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Loved one going through a hard time?"
        },
        {
            "id": 105,
            "name": "SwiftGift Favourites",
            "clean_name": "SwiftGift Favourites",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "SwiftGift Favourites"
        },
        {
            "id": null,
            "name": "<b>Birthday Gifts</b>",
            "clean_name": "Birthday Gifts",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#fdb577",
            "image_url": "//cdn.swiftgift.me/images/categories/a8/b369b9950399565014f4911ad34b37.jpg",
            "background_url": null,
            "short_name": "Birthday Gifts",
            "children": [
                {
                    "id": 106,
                    "name": "Him"
                },
                {
                    "id": 107,
                    "name": "Her"
                }
            ]
        },
        {
            "id": 148,
            "name": "<small>Gifts for </small><br><b>Kinky Adults</b><b/>",
            "clean_name": "Gifts for Kinky Adults",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#000000",
            "image_url": "//cdn.swiftgift.me/images/categories/55/039c060a7c31c53d3821bf487bf4ba.jpg",
            "background_url": null,
            "short_name": "Kinky Adults"
        },
        {
            "id": 283,
            "name": "<b>Crap Gifts</b>",
            "clean_name": "Crap Gifts",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#f4bf72",
            "image_url": "//cdn.swiftgift.me/images/categories/f2/e5379b40336d0b95c53ac59d401364.jpg",
            "background_url": null,
            "short_name": "Crap Gifts"
        },
        {
            "id": 325,
            "name": "Know someone who is ill?  🤒",
            "clean_name": "Know someone who is ill?  🤒",
            "description": null,
            "view": "carousel",
            "is_all_tab": false,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Know someone who is ill? 🤒"
        },
        {
            "id": 324,
            "name": "Gifts for Bath Lovers",
            "clean_name": "Gifts for Bath Lovers",
            "description": null,
            "view": "carousel",
            "is_all_tab": false,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Gifts for Bath Lovers"
        },
        {
            "id": 323,
            "name": "<b> Harry Potter <br>\ngifts </br>",
            "clean_name": "Harry Potter \ngifts",
            "description": null,
            "view": "plain",
            "is_all_tab": false,
            "name_color": "#f3b71a",
            "description_color": null,
            "background_color": "#6c3c3c",
            "image_url": "//cdn-staging.swiftgift.me/images/categories/a2/2b20fcdf2f687b5e12672ccfe46a34.jpg",
            "background_url": null,
            "short_name": "gifts"
        },
        {
            "id": 312,
            "name": "Believe in Superheroes",
            "clean_name": "Believe in Superheroes",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Believe in Superheroes"
        },
        {
            "id": 295,
            "name": "<b>Game of Thrones </b>",
            "clean_name": "Game of Thrones",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": "#cac6bf",
            "description_color": null,
            "background_color": "#000000",
            "image_url": "//cdn.swiftgift.me/images/categories/72/4df827dfd77799e90d5a224443afe6.jpg",
            "background_url": null,
            "short_name": "Game of Thrones"
        },
        {
            "id": 138,
            "name": "<small>Gifts for</small><br>\n<b>Star Wars Fans</b>",
            "clean_name": "Gifts for\nStar Wars Fans",
            "description": null,
            "view": "plain",
            "is_all_tab": false,
            "name_color": null,
            "description_color": null,
            "background_color": "#3ba2ea",
            "image_url": "//cdn.swiftgift.me/images/categories/b4/cecd299403a7ab7bd12799c6a3738c.jpg",
            "background_url": null,
            "short_name": "Star Wars Fans"
        },
        {
            "id": 310,
            "name": "Colouring Books (stress relief)",
            "clean_name": "Colouring Books (stress relief)",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Colouring Books (stress relief)"
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Foodies</b>",
            "clean_name": "Gifts for Foodies",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#b4c557",
            "image_url": "//cdn.swiftgift.me/images/categories/aa/231a58ee914815fa58baf068b8bcfd.jpg",
            "background_url": null,
            "short_name": "Foodies",
            "children": [
                {
                    "id": 110,
                    "name": "Hampers"
                },
                {
                    "id": 111,
                    "name": "Yummies"
                },
                {
                    "id": 112,
                    "name": "Healthy"
                }
            ]
        },
        {
            "id": 113,
            "name": "Say <b>\"I Love You\"</b>",
            "clean_name": "Say \"I Love You\"",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#faafb8",
            "image_url": "//cdn.swiftgift.me/images/categories/34/0e7edb746efc188e54eb2d31164e4b.jpg",
            "background_url": null,
            "short_name": "Say \"I Love You\""
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Techies</b>",
            "clean_name": "Gifts for Techies",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#7eaddc",
            "image_url": "//cdn.swiftgift.me/images/categories/b1/be413905cf2963fb189557ad7ea65f.jpg",
            "background_url": null,
            "short_name": "Techies",
            "children": [
                {
                    "id": 109,
                    "name": "Electronics"
                },
                {
                    "id": 108,
                    "name": "Gadgets"
                }
            ]
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>The Home</b><b/>",
            "clean_name": "Gifts for The Home",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#f7c371",
            "image_url": "//cdn.swiftgift.me/images/categories/81/c2e5305b3dfbc1df1709172486e5de.jpg",
            "background_url": null,
            "short_name": "The Home",
            "children": [
                {
                    "id": 119,
                    "name": "Kitchen"
                },
                {
                    "id": 120,
                    "name": "Home"
                }
            ]
        },
        {
            "id": 137,
            "name": "Say <b>\"Congratulations\"</b>",
            "clean_name": "Say \"Congratulations\"",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#fd828b",
            "image_url": "//cdn.swiftgift.me/images/categories/de/539bab732ae87f9a7ed578e3e2affa.jpg",
            "background_url": null,
            "short_name": "Say \"Congratulations\""
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Beauty</b><b/>",
            "clean_name": "Gifts for Beauty",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": "#000001",
            "description_color": null,
            "background_color": "#fbe0a8",
            "image_url": "//cdn.swiftgift.me/images/categories/4c/9cafa0edca5dbb3e4af64af719569f.jpg",
            "background_url": null,
            "short_name": "Beauty",
            "children": [
                {
                    "id": 127,
                    "name": "His"
                },
                {
                    "id": 128,
                    "name": "Hers"
                }
            ]
        },
        {
            "id": 121,
            "name": "<small>Gifts for </small><br><b>Geeky Nerds</b><b/>",
            "clean_name": "Gifts for Geeky Nerds",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#cb344f",
            "image_url": "//cdn.swiftgift.me/images/categories/9f/4c56d448ea03928111217d7b8dbd77.jpg",
            "background_url": null,
            "short_name": "Geeky Nerds"
        },
        {
            "id": 131,
            "name": "Say <b>\"Thank You\"</b>",
            "clean_name": "Say \"Thank You\"",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#e5a9b9",
            "image_url": "//cdn.swiftgift.me/images/categories/cd/61621a139579d54d877dfc84ded88e.jpg",
            "background_url": null,
            "short_name": "Say \"Thank You\""
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Alcohol Lovers</b><b/>",
            "clean_name": "Gifts for Alcohol Lovers",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#bbc682",
            "image_url": "//cdn.swiftgift.me/images/categories/10/d2bff7f1b82baa9ff3f7a4c85ec7cd.jpg",
            "background_url": null,
            "short_name": "Alcohol Lovers",
            "children": [
                {
                    "id": 132,
                    "name": "Bottles"
                },
                {
                    "id": 133,
                    "name": "Accessories"
                }
            ]
        },
        {
            "id": 135,
            "name": "<small>Gifts for </small><br><b>Luxury Lovers</b><b/>",
            "clean_name": "Gifts for Luxury Lovers",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#32033a",
            "image_url": "//cdn.swiftgift.me/images/categories/4a/b5d74f4959ed8c38c753670b8e0acd.jpg",
            "background_url": null,
            "short_name": "Luxury Lovers"
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Those With Style</b><b/>",
            "clean_name": "Gifts for Those With Style",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#811864",
            "image_url": "//cdn.swiftgift.me/images/categories/c9/5fd395944180bfae534bb2866cb666.jpg",
            "background_url": null,
            "short_name": "Those With Style",
            "children": [
                {
                    "id": 116,
                    "name": "Her"
                },
                {
                    "id": 115,
                    "name": "Him"
                }
            ]
        },
        {
            "id": null,
            "name": "<b>Novelty & Mugs</b>",
            "clean_name": "Novelty & Mugs",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#f5ac89",
            "image_url": "//cdn.swiftgift.me/images/categories/4c/85ec95f3371d90816959192e70017f.jpg",
            "background_url": null,
            "short_name": "Novelty & Mugs",
            "children": [
                {
                    "id": 126,
                    "name": "Her"
                },
                {
                    "id": 125,
                    "name": "Him"
                },
                {
                    "id": 218,
                    "name": "Mugs"
                }
            ]
        },
        {
            "id": 219,
            "name": "<small>Gifts for </small><br><b>Parties</b><b/>",
            "clean_name": "Gifts for Parties",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": "#000001",
            "description_color": null,
            "background_color": "#a5ed77",
            "image_url": "//cdn.swiftgift.me/images/categories/38/9df6b040ad4575cffec64ead03956d.jpg",
            "background_url": null,
            "short_name": "Parties"
        },
        {
            "id": 122,
            "name": "Say <b>\"Sorry\"</b>",
            "clean_name": "Say \"Sorry\"",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#f77c84",
            "image_url": "//cdn.swiftgift.me/images/categories/83/9619c78da3c774f5c31c24a7ca4177.jpg",
            "background_url": null,
            "short_name": "Say \"Sorry\""
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Pet Lovers</b><b/>",
            "clean_name": "Gifts for Pet Lovers",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#f0ac9d",
            "image_url": "//cdn.swiftgift.me/images/categories/22/1122e60f44497c4330772f495c2a2e.jpg",
            "background_url": null,
            "short_name": "Pet Lovers",
            "children": [
                {
                    "id": 305,
                    "name": "Cats"
                },
                {
                    "id": 306,
                    "name": "Dogs"
                }
            ]
        },
        {
            "id": 134,
            "name": "Top Picks <b>Under £10</b>",
            "clean_name": "Top Picks Under £10",
            "description": null,
            "view": "carousel",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": null,
            "image_url": null,
            "background_url": null,
            "short_name": "Top Picks Under £10"
        },
        {
            "id": 212,
            "name": "<b>Gift Experiences</b>",
            "clean_name": "Gift Experiences",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#7eb7f1",
            "image_url": "//cdn.swiftgift.me/images/categories/17/b94d72cbdb71a2264e7641da2b8b21.jpg",
            "background_url": null,
            "short_name": "Gift Experiences"
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Baby Shower</b><b/>",
            "clean_name": "Gifts for Baby Shower",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": "#000001",
            "description_color": null,
            "background_color": "#f6e58e",
            "image_url": "//cdn.swiftgift.me/images/categories/74/39cf53a01bc8b10a463b35533bf5c4.jpg",
            "background_url": null,
            "short_name": "Baby Shower",
            "children": [
                {
                    "id": 130,
                    "name": "For Kids"
                },
                {
                    "id": 129,
                    "name": "For Parents"
                }
            ]
        },
        {
            "id": null,
            "name": "<small>Gifts for </small><br><b>Fitness Fanatics</b>",
            "clean_name": "Gifts for Fitness Fanatics",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#aa799c",
            "image_url": "//cdn.swiftgift.me/images/categories/3f/b7ca1876dacd6f208fd82307becf50.jpg",
            "background_url": null,
            "short_name": "Fitness Fanatics",
            "children": [
                {
                    "id": 118,
                    "name": "Food"
                },
                {
                    "id": 117,
                    "name": "Active Lifestyle"
                }
            ]
        },
        {
            "id": null,
            "name": "<small>Gifts for </small> <br>\n<b>Mum & Dad </b>",
            "clean_name": "Gifts for  \nMum & Dad",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#87bce8",
            "image_url": "//cdn.swiftgift.me/images/categories/b6/277047d069dab40d950018b417677a.jpg",
            "background_url": null,
            "short_name": "Mum & Dad",
            "children": [
                {
                    "id": 265,
                    "name": "Gifts for Mum"
                },
                {
                    "id": 285,
                    "name": "Gifts for Dad"
                }
            ]
        },
        {
            "id": 144,
            "name": "<small>Gifts for </small><br><b>Weddings</b>",
            "clean_name": "Gifts for Weddings",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": "#000001",
            "description_color": null,
            "background_color": "#edded8",
            "image_url": "//cdn.swiftgift.me/images/categories/f5/e8e2762c913c55a878f72120ed2e77.jpg",
            "background_url": null,
            "short_name": "Weddings"
        },
        {
            "id": 145,
            "name": "<small>Gifts for </small><br><b>House Warming</b>",
            "clean_name": "Gifts for House Warming",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": null,
            "description_color": null,
            "background_color": "#fac777",
            "image_url": "//cdn.swiftgift.me/images/categories/2a/3e3ecc63e9707c7e0c306d2c17c636.jpg",
            "background_url": null,
            "short_name": "House Warming"
        },
        {
            "id": 147,
            "name": "<small>Gifts for </small><br><b>Book Lovers</b>",
            "clean_name": "Gifts for Book Lovers",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": "#000001",
            "description_color": null,
            "background_color": "#95d0dc",
            "image_url": "//cdn.swiftgift.me/images/categories/71/1153db1329570ae04f41d9e6588c7a.jpg",
            "background_url": null,
            "short_name": "Book Lovers"
        },
        {
            "id": 211,
            "name": "<b>Toy Gifts </b>",
            "clean_name": "Toy Gifts ",
            "description": null,
            "view": "plain",
            "is_all_tab": true,
            "name_color": "#000001",
            "description_color": null,
            "background_color": "#f1e1bf",
            "image_url": "//cdn.swiftgift.me/images/categories/bc/d8f8ce7c0a1006cbb1a49961abc038.jpg",
            "background_url": null,
            "short_name": "Toy Gifts"
        }
    ]
};

export default function products(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}