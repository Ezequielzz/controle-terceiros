# Documento de Requisitos - Sistema Kanban de Usinagem

## Objetivo

Desenvolver uma aplicação desktop para controle de peças mecânicas enviadas para usinagem terceirizada, utilizando a metodologia Kanban para acompanhamento visual das etapas do processo.

## Requisitos Não Funcionais

- Aplicação desktop.
- Funcionamento offline.
- Armazenamento local dos dados.
- Interface simples e intuitiva.
- Persistência automática das alterações.

---

## Colunas do Kanban

### Em Separação

Ordens de Serviço aguardando preparação e envio para usinagem.

### Enviado

Ordens de Serviço já encaminhadas ao fornecedor terceirizado.

### Concluído

Ordens de Serviço finalizadas dentro ou fora do prazo previsto.

---

## Estrutura dos Cards

Cada cartão deverá conter:

* Cliente
* Número da OS
* Itens
* Finalidade
* Data de Envio
* Data Prevista de Retorno
* Data Real de Retorno
* Reprogramado?
* Entrega com Atraso?
* Coluna Atual

---

## Funcionalidades

### Gestão de Cards

* Criar cartão
* Editar cartão
* Excluir cartão
* Movimentar cartão entre colunas

### Pesquisa

* Pesquisa por número da OS
* Pesquisa por cliente

### Controle de Prazo

* Destacar cartões próximos ao vencimento
* Destacar cartões vencidos
* Atualizar datas de retorno

### Backup

* Exportar dados
* Importar dados

---

## Regras de Destaque

### Verde

Ordens concluídas.

### Amarelo

Ordens com prazo de retorno previsto para os próximos 3 dias.

### Vermelho

Ordens atrasadas.

### Azul

Ordens reprogramadas.

### Padrão

Ordens dentro do prazo.

---

## Fluxo Principal

Em Separação

↓

Enviado

↓

Concluído