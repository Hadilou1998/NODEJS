# json-server

Création d'une API JSON en local de type REST.

## Installation

`npm init -y` (avec PowerShell)
`pnpm install json-server` (dans VSCODE)

dans package.json et après scripts mettre :
`"start" : "npx json-server --watch db.json"`

créer le fichier `db.json` (vide)

puis : `npm start`

## Utilisation

Les endpoints (points d'accès) sont définis dans le fichier `db.json`

### GET

| Objectif                  | Endpoint                          | Paramètres        |
| ------------------------- | --------------------------------- | ----------------- |
| Accès à tous les docteurs | /doctors                          | aucun             |
| Accèes à un docteur donné | /doctors/id                       | id = int          |
| Tri de A à Z              | /doctors?_sort=city               | aucun             |
| Tri par ville et de A à Z | /doctors?_sort=city&_order=desc   | `_sort`, `_order` |
| Docteurs par ville        | /doctors?city=Paris               | donnée du schéma  |
| Pagination                | /doctors?_page=1                  | `_page`           |
| Pagination                | /doctors?_limite=1                | `_limite`           |


### 

calcul-addition.com/?a=1341&b=4321

resp : [ {
    "result": 5661
} ]