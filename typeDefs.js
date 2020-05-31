const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type User {
        id: ID
        name: String
        age: Int
        friends: [User]
    }

    type Book {
        title: String
        author: String
    }

    type Post {
        id: ID
        author: User
        title: String
        content: String
        likeGiverIds: [User]
    }

    type Query {
        me: User
        user(name: String!): User
        users: [User]
        books: [Book]
        posts: [Post]
    }

    type Mutation {
        createUser(name: String!, age: Int!): User
        addPost(id: ID!, title: String!, content: String!): Post
    }
`;
