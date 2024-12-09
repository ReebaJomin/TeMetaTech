function getValueFromPath(obj, path) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
}

const data = {
    user: {
        profile: {
            name: 'John Doe',
            age: 30
        },
        settings: {
            theme: 'dark'
        }
    }
};

const path = ['user', 'profile', 'name'];
const value = getValueFromPath(data, path);

console.log(value);
 // OUTPUT
 // John Doe
