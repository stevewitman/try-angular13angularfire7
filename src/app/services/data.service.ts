import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
} from '@angular/fire/firestore';
import { addDoc, deleteDoc, updateDoc } from '@firebase/firestore';
// import { collection } from '@firebase/firestore'; // trying collection from @angular/fire/firestore instead
import { Observable } from 'rxjs';

export interface Post {
  id?: string;
  url: string;
  type: 'video' | 'blog' | 'podcast'
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getPosts(): Observable<Post[]> {
    const postsRef = collection(this.firestore, 'posts');
    return collectionData(postsRef, {
      idField: 'id',
    }) as Observable<Post[]>;
  }

  getPostbyId(id: string): Observable<Post> {
    const postDocRef = doc(this.firestore, `posts/${id}`);
    return docData(postDocRef, { idField: 'id'}) as Observable<Post>;
  }

  addPost(post: Post) {
    const postsRef = collection(this.firestore, 'posts');
    return addDoc(postsRef, post);
  }

  updatePost(post: Post) {
    const postDocRef = doc(this.firestore, `posts/${post.id}`)
    return updateDoc(postDocRef, {title: post.title, description: post.description})
  }

  deletePost(post: Post) {
    const postDocRef = doc(this.firestore, `posts/${post.id}`);
    return deleteDoc(postDocRef)
  }

}
