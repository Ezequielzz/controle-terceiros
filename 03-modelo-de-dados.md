# Modelo de Dados

## Estrutura do Card

Cada Ordem de Serviço será representada por um objeto JSON.

```json
{
  "id": "",

  "cliente": "",
  "os": "",
  "itens": "",
  "finalidade": "",

  "dataEnvio": "",

  "dataOriginalRetorno": "",
  "dataPrevistaRetorno": "",
  "dataRealRetorno": "",

  "reprogramado": false,
  "entregueComAtraso": false,

  "coluna": "em-separacao",

  "observacoes": ""
}
```

---

## Descrição dos Campos

### id

Identificador único do card.

Tipo:

```text
String
```

Exemplo:

```text
a8f7d1c2
```

---

### cliente

Nome do cliente responsável pela Ordem de Serviço.

Tipo:

```text
String
```

---

### os

Número da Ordem de Serviço.

Tipo:

```text
String
```

---

### itens

Descrição dos itens enviados para usinagem.

Tipo:

```text
String
```

---

### finalidade

Finalidade ou observação principal da usinagem.

Tipo:

```text
String
```

---

### dataEnvio

Data em que o item foi enviado ao fornecedor.

Tipo:

```text
Date (YYYY-MM-DD)
```

---

### dataOriginalRetorno

Primeira data prevista para retorno da peça.

Tipo:

```text
Date (YYYY-MM-DD)
```

---

### dataPrevistaRetorno

Data atualmente prevista para retorno.

Pode ser alterada em caso de reprogramação.

Tipo:

```text
Date (YYYY-MM-DD)
```

---

### dataRealRetorno

Data efetiva em que a peça retornou.

Tipo:

```text
Date (YYYY-MM-DD) | null
```

---

### reprogramado

Indica se o prazo original sofreu alteração.

Tipo:

```text
Boolean
```

Valores:

```text
true
false
```

---

### entregueComAtraso

Indica se foi concluído com atraso.

Tipo:

```text
Boolean
```

Valores:

```text
true
false
```

---

### coluna

Etapa atual do fluxo Kanban.

Tipo:

```text
String
```

Valores permitidos:

```text
em-separacao
enviado
concluido
```

---

### observacoes

Campo livre para anotações adicionais.

Tipo:

```text
String
```

---

## Regras de Negócio

### Criação do Card

Ao criar um novo card:

* dataOriginalRetorno recebe o valor informado pelo usuário.
* dataPrevistaRetorno recebe o mesmo valor inicial.
* reprogramado inicia como false.
* coluna inicia como em-separacao.

---

### Reprogramação

Ao alterar a data prevista:

* dataOriginalRetorno permanece inalterada.
* dataPrevistaRetorno recebe a nova data.
* reprogramado passa para true.

---

### Conclusão

Ao mover o card para a coluna concluido:

* o usuário deverá informar a dataRealRetorno caso ainda não exista.

---

### Situação Visual

A situação visual não será armazenada no JSON.

Ela será calculada pelo sistema.

#### Verde

Card concluído.

#### Azul

Card reprogramado.

#### Vermelho

Data prevista ultrapassada e card não concluído.

#### Amarelo

Prazo próximo do vencimento.

#### Padrão

Demais situações.

```
```
