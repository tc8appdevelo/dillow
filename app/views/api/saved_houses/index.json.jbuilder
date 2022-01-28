@saved_houses.each do |listing|
    json.set! listing.id do
        json.partial! 'saved_house', listing: listing
        json.photoUrl url_for(listing.photo)
    end
end