// import React, { createContext, useEffect, useState } from 'react';
// import { db } from '../Config/firebaseConfig';
// import { collection, onSnapshot } from 'firebase/firestore';

// export const ProductsContext = createContext();

// export const ProductsContextProvider = (props) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const unsub = onSnapshot(collection(db, 'Products'), (snapshot) => {
//             const changes = snapshot.docChanges();
//             let updatedProducts = [...products];
//             changes.forEach((change) => {
//                 if (change.type === 'added') {
//                     updatedProducts.push({
//                         ProductID: change.doc.id,
//                         ProductName: change.doc.data().ProductName,
//                         ProductPrice: change.doc.data().ProductPrice,
//                         ProductImg: change.doc.data().ProductImg
//                     });
//                 }
//             });
//             setProducts(updatedProducts);
//         });

//         // Cleanup subscription on unmount
//         return () => unsub();
//     }, [products]);

//     return (
//         <ProductsContext.Provider value={{ products }}>
//             {props.children}
//         </ProductsContext.Provider>
//     );
// };

import React, { createContext, useEffect, useState } from 'react';
import { db } from '../Config/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'Products'), (snapshot) => {
            let updatedProducts = [];
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const newProduct = {
                        ProductID: change.doc.id,
                        ...change.doc.data()
                    };
                    updatedProducts.push(newProduct);
                }
            });
            setProducts(updatedProducts);
        });

        // Cleanup subscription on unmount
        return () => unsub();
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {props.children}
        </ProductsContext.Provider>
    );
};
