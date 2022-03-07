
export const propertyTypes = {
    house: "House",
    town_home: "Townhome",
    multi_family: "Multi-family",
    condo: "Condo",
    co_op: "Co-op",
    land: "Land",
    lot: "Lot",
    apartment: "Apartment",
    manufactured: "Manufactured"
}

export const getListings = (data) => {

    return $.ajax({
        url: '/api/listings',
        method: "GET",
        data
    })
}

export const getListing = id => {
    
    return $.ajax({
        method: 'GET',
        url: `/api/listings/${id}`
    })
}

// export const postListing = () => (
//     $.ajax({
//         method: 'POST',
//         url: `/api/listings`,
//         data: { listing }
//     })
// )

export const destroyListing = (listing) => {
    
    return $.ajax({
        method: 'DELETE',
        url: `/api/listings/${listing.id}`
    })
}

export const postSavedListing = id => {
    
    return $.ajax({
        method: 'POST',
        url: `/api/saved_houses`,
        data: { id },
    });
}


export const getSavedListings = () => $.ajax({
    url: '/api/saved_houses',
    method: 'GET',
})

export const getSavedListing = id => {
    
    return $.ajax({
        method: 'GET',
        url: `/api/saved_houses/${id}`,
        data: { id }
    })
}

export const deleteSavedListing = id => {
    
    return $.ajax({
        url: `/api/saved_houses/${id}`,
        method: 'DELETE',
        data: { id }
    });
}

export const postListing = (formData) => {
    
    return $.ajax({
        url: '/api/listings',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
}
export const updateListing = (formData, id) => {
    
    return $.ajax({
        method: 'PATCH',
        url: `/api/listings/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
}
    