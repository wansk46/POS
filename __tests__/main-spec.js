const main = require('../main');
const loadAllItems = main.loadAllItems;
const loadItems = main.loadItems;

var barcodeList=
[
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

it ('should add two numbers', () => {
    expect(loadItems(loadAllItems(), barcodeList)).toEqual(test1);
});