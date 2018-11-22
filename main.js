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

function printReceipt(barcodeList){
  let goodsList = getGoodsListfromCustomer(loadAllItems(), barcodeList);
  let goodsQuantityList = getQuantityOfItems(barcodeList);
  let detailGoodsList = mergeQuantityToItem(goodsList, goodsQuantityList);
  let detailGoodsListWithSubtotal = calculateSubtotalForItems(detailGoodsList, loadPromotions);
  let total = calculateTotal(detailGoodsListWithSubtotal);
  let save = calculateSave(detailGoodsListWithSubtotal);
  let receipt = formatReceipt(detailGoodsListWithSubtotal, total, save);

  return receipt;
}

function getGoodsListfromCustomer(allItemsList,barcodeList){
  return allItemsList.filter(item => barcodeList.includes(item.barcode));
}

function getQuantityOfItems(barcodeList){
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

function mergeQuantityToItem(goodsList, goodsQuantityList){
  return goodsList.map(good => Object.assign({}, good, {'quantity': goodsQuantityList[good.barcode]}));
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


function calculateTotal(){

}

function formatingReceipt(){

}






module.exports = {
  getGoodsListfromCustomer,
  loadAllItems,
  getQuantityOfItems,
  calculateTotal,
  formatingReceipt,
  mergeQuantityToItem
};

