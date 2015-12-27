json.type "FeatureCollection"
json.features(@houses.map do |house|
  { type: 'Feature',
    properties: { id: house.id ,
                  address: house.address,
                  references: house.references,
                  description: house.description,
                  price: house.price },
    geometry: {
      type: "Point",
      coordinates: [ house.longitude, house.latitude ] }
  }
end)
