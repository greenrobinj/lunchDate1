10.times do
    Food.create(
      name: Faker::Food.dish,
      price: Faker::Commerce.price.to_f,
      description: Faker::Robin.quote,
    )
  end