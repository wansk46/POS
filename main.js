function loadAllItems() {
  return [
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
    },
    {
      barcode: 'ITEM000003',
      name: 'Litchi',
      unit: 'kg',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: 'Battery',
      unit: 'box',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: 'Noodles',
      unit: 'bag',
      price: 4.50
    }
  ];
}

function loadPromotions() {
  return [
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
}

function loadItems(loadAllItems,barcodeList){
	return loadAllItems.filter(item => barcodeList.includes(item.barcode));
};

function groupItems(barcodeList){
  let groupedItems = {};
  barcodeList.forEach(barcode => {
    if(groupedItems[barcode]!=null){
      groupedItems[barcode] += 1;
    }else{
      groupedItems[barcode] = 1;
    }
  });
  return groupedItems;
}


//   let count = {};

//   //implement here
//   collection.forEach(element => {
//     if (count[element] != null) {
//       count[element] += 1;
//     } else {
//       count[element] = 1;
//     }
//   });
//   return count;
// }








module.exports = {
  loadItems,
  loadAllItems,
  groupItems
};

