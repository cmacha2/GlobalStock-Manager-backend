require('dotenv').config();
const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccountPath = process.env.FIREBASE_CREDENTIALS_PATH;

console.log('Loading Firebase credentials from:', serviceAccountPath);

try {
  const serviceAccount = require(serviceAccountPath);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });

  const db = admin.firestore();

  const getCurrentSkuCounter = async (userId, category) => {
    console.log(`Getting SKU counter for category ${category} for user ${userId}`);
    if (!category || typeof category !== 'string') {
      throw new Error('Category must be a non-empty string');
    }
    try {
      const docRef = db.collection('users').doc(userId).collection('skuCounters').doc(category);
      const docSnap = await docRef.get();

      if (!docSnap.exists) {
        console.log(`No SKU counter exists for category ${category} for user ${userId}, creating a new one.`);
        await docRef.set({ count: 0 }); // Initialize with 0
        return 0;
      } else {
        console.log(`Current SKU counter for category ${category} for user ${userId} is ${docSnap.data().count}`);
        return docSnap.data().count;
      }
    } catch (error) {
      console.error('Error getting SKU counter:', error);
      throw new Error('Error getting SKU counter');
    }
  };

  const incrementSkuCounter = async (userId, category) => {
    if (!category || typeof category !== 'string') {
      throw new Error('Category must be a non-empty string');
    }
    try {
      const docRef = db.collection('users').doc(userId).collection('skuCounters').doc(category);
      console.log(`Incrementing SKU counter for category ${category} for user ${userId}`);
      await docRef.set({ count: admin.firestore.FieldValue.increment(1) }, { merge: true });
    } catch (error) {
      console.error('Error incrementing SKU counter:', error);
      throw new Error('Error incrementing SKU counter');
    }
  };

  const saveUserCredentials = async (userId, token, mId) => {
    try {
      console.log(`Saving credentials for user ${userId}`);
      const userRef = db.collection('users').doc(userId);
      await userRef.set({ token, mId }, { merge: true });
    } catch (error) {
      console.error('Error saving user credentials:', error);
      throw new Error('Error saving user credentials');
    }
  };

  const getUserCredentials = async (userId) => {
    if (!userId) {
      throw new Error("userId cannot be empty");
    }
    try {
      console.log(`Getting credentials for user ${userId}`);
      const userRef = db.collection('users').doc(userId);
      const doc = await userRef.get();
      if (!doc.exists) {
        throw new Error('No credentials found for user');
      }
      console.log(`Credentials obtained for user ${userId}`);
      return doc.data();
    } catch (error) {
      console.error('Error getting user credentials:', error);
      throw new Error('Error getting user credentials');
    }
  };

  module.exports = {
    incrementSkuCounter,
    getCurrentSkuCounter,
    saveUserCredentials,
    getUserCredentials
  };

} catch (error) {
  console.error('Failed to load Firebase credentials:', error);
  process.exit(1);
}
