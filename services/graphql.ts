import { request, gql } from 'graphql-request';

const gqlApi: string = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT!;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              ... on Author {
                id
                name
                photo {
                  url
                }
              }
            }
            createdAt
            title
            excerpt
            slug
            categories {
              name
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(gqlApi, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostsDetails() {
      posts( 
        orderBy: createdAt_DESC
        first: 3
      )
      {
        title
        slug
        featuredImage{
          url
        }
        createdAt
      }
    }
  `;

  const result = await request(gqlApi, query);
  return result.posts;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPosts {
      posts(where: { featuredPost: true }, orderBy: createdAt_DESC, first: 3) {
        title
        slug
        featuredImage {
          url
        }
        createdAt
      }
    }
  `;

  const result = await request(gqlApi, query);
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
      }
    }
  `;

  const result = await request(gqlApi, query);
  return result.categories;
};

export const getPostDetails = async (slug?: string | string[]) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          ... on Author {
            id
            name
            photo {
              url
            }
          }
        }
        createdAt
        title
        excerpt
        slug
        categories {
          name
        }
        featuredImage {
          url
        }
        content {
          raw
        }
      }
    }
  `;

  const result = await request(gqlApi, query, { slug });
  return result.post;
};
