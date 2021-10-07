class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    let articleToLowerCase = articleModel.toLowerCase();

    if (!this.possibleArticles[articleToLowerCase]) {
      throw new Error("This article model is not included in this gallery!");
    }

    let obj = this.listOfArticles.find(
      (x) => x.articleName === articleName && x.articleModel === articleModel
    );

    if (obj) {
      obj.quantity += quantity;
    } else {
      this.listOfArticles.push({
        articleModel: articleToLowerCase,
        articleName,
        quantity,
      });
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
  }

  inviteGuest(guestName, personality) {
    if (this.guests.some((x) => x.guestName === guestName)) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points =
      personality === "Vip" ? 500 : personality === "Middle" ? 250 : 50;

    let guest = {
      guestName,
      points,
      purchaseArticle: 0,
    };

    this.guests.push(guest);

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find(
      (x) => x.articleName === articleName && x.articleModel === articleModel
    );

    if (!article) {
      throw new Error("This article is not found.");
    }

    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    let guest = this.guests.find((x) => x.guestName === guestName);

    if (!guest) {
      return `This guest is not invited.`;
    }

    if (guest.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    }

    guest.points -= this.possibleArticles[articleModel];
    guest.purchaseArticle++;
    article.quantity--;

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }

  showGalleryInfo(criteria) {
    let result = [];
    let articleOrGuestInformation =
      criteria === "article" ? "Articles information:" : "Guests information:";
    result.push(articleOrGuestInformation);

    criteria === "article"
      ? this.listOfArticles.map((x) =>
          result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`)
        )
      : this.guests.map((x) =>
          result.push(`${x.guestName} - ${x.purchaseArticle}`)
        );

    return result.join("\n");
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 2));
console.log(artGallery.addArticle("picture", "Mona Liza", 1));
