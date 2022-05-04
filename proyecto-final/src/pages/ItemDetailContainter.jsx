import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
                id: 1,
                title: 'Kawasaki-NINJA',
                price: 'u$s44.500',
                stock: 5,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1GoESFMlB_bWlFwk2vxd0VRQRs5ny5xH1w&usqp=CAU'
            },
            {
                id: 2,
                title: 'Yamaha-YZF-R1',
                price: 'u$s39.000',
                stock: 5,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx39MQArs2RMlvDITD6XUkBb0Z5869VeuxQw&usqp=CAU'
            },
            {
                id: 3,
                title: 'Susuki-GSXR',
                price: 'u$s40.000',
                stock: 5,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZkrECUW4XNzlmIUGUKDQzhEo_pMaHMOx2g&usqp=CAU'
            },
            {
                id: 4,
                title: 'Honda-CBR',
                price: 'u$s42.500',
                stock: 5,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrVwyansMIBd-7XXSY6zN27RNW5VLdhuEcw&usqp=CAU'
              }
        ];
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Error, revisar consola!');
            });
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer