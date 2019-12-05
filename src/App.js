// TopPage:Webサイトを開いて最初に表示させたおいページ
// MapPage:生物規範工学のようなMap検索ページ
// KeySearchPage:キーワード入力などから検索したいページ

import React, { Component } from 'react';
import TopPage from './Page/TopPage';
import MapPage from './Page/MapPage';
import KeySearchPage from './Page/KeySearchPage';

export default class App extends Comment {
    constructor(props) {
        super(props);
        // this.situationId = location.search.replace(/^\?/, '');
    }

    render() {
        return (
            //ここにページ分岐を書けばいい？
        );
    }
}
