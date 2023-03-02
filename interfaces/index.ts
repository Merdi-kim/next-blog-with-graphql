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
  title: string;
  excerpt: string;
  slug: string;
  categories: [];
  featuredImage: {
    url: string;
  };
}

/***** postCard props */

export interface IPostCardProps {
  index: number;
  post: IPost;
}

/***** postWidget card */
export interface IPostWidgetProp {
  title?: string;
}

/***** postDetail props *****/
export interface IPostDetailProps extends IPost {
  content: {
    raw: string;
  };
}

/***** Author props *****/
export interface IAuthorProps {
  author: {
    id: string;
    name: string;
    photo: {
      url: string;
    };
  };
}

/***** Category props *****/
export interface ICategoryProps {
  name: string;
}
