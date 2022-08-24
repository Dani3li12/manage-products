export class Product {
    constructor(
      public id: number,
      public name: string,
      public price: Number,
      public image: string,
      public rate = 100
      ) {
      this.id = id;
    }
  }
 