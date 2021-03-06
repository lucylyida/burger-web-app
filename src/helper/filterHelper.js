export const categoryfilterHelper = (data, categoryId, categoryName) => {
    const duplicateRow = data.filter(d => d.c_id !== categoryId && d.c_name === categoryName.trim())
    return duplicateRow.length > 0;
}

export const productfilterHelper = (data, id, productName, productPrice, description, productImage) => {
    // const img = productImage === '' && undefined
    const duplicateRow = data.filter(d => d.p_id !== id && d.p_name === productName.trim())
    return duplicateRow.length > 0;
}

export const profilefilterHelper = (data, id, name) => {
    const duplicateRow = data.filter(d => d.id !== id && d.name === name.trim())
    return duplicateRow.length > 0;
}