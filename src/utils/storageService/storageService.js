class StorageService {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        const result = localStorage.getItem(key);
        if (result) {
            return JSON.parse(result);  
        }
        return null;
    }

    remove(key) {
        localStorage.removeItem(key)
    }

    clear() {
        localStorage.clear();
    }
}

export default new StorageService();
