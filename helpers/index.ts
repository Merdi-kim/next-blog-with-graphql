import { IPostNode } from '../types';

export const fetchSpecificPosts = (posts: any, category: string) => {
  if (!category) return posts;
  let result: IPostNode[] = [];
  posts.forEach((post: IPostNode) => {
    post.node.categories.forEach((item: { name: string }) => {
      if (item.name == category) result.push(post);
    });
  });
  return result;
};
