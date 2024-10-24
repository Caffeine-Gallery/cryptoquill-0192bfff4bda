import Text "mo:base/Text";

import Array "mo:base/Array";

actor {
  type Post = {
    title : Text;
    body : Text;
    author : Text;
  };

  stable var posts : [Post] = [];

  public func create_post(post : Post) : async () {
    posts := Array.append<Post>(posts, [post]);
  };

  public query func get_posts() : async [Post] {
    return posts;
  };
}
