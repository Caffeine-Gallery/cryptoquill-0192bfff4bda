export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({
    'title' : IDL.Text,
    'body' : IDL.Text,
    'author' : IDL.Text,
  });
  return IDL.Service({
    'create_post' : IDL.Func([Post], [], []),
    'get_posts' : IDL.Func([], [IDL.Vec(Post)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
