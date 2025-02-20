# clone から起動までの流れ

1. ~/.ssh/rsa_id.pub があるか確認
2. 無ければ、以下を実行

```bash
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub
# 出てきたヤツをコピーしてgithubに設定する
```

3. git clone する

```bash
git clone git@github.com:iruk23/ogaya.git
```

4. 以下実行

```bash
cd ogaya
npm i
npx prisma generate
npm run dev --open
```

# ogaya
