const main = require('../main');
const loadAllItems = main.loadAllItems;
const loadItems = main.loadItems;
const groupItems = main.groupItems;


var barcodeList=
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000002',
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

it ('loadItems', () => {
    expect(loadItems(loadAllItems(), barcodeList)).toEqual(test1);
});

it ('groupItems', () => {
    expect(groupItems(barcodeList)).toEqual(test2);
});





