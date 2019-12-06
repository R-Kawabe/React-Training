# 検索支援システム
## 作成しなければならないファイル
### Pageディレクトリ
App.jsから呼び出されるページ
HTMLを出力するファイル
- キーワード検索を行うページ
- キーワード検索から候補を表示するページ
- マップ検索を行うページ
- SPARQL検索を行うページ（必ずしも必要ではない）

### Serviceディレクトリ
各ページから呼び出されるファイル
- エンドポイントにクエリを投げて、結果を受け取ってくるファイル
- 受け取ったデータを整形するファイル
- キーワードまたはSPARQL検索結果の一覧表示用に、テーブルDOMを表示するファイル
- エンドポイントと通信するファイル
- トップページに各検索ページへのリンクを生成するファイル？

### entityディレクトリ
クラスファイルを置く
エンティティは存在そのもの
importするようなファイルは基本的にない
例えば、エンドポイントからデータを受け取った時、ここにあるファイルを呼び出して型を当てはめる。

### Repositoryディレクトリ
外部にアクセスしたり外部APIにアクセスしたりする部分のファイルを置こう
例えばクエリを作る部分とかクエリと一緒にURLを渡してエンドポイントにアクセスするところとか


## まとめたいJSファイル
検索するときも、検索に必要なプルダウンメニューを生成するときも、マップを生成するときも、エンドポイントにクエリを投げて返ってきた結果を整形して、それぞれ結果として表示するなりメニューにするなりしたい。
ということは、検索ボタンを押した時に実行＆ページ読み込み時に実行なので
- クエリを生成するタイミング
- エンドポイントへのアクセスのタイミング
が別である。ということで、
- クエリを受け取る
- 受け取ったクエリを発行する
関数を1つのファイルにまとめればいい？

返ってきた結果の表示なども違うから、そこも分ける。
- プルダウンメニューのリストを生成する関数
- マップ生成用の関数
- 検索結果表示用の関数
これらに使うデータはEntity以下に置いたクラスファイルで型定義
上記の関数はService以下に置くという解釈でおｋ？