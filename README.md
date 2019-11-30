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
ここはクラスファイルを置く
エンティティは存在そのもの
importするようなファイルは基本的にない
例えば、エンドポイントからデータを受け取った時、ここにあるファイルを呼び出して型を当てはめる。
- 