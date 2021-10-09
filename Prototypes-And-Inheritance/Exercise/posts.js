function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}\n`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      return this.comments.length === 0
        ? super.toString() + `Rating: ${this.likes - this.dislikes}`
        : super.toString() +
            `Rating: ${this.likes - this.dislikes}\nComments:\n${this.comments
              .map((x) => ` * ${x}`)
              .join("\n")}`;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return super.toString() + `Views: ${this.views}`;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = solution();

let socialMediaPost = new classes.SocialMediaPost("Koce", 20, 20, 0);

console.log(socialMediaPost.toString());
