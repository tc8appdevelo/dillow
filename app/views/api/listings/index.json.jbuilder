
@listings.each do |listing|
    json.set! listing.id do
        json.partial! 'listing', listing: listing
        json.largePhotoUrl url_for(listing.large_photo)
        json.smallPhotoUrls listing.photos.map { |file| url_for(file) }
    end
end
