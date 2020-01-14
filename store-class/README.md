Страница интернет-магазина
===

Необходимо создать React-компонент `ShopItemClass` (class-based компонент), с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте.

## Пример использования
```jsx
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// Внутри компонента App
return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
)
```