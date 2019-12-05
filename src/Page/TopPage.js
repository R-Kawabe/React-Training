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

    render() {
        const list = this.state;
        return (<ul>
            {Object.keys(list).map(k => <li key={k}><a href={`?${k}`}>{list[k]}</a></li>)}
        </ul>);
    }
}