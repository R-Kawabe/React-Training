// TopPage:Webサイトを開いて最初に表示させたおいページ
// MapPage:生物規範工学のようなMap検索ページ
// KeySearchPage:キーワード入力などから検索したいページ

import React, { Component } from 'react';
import TopPage from './Page/TopPage';
import MapPage from './Page/MapPage';
import KeySearchPage from './Page/KeySearchPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line no-restricted-globals
        this.page = location.search.replace(/^\?/, '');
    }

    render() {
        const Address = this.page;
        switch (Address) {
            case "Map":
                return (<MapPage></MapPage>);
            case "KeySearch":
                return (<KeySearchPage></KeySearchPage>);
            default:
                return (<TopPage></TopPage>);
        }
    }
}
