const API_URL = process.env.REACT_APP_API_URL;

export const apiCall = async (endpoint, method = 'GET', body = null) => {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        });
        return await res.json();
    } catch (err) {
        console.error("API Error:", err);
        return { error: 'API call failed' };
    }
};