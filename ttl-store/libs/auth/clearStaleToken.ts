'use server';

// create a mongodb query to delete all tokens with the same identifier as the user

import clientPromise from "@/db/nextAuthConnect";

export default async function clearStaleTokens(identifier: string) {
  if (!identifier) {
    throw new Error('Email identifier is required');
  };
  try {
    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('verification_tokens').deleteMany({ expires: { $lt: new Date() }, identifier });
    console.log("Deleted ", result.deletedCount, " documents");
  } catch (error) {
    console.error(error);
  }
}