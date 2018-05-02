export const setContent = (data) => ({
    type: 'SET_CONTENT',
    data
});

export const setCategory = (data) => ({
    type: 'SET_CATEGORY',
    data
});

export const setCatContent = (data) => ({
    type: 'SET_CATEGORY_CONTENT',
    data
});

export const getContent = () => ({
    type: 'GET_CONTENT'
})

export const setSingleContent = (data) => ({
    type: 'SINGLE_CONTENT',
    data
})

export const getSingle = (id) => ({
    type: 'GET_SINGLE',
    id
})