export const getListings = (data) => $.ajax({
    url: '/api/listings',
    method: "GET",
    data
})

export const getListing = id => (
    $.ajax({
        method: 'GET',
        url: `/api/listings/${id}`
    })
)

export const postListing = () => (
    $.ajax({
        method: 'POST',
        url: `/api/listings`,
        data: { listing }
    })
)

export const updateListing = (listing) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/listings/${listing.id}`,
        data: { listing }
    })
)

export const destroyListing = (listing) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/listings/${listing.id}`
    })
)

export const postSavedListing = id => 
    $.ajax({
        method: 'POST',
        url: `/api/saved_houses`,
        data: { id },
    });

export const getSavedListings = () => $.ajax({
    url: '/api/saved_houses',
    method: 'GET',
})

export const deleteSavedListing = id => 
    $.ajax({
        url: `/api/saved_houses/${id}`,
        method: 'DELETE',
        data: { id }
    });