export const ParsetoBRL = (amount = 0) => {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acumulator, actualValue) => {
    if (actualValue.prices.current) {
      return (acumulator += actualValue.prices.current)
    }
    return 0
  }, 0)
}
