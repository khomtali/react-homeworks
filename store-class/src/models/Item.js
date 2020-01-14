export default class Item {
  constructor(entity) {
    Object.assign(this, {
      brand: 'Brand',
      title: 'Title',
      description: 'Description',
      descriptionFull: 'Full Description',
      price: 0,
      currency: 'CUR',
    }, entity)
  }
}