# 前橋駅〜渋川駅間のバスの時間を検索するアプリ（予定）
2月２8日に作成したものであり、不定期に更新されます。

今のところ以下のことしかできません（へっぽこ）。
- 現在時刻の表示（土日祝日ダイヤか平日ダイヤか表示）
- バスの出発する場所と到着する場所の入力
- それらの入れ替え
- 乗るバスが前橋駅〜渋川駅行なのか渋川駅駅〜前橋駅行なのかを表示

   

環境設定の手順⑦で記述しますが、作業フォルダ内にてnode_modulesフォルダ以外のファイル・フォルダをこのレポジトリに含まれているもので置き換えてください。

## 使用言語
React 

TypeScript

## 使用した拡張機能
ES7 React/Redux/GraphQL/React-Native snippets

Prettier - Code formatter

## 環境設定の手順
概略） Node.js にて vite を使って React を使用できるようにします。

前提） Node.js と npm は事前にインストールしてあるものとします。


①任意の場所でターミナルを開き、以下を入力

  `npm create vite@latest`
  
②作業フォルダ名の入力を求められるので任意の値を入力

③どのフレームワークを使用するかを聞かれるので　React を選択

④どのvariantを使用するかを聞かれるので TypeScriptを選択

⑤作業フォルダに移動

  `cd 作業フォルダのパス`
  
⑥任意のテキストエディタで作業フォルダを開く（作者の場合はvscode）

  `code .`
  
⑦node_modulesフォルダ 以外のフォルダ・ファイルを削除し、このリポジトリ内にあるフォルダ・ファイルをコピー

 （node_modulesのフォルダ数が多くてリポジトリにあげられなかったため、それ以外のフォルダ・ファイルのみリポジトリにあります）

⑧ターミナルを開いて、以下を入力

  `npm i`
  
  `npm install jotai`
  
  `npm run dev`
  
  "http://localhost:3000/"
  にてアプリが確認できるはずです。

その他
