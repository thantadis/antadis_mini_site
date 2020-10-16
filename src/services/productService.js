let endpoint = '/api/product.json';
export const FetchProduct = async() => {
    try {
        let response = await fetch(endpoint);
        let data = await response.json();
        return data;
    } catch (err) {
        throw new Error(err.message)
    }
};