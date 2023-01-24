/***** initially fetched posts with nodes *****/
export interface IPostNode {
  node: IPost;
}

/***** post layout *******/
export interface IPost {
  author: {
    id: string;
    name: string;
    photo: {
      url: string;
    };
  };
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: [];
  featuredImage: {
    url: string;
  };
}

/***** postCard props */

export interface IPostCardProps {
  post: IPost;
}

/***** postDetail props *****/
export interface IPostDetailProps extends IPost {
  content: {
    raw: string;
  };
}

/***** Author props *****/
export interface IAuthorProps {
  author: {};
}

/***** Category props *****/
export interface ICategoryProps {
  slug: string;
  name: string;
}
