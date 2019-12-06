import React, { Component } from 'react';
import Search from '../Service/Search'

export default class TopPage extends Component {
    constructor(prop) {
        super(prop);
        this.state = {};
        this.getList = new Search();
    }

    async getPageList() {
        const list = await this.getList.getList();
        this.setState(list);
    }

    render() {//ページ遷移はReact-Routerを使おう！
        //Routerのタグを使って遷移したいページのリンクを貼る
        return (<div>test</div>);
    }
}