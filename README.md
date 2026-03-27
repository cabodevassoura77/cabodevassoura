# App de Controle Financeiro Pessoal

Este repositório inicia um projeto para um aplicativo de controle financeiro pessoal.

## Objetivo
Ajudar pessoas a entender para onde o dinheiro vai, planejar metas e manter o orçamento sob controle.

## MVP (primeira versão)
- Cadastro e login de usuário.
- Registro de receitas e despesas.
- Categorias (moradia, transporte, alimentação, lazer, etc.).
- Dashboard com saldo atual, total por categoria e evolução mensal.
- Metas financeiras simples (ex.: reserva de emergência).

## Tecnologias sugeridas
- **Frontend:** React + TypeScript
- **Backend:** Node.js + NestJS (ou Express)
- **Banco de dados:** PostgreSQL
- **Autenticação:** JWT
- **Infra inicial:** Docker Compose para desenvolvimento local

## Modelo de dados inicial
- `users`: id, name, email, password_hash, created_at
- `categories`: id, user_id, name, type (`income`/`expense`)
- `transactions`: id, user_id, category_id, amount, description, date, created_at
- `goals`: id, user_id, title, target_amount, current_amount, deadline

## Próximos passos
1. Definir stack final e padrão arquitetural.
2. Criar wireframes das telas principais.
3. Implementar autenticação e CRUD de transações.
4. Implementar dashboard com gráficos.
5. Adicionar exportação (CSV) e backup.

## Critérios de sucesso do MVP
- Usuário consegue registrar movimentações em menos de 10 segundos.
- Usuário visualiza saldo e gastos por categoria sem filtros complexos.
- Dados persistidos com segurança e acesso autenticado.
