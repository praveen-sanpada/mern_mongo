const validateUser = (data) => {
    if (!data.name || data.name.length < 3) return 'Invalid name';
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) return 'Invalid email';
    if (data.age && data.age < 0) return 'Invalid age';
    return null;
};

module.exports = { validateUser };
