import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../firebase/config';

const productsCollection = "products";


export const addProduct = async (product, imageFile) => {
    try {
        // Upload the image first
        const imageRef = ref(storage, `images/${imageFile.name}`);
        const uploadTask = uploadBytesResumable(imageRef, imageFile);
        uploadTask.on('state_changed', 
            (snapshot) => {
                // Handle the upload task
            }, 
            (error) => {
                // Handle unsuccessful uploads
                console.log(error);
            }, 
            () => {
                // Handle successful uploads on complete
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    product.imageURL = downloadURL;

                    // Then add the product to Firestore
                    await setDoc(doc(db, productsCollection, product.id), product);
                });
            }
        );
    } catch (error) {
        console.error("Error adding product: ", error);
    }
}

export const editProduct = async (productId, updatedProduct) => {
    try {
        const productRef = doc(db, productsCollection, productId);
        await updateDoc(productRef, updatedProduct);
    } catch (error) {
        console.error("Error updating product: ", error);
    }
}

export const deleteProduct = async (productId) => {
    try {
        await deleteDoc(doc(db, productsCollection, productId));
    } catch (error) {
        console.error("Error deleting product: ", error);
    }
}

export const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, productsCollection));
        const products = querySnapshot.docs.map(doc => doc.data());
        return products;
    } catch (error) {
        console.error("Error getting products: ", error);
    }
}
