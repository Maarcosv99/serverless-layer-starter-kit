<h1 align="center">🌍 Serverless Layer Starter Kit</h1>
<p align="center">To quickly create layer for microservices.</p>

## Clone the repository

```
git clone https://github.com/Maarcosv99/serverless-layer-starter-kit .
```

### Requirements

- **Node.js**: `>= 14.x`
- **Typescript**: `>= 4.1.3`

## Basic Usage

### 📦 Package, build and deploy your layer:

For **stage dev**: 

```
bash run.deploy.dev.sh
```

For **stage production**:

```
bash run.deploy.prod.sh
```

### 💻 Install in your lambda as package:

You need to publish your project on github and run the below code in your lambda:

For **public repository:**

```
npm i -D git+ssh://git@github.com:{{ username }}/{{ repository_name }}
```

For **private repository:**

```
npm i -D git+https://{{ token }}:x-oauth-basic@github.com/{{ username }}/{{ repository_name }}.git
```

## License:

[GNU Affero General Public License v3](https://www.gnu.org/licenses/agpl-3.0.en.html)