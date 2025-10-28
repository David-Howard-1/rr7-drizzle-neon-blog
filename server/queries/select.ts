import { db } from '../index';
import {
  type SelectPost,
  type SelectUser,
  type SelectComment,
  postsTable,
  usersTable,
  commentsTable,
} from '../db/schema';
import { eq } from 'drizzle-orm';

//----- USERS -----//
export async function selectUsers() {
  await db.select().from(usersTable);
}

export async function selectUserById({ id }: SelectUser) {
  await db.select().from(usersTable).where(eq(usersTable.id, id));
}

export async function selectUserByEmail({ email }: SelectUser) {
  await db.select().from(usersTable).where(eq(usersTable.email, email));
}

//----- POSTS -----//
export async function selectPosts() {
  await db.select().from(postsTable);
}

export async function selectPostById({ id }: SelectPost) {
  await db.select().from(postsTable).where(eq(postsTable.id, id));
}

export async function selectPostsByUserId({ userId }: SelectPost) {
  await db.select().from(postsTable).where(eq(postsTable.userId, userId));
}

//----- COMMENTS -----//
export async function selectComment({ id }: SelectComment) {
  await db.select().from(commentsTable).where(eq(commentsTable.id, id));
}
