const accessories = [
  { name: 'Necklace', created_at: '2019-03-01' },
  { name: 'Bracelet', created_at: '2019-03-05' },
  { name: 'Dog Chain', created_at: '2020-05-27' },
];

const MARCH = 2;

const filteredAccessories = accessories.filter((accessory) => {
  const date = new Date(accessory.created_at);
  if (date.getUTCMonth() === MARCH) return accessory;
});

console.log(filteredAccessories);
