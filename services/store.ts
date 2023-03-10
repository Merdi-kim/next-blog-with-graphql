import { atom } from 'recoil';
import { IPostNode } from '../interfaces';

export const allPosts = atom({
  key: 'posts',
  default: [] as IPostNode[],
});

export const specificPosts = atom({
  key: 'specificPosts',
  default: [] as IPostNode[],
});
