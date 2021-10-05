class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    }

    if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    }

    let [first, ...others] = this._likes;

    return `${first} and ${others.length} others like this story!`;
  }

  like(username) {
    let user = this._likes.find((x) => x === username);
    if (user) {
      throw new Error(`You can't like the same story twice!`);
    }

    if (username === this.creator) {
      throw new Error(`You can't like your own story!`);
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.some((x) => x === username)) {
      throw new Error("You can't dislike this story!");
    }

    this._likes = this._likes.filter((x) => x !== username);

    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    let currentComment = this._comments.find((x) => x.id === id);

    if ((id === undefined || !currentComment) && username && content) {
      this._comments.push({
        id: this._comments.length + 1,
        username,
        content,
        replies: [],
      });
      return `${username} commented on ${this.title}`;
    }

    if (currentComment) {
      let reply = {
        id: `${id}.${currentComment.replies.length + 1}`,
        username,
        content,
      };

      currentComment.replies.push(reply);

      return `You replied successfully`;
    }
  }

  toString(sortingType) {
    let result = [];
    result.push(
      `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`
    );

    if (this._comments.length > 0) {
      this.sortLibrary(sortingType, this._comments);
      this._comments.forEach((comment) => {
        result.push(
          `-- ${comment.id}. ${comment.username}: ${comment.content}`
        );

        if (comment.replies.length > 0) {
          this.sortLibrary(sortingType, comment.replies);
          comment.replies.map((reply) => {
            result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
          });
        }
      });
    }
    return result.join("\n");
  }

  sortLibrary(str, array) {
    if (str === "asc") {
      array.sort((a, b) => a.id - b.id);
    } else if (str === "desc") {
      array.sort((a, b) => b.id - a.id);
    } else if (str === "username") {
      array.sort((a, b) => a.username.localeCompare(b.username));
    }
  }
}

// let art = new Story("My Story", "Anny");
// console.log(art.like("John")); // "John liked My Story!");
// console.log(art.likes); //"John likes this story!");
// //console.log(art.dislike("Sally")); //"You can't dislike this story!");
// console.log(art.like("Ivan")); //"Ivan liked My Story!");
// console.log(art.like("Steven")); //"Steven liked My Story!");
// console.log(art.likes); //"John and 2 others like this story!");
// console.log(art.comment("Anny", "Some Content")); //"Anny commented on My Story");
// console.log(art.comment("Ammy", "New Content", 1)); // "You replied successfully");
// console.log(art.comment("Zane", "Reply", 2)); //"Zane commented on My Story");
// console.log(art.comment("Jessy", "Nice :)")); //"Jessy commented on My Story");
// console.log(art.comment("SAmmy", "Reply@", 2)); //"You replied successfully");

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.like("Anton"));
console.log(art.comment("Ivan", "SS"));
console.log(art.comment("Sasho", "ff"));
console.log(art.comment("Sasho", "ff", 2));
console.log(art.toString("desc"));
