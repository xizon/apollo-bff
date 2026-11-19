# Apollo BFF Project Starter

## Getting Started

### 1. Install Node.js (One-Time Setup)

Visit [https://nodejs.org](https://nodejs.org) and download the **LTS version**. Follow the installer instructions to complete the installation.

Once installed, open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
node -v
```

If you see a version number, Node.js is installed successfully.

---

### 2. Start the Server (Daily)

Navigate to the project folder and run the following commands:

```bash
npm install
npm run dev
```

When you see the following message, the server is running successfully:

🚀 BFF ready at http://localhost:4000/graphql

---

### 3. Test in Your Browser

Open the following URL in your browser:

[http://localhost:4000/graphql](http://localhost:4000/graphql)

Wait for the GraphQL playground to load, then paste the following query and click **▶ Run**.

```graphql
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

If you see the results, everything is working correctly.

---

## How It Works

The GraphQL endpoint is available at:

`http://localhost:4000/graphql`

The browser's GraphQL playground sends requests to this endpoint. For example, an introspection request can be sent using the following JSON payload:

```json
{
  "query": "query IntrospectionQuery {\n  __schema {\n    queryType { name }\n    mutationType { name }\n    subscriptionType { name }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args(includeDeprecated: true) {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args(includeDeprecated: true) {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields(includeDeprecated: true) {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type { ...TypeRef }\n  defaultValue\n  isDeprecated\n  deprecationReason\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "operationName": "IntrospectionQuery"
}
```

---

## What Is This?

This project is a **Backend-for-Frontend (BFF)** service that:

- Acts as an intermediary between the frontend and backend.
- Uses GraphQL to unify and organize data.
- Provides data to web applications and mobile apps.

**No code changes are required to get it running.**
