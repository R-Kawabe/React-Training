import React, { Component } from 'react';

export default class TopPage extends Component {
    // constructor(prop) {
    //     super(prop);

    // }
    render() {
        return (
            <div>test
            <ul>
                    <li><a href='?Map'>マップ</a></li>
                    <li><a href='?KeySearch'>キーワード</a></li>
                </ul>
            </div>

        )
    }
}