import { db } from '../index';
import {
  type InsertPost,
  type InsertUser,
  type InsertComment,
  postsTable,
  usersTable,
  commentsTable,
} from '../db/schema';

//----- USERS -----//
export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}

//----- POSTS -----//
export async function createPost(data: InsertPost) {
  await db.insert(postsTable).values(data);
}

//----- COMMENTS -----//
export async function createComment(data: InsertComment) {
  await db.insert(commentsTable).values(data);
}
