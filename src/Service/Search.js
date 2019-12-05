export default class SearchSearvice {
    /**
     * 
     * @returns {Promise<Object>}
     */
    async fetchData() {
        const url = '../../public/page.json';
        const res = await fetch(url, { method: "GET" });
        if (!res.ok) {
            throw new Error(`error(${res.status}/${res.statusText})`);
        }
        return await res.json();
    }
    /**
     * @returns {Object<string,string>}
     */
    getList() {
        return this.fetchData();
    }
}