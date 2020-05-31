const { users, books, posts } = require('./data');

exports.resolvers = {
    Query: {
        me: () => users[0],
        user: (parent, args, context) => {
            const { name } = args;
            return users.find((user) => user.name === name);
        },
        users: () => users,
        books: () => books,
        posts: () => posts,
    },
    User: {
        friends: (parent, args, context) => {
            const { friendIds } = parent;
            return users.filter((user) => friendIds.includes(user.id));
        }
    },
    Mutation: {
        createUser: (parent, args, context) => {
            const { name, age } = args;

            users.push({
                id: users[users.length - 1].id + 1,
                name,
                age,
                friends: []
            })

            return users[users.length - 1];
        },
        addPost: (parent, args, context) => {
            const { id, title, content } = args;

            posts.push({
                id: posts[posts.length - 1].id + 1,
                author: users.find((user) => user.id == id),
                title,
                content,
                likeGrivers: []
            })

            return posts[posts.length - 1];
        }
    }
};
