import React, { Component } from 'react'

export default class KeySearchPage extends Component {
    //キーワード入力欄を設ける関数
    //ドロップダウンリストを設ける関数
    //入力結果を送信する関数
    //リスト選択結果を送信する関数
    //検索結果一覧を表示する関数
    constructor(props) {
        super(props);
        this.state = { value: '' }; //valueの初期値

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { //stateに入力値をセットする
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('hoge:' + this.state.value);
        event.preventDefault();
    }

    hoge() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    huga() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <select type="select" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    render() {
        return (
            <div>{this.hoge()}
                <br />
                {this.huga()}</div>
        );
    }
}