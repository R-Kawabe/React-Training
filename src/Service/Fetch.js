export default class Fetch {
    /**
     * endpointに指定されたSPARQLエンドポイントにリクエストを投げる
     * @param {string} endpoint 
     * @param {string} sparql 
     * 
     * @returns {Promise<Response>}
     */
    sendQuery(endpoint, sparql) {
        if (!endpoint || !sparql) {
            throw new Error("urlとqueryは必須です");
        }

        const requestParam = {
            query: sparql,
            output: "json"
        };
        const url = endpoint + "?" + this.buildParam(requestParam);

        const headers = {
            Accept: 'application/sparql-results+json'
        }
        return fetch(url, {
            method: 'GET',
            headers,
            mode: 'cors',
            cache: 'no-cache',
        });
    }
    /**
     * URLのクエリパラメータを生成する関数
     * @param {Object<string, string>} obj 
     * 
     * @return {string}
     */
    buildParam(obj) {
        return Object.keys(obj)
            .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
            .join('&');
    }

}