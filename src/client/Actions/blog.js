export const setBlog = (data) => ({
    type: 'SET_BLOG',
    data
});

export const getBlog = () => ({
    type: 'GET_BLOG'
})

export const getSingleBlog = (data) => ({
    type: 'SINGLE_BLOG',
    data
})

export const getSingle = (id) => ({
    type: 'GET_SINGLE',
    id
})