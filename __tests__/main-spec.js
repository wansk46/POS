const main = require('../main');
const loadAllItems = main.loadAllItems;
const getGoodsListfromCustomer = main.getGoodsListfromCustomer;
const getQuantityOfItems = main.getQuantityOfItems;
const mergeQuantityToItem = main.mergeQuantityToItem;
const calculateTotal = main.calculateTotal;
const formatingReceipt = main.formatingReceipt;


var barcodeList=
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000002'
];

let test1 =
[
    {
      barcode: 'ITEM000000',
      name: 'Coca-Cola',
      unit: 'bottle',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      unit: 'kg',
      price: 5.50
    }
]

let test2 =
{
      'ITEM000000':2,
      'ITEM000001':1,
      'ITEM000002':1
}

let test3 = 
[
    {
      barcode: 'ITEM000000',
      name: 'Coca-Cola',
      unit: 'bottle',
      price: 3.00,
      quantity: 2
    },
    {
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00,
      quantity: 1
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      unit: 'kg',
      price: 5.50,
      quantity: 1
    }
]

let goodsList = getGoodsListfromCustomer(loadAllItems(), barcodeList);
let goodsQuantityList = getQuantityOfItems(barcodeList);
  

it ('getGoodsListfromCustomer', () => {
    expect(goodsList).toEqual(test1);
});

it ('getQuantityOfItems', () => {
    expect(goodsQuantityList).toEqual(test2);
});

it ('mergeQuantityToItem', () => {
    expect(mergeQuantityToItem(goodsList, goodsQuantityList)).toEqual(test3);
});





