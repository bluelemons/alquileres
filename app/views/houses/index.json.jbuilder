json.array!(@houses) do |house|
  json.extract! house, :id, :address, :references, :description, :price
  json.url house_url(house, format: :json)
end
