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

    componentDidMount() {//addEventListener的な、このファイルが読み込まれたときに実行
        //
    }

    handleChange(event) { //stateに入力値をセットする
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('hoge:' + this.state.value);
        event.preventDefault();
    }

    //ドロップダウンリストは、課題、目的、対象のそれぞれについてを作成したい
    //ドロップダウンリストのoptionは、クエリを発行して返ってきたトリプルを整形して組み込みたい
    //

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="text">
                        <label>
                            Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>

                    <div className="select">
                        <label>
                            kadai:
                    <select value={this.state.value} onChange={this.handleChange}>
                                {Object.keys(/*返ってきたデータ*/).map(k => <option key={k}>{/*データ*/[k]}</option>)}
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}