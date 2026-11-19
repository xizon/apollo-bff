
# Apollo BFF 项目骨架

## 启动

### 1. 安装 Node.js（只要一次）
访问 https://nodejs.org  
下载 **LTS 版本**，一路点“下一步”。

安装完成后，双击终端（Mac）或命令提示符（Windows），输入：
```
node -v
```
能看到版本号说明成功。

---

### 2. 启动服务（每天只做这一步）
进入这个文件夹后，依次输入：

```
npm install
npm run dev
```

看到：
🚀 BFF ready at http://localhost:4000/graphql  
说明已经启动成功。

---

### 3. 打开浏览器测试
浏览器打开：
http://localhost:4000/graphql

等测试界面出现，粘贴下面内容，点 ▶ 运行：



```
query {
  currentUser {
    id
    name
    isVip
  }
  orders {
    id
    status
  }
}
```

能看到结果就说明一切正常。

相当于访问接口 `ttp://localhost:4000/graphql`

参数：
```json
{
    "query": "\n    query IntrospectionQuery {\n      __schema {\n        \n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          description\n          \n          locations\n          args(includeDeprecated: true) {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      description\n      \n      fields(includeDeprecated: true) {\n        name\n        description\n        args(includeDeprecated: true) {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields(includeDeprecated: true) {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        description\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      description\n      type { ...TypeRef }\n      defaultValue\n      isDeprecated\n      deprecationReason\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ",
    "operationName": "IntrospectionQuery"
}
```

---

## 这是干嘛用的？
这是一个：
- 前端和后端中间的服务（BFF）
- 用 GraphQL 统一数据
- 给网页 / App 用的

不用改代码也能跑。
