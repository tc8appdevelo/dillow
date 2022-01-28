@saved_houses.each do |saved_house|
  json.set! saved_house.id do
    json.partial! 'saved_house', saved_house: saved_house
  end
ende