export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: [];
  reviews: Review[];
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: [],
    reviews: Review[],
    minimumOrderQuantity: number,
    images: string[],
    thumbnail: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.tags = tags;
    this.reviews = reviews;
    this.minimumOrderQuantity = minimumOrderQuantity;
    this.images = images;
    this.thumbnail = thumbnail;
  }
  // constructor(id: number, name: string, description: string, price: number) {}
}

export class Root {
  products: Product[];
  total: number;
  skip: number;
  limit: number;

  constructor(products: Product[], total: number, skip: number, limit: number) {
    this.products = products;
    this.total = total;
    this.skip = skip;
    this.limit = limit;
  }
}

export class Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;

  constructor(
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string,
  ) {
    this.rating = rating;
    this.comment = comment;
    this.date = date;
    this.reviewerName = reviewerName;
    this.reviewerEmail = reviewerEmail;
  }
}
