
export const getListings = (data) => $.ajax({
    url: '/api/listings',
    method: "GET",
    data
})

export const getListing = id => {
    debugger
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
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `/api/listings/${listing.id}`
    })
}

export const postSavedListing = id => {
    debugger
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
    debugger 
    return $.ajax({
        method: 'GET',
        url: `/api/saved_houses/${id}`,
        data: { id }
    })
}

export const deleteSavedListing = id => {
    debugger
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
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/listings/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
}
    