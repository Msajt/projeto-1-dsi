# projeto-1-dsi
## Inicialização do CRUD
1. Criar arquivo `.env` na raiz do arquivo<br>
1.1. Escrever `PORT=8001` nesse arquivo para o funcionamento da porta do servidor<br>
2. Inicializar servidor com:<br>
```
npm i
npm start
```
3. Inicializar o front-end utilizando o `Live Server` do VS Code<br>
4. Abra o arquivo `index.html` que está na pasta `public`
5. Pegue as IDs no arquivo `movies.json` para fazer uma consulta, remoção ou mudança<br>
6. Nesse projeto é possível fazer os métodos GET, POST, PUT e DELETE<br>

## Métodos
### 1. GET
#### 1.1. GET Movies<br>
- Clique no botão **LISTAR FILMES**<br>

#### 1.2. GET Movie<br>
- Pegue uma ID no arquivo `movies.json` para verificar as informações do filme na tela e clique em **LISTAR FILME**

### 2. POST
- Insira o `título`, o `ano`, o `gênero` e a `classificação` do filme e clique em **INSERIR NOVO FILME**

### 3. PUT
- Insira o `id` e demais características que deseja mudar do filme e clique em **MUDAR DADOS DO FILME**

### 4. DELETE
- Pegue uma ID no arquivo `movies.json` para deletar o filme da lista e clique em **DELETAR FILME**
