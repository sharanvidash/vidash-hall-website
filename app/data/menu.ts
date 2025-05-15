export interface MenuSection {
  timing?: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  price?: number;
  description?: string;
  weight?: string;
  quantity?: string;
  items?: MenuItem[];
}

export interface Menu {
  breakfast: MenuSection;
  lunch: MenuSection;
  all_timers: MenuSection;
  evening_specials: MenuSection;
  dinner: MenuSection;
  fitness_foods: MenuItem[];
  hot_drinks: MenuItem[];
  cold_drinks: MenuItem[];
  milkshakes: MenuItem[];
  desserts: MenuItem[];
}

export const menuData: Menu = {
  breakfast: {
    timing: "7:00 AM - 11:30 AM",
    items: [
      { 
        name: "IDLY & VADA",
        items: [
          { name: "IDLY", quantity: "2", price: 30 },
          { name: "BABY IDLIES", quantity: "14", price: 70 },
          { name: "HEART IDLY", quantity: "2", price: 60 },
          { name: "SAMBAR IDLY", quantity: "2", price: 70 },
          { name: "THATTU IDLY", quantity: "1", price: 60 },
          { name: "MEDHU VADAI", quantity: "1", price: 25 },
          { name: "CURD VADAI", quantity: "2", price: 70 },
          { name: "SAMBAR VADAI", quantity: "2", price: 70 }
        ]
      },
      {
        name: "MORNING SPECIALS",
        items: [
          { name: "POORI MASALA", quantity: "3 nos", price: 70 },
          { name: "GHEE PONGAL", weight: "175gm", price: 60 },
          { name: "RAVA KICHADI", weight: "175gm", price: 50 },
          { name: "MINI TIFFIN", price: 140 },
          { name: "MYSORE MASALA DOSA", quantity: "1", price: 150 },
          { name: "CHEESE DOSA", quantity: "1", price: 110 },
          { name: "GHEE PODI IDLY", weight: "150gm" },
          { name: "APPAM WITH COCONUT MILK/WHITE KURMA", quantity: "1" }
        ]
      },
      {
        name: "DOSA CORNER",
        items: [
          { name: "PLAIN ROAST", quantity: "1", price: 80 },
          { name: "KAL DOSA", quantity: "2", price: 70 },
          { name: "GHEE ROAST", quantity: "1", price: 100 },
          { name: "PAPER ROAST", quantity: "1", price: 130 },
          { name: "ONION DOSA", quantity: "1", price: 90 },
          { name: "GHEE ONION DOSA", quantity: "1" },
          { name: "MASALA DOSA", quantity: "1", price: 90 },
          { name: "GHEE MASALA DOSA", quantity: "1", price: 100 },
          { name: "PODI DOSA", quantity: "1", price: 90 },
          { name: "GHEE PODI DOSA", quantity: "1", price: 100 },
          { name: "PODI ONION DOSA", quantity: "1", price: 110 },
          { name: "GHEE PODI ONION DOSA", quantity: "1", price: 110 },
          { name: "BUTTER DOSA", quantity: "1" },
          { name: "BUTTER PODI DOSA", quantity: "1" },
          { name: "BUTTER ONION DOSA", quantity: "1" },
          { name: "BUTTER PODI ONION DOSA", quantity: "1" },
          { name: "BUTTER PODI MASALA DOSA", quantity: "1" },
          { name: "RAVA DOSA", quantity: "1", price: 90 },
          { name: "GHEE RAVA DOSA", quantity: "1", price: 110 },
          { name: "PODI RAVA DOSA", quantity: "1", price: 100 },
          { name: "GHEE PODI RAVA DOSA", quantity: "1", price: 120 },
          { name: "RAVA MASALA DOSA", quantity: "1", price: 120 },
          { name: "GHEE RAVA MASALA DOSA", quantity: "1", price: 130 },
          { name: "UTHAPPAM", quantity: "1", price: 70 },
          { name: "PODI UTHAPPAM", quantity: "1", price: 80 },
          { name: "ONION UTHAPPAM", quantity: "1", price: 90 },
          { name: "PODI ONION UTHAPPAM", quantity: "1", price: 100 },
          { name: "GHEE PODI ONION UTHAPPAM", quantity: "1", price: 110 },
          { name: "BUTTER PODI UTHAPPAM", quantity: "1", price: 110 },
          { name: "BUTTER PODI ONION UTHAPPAM", quantity: "1", price: 130 },
          { name: "CARROT UTHAPPAM", quantity: "1", price: 90 },
          { name: "TOMATO UTHAPPAM", quantity: "1", price: 80 },
          { name: "5 TASTE UTHAPPAM", quantity: "1", price: 110 },
          { name: "7 TASTE UTHAPPAM", quantity: "1", price: 130 },
          { name: "FAMILY DOSA", quantity: "1", price: 260 }
        ]
      },
      { name: "SWEET KESARI", price: 40 }
    ]
  },
  lunch: {
    timing: "12:00 PM - 4:00 PM",
    items: [
      {
        name: "SOUPS",
        items: [
          { name: "TOMATO SOUP", weight: "155ml" },
          { name: "CREAM OF TOMATO", weight: "155ml" },
          { name: "MULGATAWNY SOUP", weight: "155ml" },
          { name: "PUMPKIN SOUP", weight: "155ml" },
          { name: "VEGETABLE CLEAR SOUP", weight: "155ml" },
          { name: "SWEET CORN SOUP", weight: "155ml" },
          { name: "CREAM OF MUSHROOM", weight: "155ml" }
        ]
      },
      {
        name: "BREADS",
        items: [
          { name: "TANDOORI ROTI", weight: "60gm" },
          { name: "BUTTER ROTI", weight: "60gm" },
          { name: "PARATHA", weight: "90gm" },
          { name: "ALOO PARATHA", weight: "90gm" },
          { name: "STUFFED PARATHA", weight: "110gm" },
          { name: "KULCHA", weight: "110gm" },
          { name: "ONION KULCHA", weight: "110gm" },
          { name: "MASALA KULCHA", weight: "110gm" },
          { name: "PHULKA", weight: "20 G 3 Nos" }
        ]
      },
      {
        name: "MEALS",
        items: [
          { name: "POWER LUNCH (MINI MEALS)", weight: "800gm" },
          { name: "VIDASH THALI MEALS", weight: "450/1000" },
          { name: "NORTH INDIAN MEALS", weight: "1200gm" }
        ]
      },
      {
        name: "RICE",
        items: [
          { name: "SAMBAR RICE", weight: "300gm" },
          { name: "CURD RICE", weight: "300gm" },
          { name: "CHEFS SPL RICE", weight: "300gm" },
          { name: "VEGETABLE BRIYANI", weight: "350gm" },
          { name: "PANNER BRIYANI", weight: "350gm" },
          { name: "MUSHROOM BRIYANI", weight: "350gm" },
          { name: "GHEE RICE", weight: "300gm" }
        ]
      }
    ]
  },
  all_timers: {
    timing: "12:00 PM - 9:00 PM",
    items: [
      {
        name: "STARTERS",
        items: [
          { name: "MUSHROOM 65", weight: "200gm" },
          { name: "GOBI 65", weight: "200gm" },
          { name: "PANEER 65", weight: "200gm" },
          { name: "MUSHROOM PEPPER SALT", weight: "200gm" },
          { name: "DRAGON ROLLS", weight: "200gm" },
          { name: "GOLDEN FRIED BABYCORN", weight: "200gm" },
          { name: "CRISPY FRIED POTATOES", weight: "200gm" },
          { name: "GOBI MANCHURIAN DRY", weight: "200gm" },
          { name: "CHILLI PANNER", weight: "200gm" },
          { name: "CHILLI MUSHROOM DRY", weight: "200gm" },
          { name: "GARLIC PANNER", weight: "200gm" },
          { name: "GARLIC GOBI", weight: "200gm" },
          { name: "GARLIC MUSHROOM", weight: "200gm" }
        ]
      },
      {
        name: "RICE",
        items: [
          { name: "VEGETABLE FRIED RICE", weight: "300gm" },
          { name: "MUSHRROM FRIED RICE", weight: "300gm" },
          { name: "PANEER FRIED RICE", weight: "300gm" },
          { name: "SCHEZUAN FRIED RICE", weight: "300gm" }
        ]
      },
      {
        name: "CHINESE GRAVY",
        items: [
          { name: "CHILLI GOBI", weight: "250gm" },
          { name: "GOBI MANCHURIAN", weight: "250gm" },
          { name: "SEASAME PANEER", weight: "250gm" },
          { name: "CHILLI PANEER", weight: "250gm" },
          { name: "CHILLI BABY CORN", weight: "250gm" },
          { name: "GARLIC BABY CORN", weight: "250gm" }
        ]
      },
      {
        name: "NOODLES",
        items: [
          { name: "VEGETABLE NOODLES", weight: "300gm" },
          { name: "MUSHRROM NOODLES", weight: "300gm" },
          { name: "PANEER NOODLES", weight: "300gm" },
          { name: "SCHEZUAN NOODLES", weight: "300gm" },
          { name: "SINGAPORE NOODLES", weight: "350gm" }
        ]
      },
      {
        name: "INDIAN GRAVY",
        items: [
          { name: "DHALL FRY/THADKA", weight: "200gm" },
          { name: "GREEN PEAS MASALA", weight: "200gm" },
          { name: "ALOO GOBI MASALA", weight: "200gm" },
          { name: "MUSHROOM CURRY", weight: "200gm" },
          { name: "PANEER BUTTER MASALA", weight: "200gm" },
          { name: "VEGETABLE KORMA", weight: "200gm" },
          { name: "KADAI VEGETABLE", weight: "200gm" },
          { name: "MALAI KOFTHA CURRY", weight: "200gm" },
          { name: "PALAK MUTTER", weight: "200gm" },
          { name: "DAYS SPECIAL", weight: "200gm" }
        ]
      },
      {
        name: "VIDASH SPECIALS",
        items: [
          { name: "ADAI AVAIYAL", price: 90 },
          { name: "PIZZA DOSA", price: 75 },
          { name: "PANAGAM" },
          { name: "FRIED ICE CREAM" },
          { name: "MOCKTAIL" },
          { name: "Margarita" },
          { name: "Mint crusher" }
        ]
      }
    ]
  },
  evening_specials: {
    timing: "4:00 PM - 7:00 PM",
    items: [
      {
        name: "EVENING SPECIALS",
        items: [
          { name: "SWEET KOLUKATTAI", weight: "30g 2nos" },
          { name: "KARA KOLLUKATTAI", weight: "30g 2nos" },
          { name: "APPLE FRITTERS[BAJJI]", weight: "50g 2nos" },
          { name: "PINEAPPLE FRITTERS", weight: "50g 2nos" },
          { name: "THAVALA VADAI", weight: "70g" },
          { name: "KEERAI VADAI", weight: "70g" },
          { name: "KUZHI PANIYARAM", weight: "20g 3nos" },
          { name: "SWEET PANIYARAM", weight: "20g 3nos" },
          { name: "MYSORE BONDA", weight: "70g 3nos" },
          { name: "ONION BAJJI", weight: "70g 3nos" },
          { name: "PLAINTAIN BAJJI", weight: "70g 3nos" },
          { name: "POTATO BAJJI", weight: "70g 3nos" },
          { name: "MILAGAI BAJJI", weight: "70g 3nos" },
          { name: "BREAD BAJJI" },
          { name: "BUN BUTTER JAM" },
          { name: "FRENCH FRIES" },
          { name: "POTATO WEDGES" },
          { name: "CHILLI CHEESE TOAST" },
          { name: "VEG CHEESE TOAST" }
        ]
      },
      {
        name: "KIDS MENU",
        items: [
          {
            name: "INDIAN KIDS COMBO",
            items: [
              { name: "PEAS PULAO", quantity: "1 CUP" },
              { name: "BUTTER ROTI", quantity: "1 SMALL" },
              { name: "CRISPY POTATO/GOBI 65", quantity: "1 CUP" },
              { name: "PANEER BUTTER MASALA", quantity: "1 CUP" },
              { name: "ALOO PEAS MASALA", quantity: "1 CUP" },
              { name: "ICE CREAM", quantity: "1 CUP" }
            ]
          },
          {
            name: "CHINESE KIDS COMBO",
            items: [
              { name: "VEG NOODLES", quantity: "1 CUP" },
              { name: "DRAGON ROLL" },
              { name: "CRISPY POTATO/CORN 65" },
              { name: "GOBI MANCHURIAN" },
              { name: "ICE CREAM" }
            ]
          },
          { name: "MINI APPAM" },
          { name: "MINI POORIES" },
          { name: "BABY IDLIES" },
          { name: "CHEESE DOSA" },
          { name: "CHEESE UTHAPPAM" },
          { name: "PANEER DOSA" },
          { name: "GOLDEN FRIED BABYCORN" },
          { name: "CRISPY FRIED BABY CORN" },
          { name: "CHEESE PIZZA" },
          { name: "POTATO WEDGES" },
          { name: "CHEESE TOAST" }
        ]
      }
    ]
  },
  dinner: {
    items: [
      { name: "CHILLY IDLY", weight: "200gm" },
      { name: "CHAPATHI", weight: "40 G 2 Nos" },
      { name: "PAROTTA", weight: "60 G 2 Nos", price: 16 },
      { name: "GHEE PODI IDLY" },
      { name: "CHILLI IDLY" },
      { name: "FRIED IDLY" },
      { name: "CHILLY PAROTTA", weight: "125gm" },
      { name: "KHEEMA PAROTTA", weight: "125gm" },
      { name: "MUSHRROM PAROTTA", weight: "125gm" },
      { name: "PANEER / CHEESE PAROTTA", weight: "125gm" },
      { name: "MADURAI BUN PAROTTA" },
      { name: "KIZHI PAROTTA/MUSHROOM CURRY PAROTTA" }
    ]
  },
  fitness_foods: [
    { name: "FRESH GARDEN SALAD", price: 150 },
    { name: "TOSSED SALAD", price: 150 },
    { name: "MIXED RAITHA", price: 175 },
    { name: "BEET N POTATO SALAD", price: 150 },
    { name: "STIR FRIED VEGETABLES", price: 250 },
    { name: "RAAGI DOSA", price: 80 },
    { name: "KAMBU DOSA", price: 80 },
    { name: "MILLET DOSA", price: 80 },
    { name: "PESARATTU", price: 80 },
    { name: "PALAK DOSA" },
    { name: "VEGETABLE SOUP", weight: "155ml" },
    { name: "DRUMSTICK SOUP", weight: "155ml" },
    { name: "CHANNA SUNDAL" },
    { name: "GROUNDNUT SUNDAL" }
  ],
  hot_drinks: [
    { name: "FILTER COFFEE", weight: "115ml" },
    { name: "BLACK COFFEE", weight: "115ml" },
    { name: "MILK TEA", weight: "115ml" },
    { name: "BLACK TEA", weight: "115ml" },
    { name: "LEMON TEA", weight: "115ml" },
    { name: "HOT CHOCOLATE", weight: "115ml" },
    { name: "BOOST", weight: "115ml" },
    { name: "HORLICKS", weight: "115ml" },
    { name: "PANAKALKANDU MILK", weight: "115ml" },
    { name: "BADAM MILK", weight: "115ml" },
    { name: "PACKAGED DRINKING WATER", weight: "1 LITRE" }
  ],
  cold_drinks: [
    { name: "ROSE MILK" },
    { name: "BADAM MILK" },
    { name: "GOLI SODA" }
  ],
  milkshakes: [
    { name: "Chocolate" },
    { name: "Mango" },
    { name: "Strawberry" },
    { name: "Butterscotch" },
    { name: "PISTA" },
    { name: "CHOCOLATE BALLS WITH ICECREAM" },
    { name: "FALOODA" }
  ],
  desserts: [
    { name: "GULAB JAMOON WITH ICE CREAM" },
    { name: "CARROT HALWA WITH ICE CREAM" }
  ]
}; 