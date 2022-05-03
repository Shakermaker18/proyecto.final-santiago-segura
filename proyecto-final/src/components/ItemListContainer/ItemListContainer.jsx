import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import './ItemListContainer.css'


// function ItemListContainer({ greeting }) {
//   function dummy() {
//     console.log('dummy prop function');
//   }
//   return (
//     <div className='list-item-container'>
//         <ItemCount initial={0} stock={5} onAdd={dummy} />
//     </div>
//   )
// }

// export default ItemListContainer


function ItemListContainer({ greeting }) {
  const itemList = [
    {
      id: 1,
      title: 'Kawasaki-NINJA',
      price: 'u$s44.500',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1GoESFMlB_bWlFwk2vxd0VRQRs5ny5xH1w&usqp=CAU'
    },
    {
      id: 2,
      title: 'Yamaha-YZF-R1',
      price: 'u$s39.000',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx39MQArs2RMlvDITD6XUkBb0Z5869VeuxQw&usqp=CAU'
    },
    {
      id: 3,
      title: 'Susuki-GSXR',
      price: 'u$s40.000',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZkrECUW4XNzlmIUGUKDQzhEo_pMaHMOx2g&usqp=CAU'
    },
    {
      id: 4,
      title: 'Honda-CBR',
      price: 'u$s42.500',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrVwyansMIBd-7XXSY6zN27RNW5VLdhuEcw&usqp=CAU'
    }
  ]

  return (
    <div className='list-item-container'>
        {itemList.map((item, i) => <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemListContainer