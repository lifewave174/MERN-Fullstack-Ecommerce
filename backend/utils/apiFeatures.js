class APIFeatures {
  constructor(query, queryStr) {
    //here query is the list of products and querystr is the searched keyword. We are using this class and search method to find our list of products based on the search query.
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword //apple
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: 'i',
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    console.log(this);
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //Removing fields from the query
    const removeFields = ['keyword', 'limit', 'page'];
    removeFields.forEach((el) => delete queryCopy[el]);

    console.log(queryCopy);

    //Advanced filter for price, ratings Electronics

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
}

module.exports = APIFeatures;
