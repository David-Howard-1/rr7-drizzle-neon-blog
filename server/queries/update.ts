import { db } from '../index';
import {
  type InsertPost,
  type InsertUser,
  type InsertComment,
  postsTable,
  usersTable,
  commentsTable,
} from '../db/schema';
import { eq, sql } from 'drizzle-orm';

//----- USERS -----//
export async function updateUser(id: typeof usersTable.id, data: InsertUser) {
  await db
    .update(usersTable)
    .set({
      email: data.email,
      name: data.name,
      updatedAt: sql`NOW()`,
    })
    .where(eq(usersTable.id, id));
}

//----- POSTS -----//
export async function updatePost(id: typeof postsTable.id, data: InsertPost) {
  await db
    .update(postsTable)
    .set({
      title: data.title,
      content: data.content,
      updatedAt: sql`NOW()`,
    })
    .where(eq(postsTable.id, id));
}

//----- COMMENTS -----//
export async function updateComment(
  id: typeof commentsTable.id,
  data: InsertComment
) {
  await db
    .update(commentsTable)
    .set({
      content: data.content,
      updatedAt: sql`NOW()`,
    })
    .where(eq(commentsTable.id, id));
}
