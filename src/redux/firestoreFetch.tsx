import firestore from '@react-native-firebase/firestore';

export const fetchData = async (collectionName) => {
    const snapshot = await firestore().collection(collectionName).get();
    return snapshot.docs.map(doc => doc.data());
};

export const getTransactionsByUserId = async (userId) => {
    const transactionsSnapshot = await firestore().collection('transactions').where('userId', '==', userId).get();
   
    const transactions = transactionsSnapshot.docs.map(doc => doc.data());
    alert(JSON.stringify(transactions))
    return transactions;
}

export const getTransactionsByProductId = async (id) => {
    const transactionsSnapshot = await firestore().collection('products').where('id', '==', id).get();
   
    const transactions = transactionsSnapshot.docs.map(doc => doc.data());
    alert(JSON.stringify(transactions))
    return transactions;
}

// Menggunakan fungsi di atas untuk mengambil data
export const  fetchTransactions = async () => {
    const transactions = await fetchData('transactions');
    console.log(transactions);
};

export const fetchTypes = async () => {
    const users = await fetchData('users');
    console.log(users);
};

export const fetchUser = async () => {
    const users = await fetchData('collection');
    console.log(users);
};

export const fetchProduct = async () => {
    const users = await fetchData('users');
    console.log(users);
};

export const fetchCollection = async () => {
    const users = await fetchData('users');
    console.log(users);
};
