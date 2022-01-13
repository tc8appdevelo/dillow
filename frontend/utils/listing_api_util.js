export const getListings = () => $.ajax({
    url: '/api/listings',
    method: "GET"
})



export const getListing = id => (
    $.ajax({
        method: 'GET',
        url: `/api/listings/${id}`
    })
);

// export const postListing = () => (
//     $.ajax({
//         method: 'POST',
//         url: `/api/listings`,
//         data: { listing }
//     })
// )

export const postSavedListing = id => 
    $.ajax({
        method: 'POST',
        url: `/api/saved_houses`,
        data: { id },
    });
