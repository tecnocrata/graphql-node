'use strict'

const Handlebars = require('handlebars')
const { request } = require('graphql-request')
const endpoint = 'http://localhost:3000/api'

const template = `
{{#with error}}
  There was an error: {{../error}}
{{/with}}
{{#each items}}
<div class="item">
  <h2>{{__typename}}</h2>
  {{#with name}}
    <p>{{../name}}</p>
  {{/with}}
  {{#with area}}
  <p>{{../area}}</p>
  {{/with}}
  {{#with area}}
    <p><a href="code:{{../code}}">{{../code}}</a></p>
  {{/with}}
</div>
{{/each}}
`
const templateData = Handlebars.compile(template)
debugger;
async function search () {
  // const query = `
  //   query generalSearch ($keyword: String!){
  //     searchItems(keyword: $keyword) {
  //       __typename
  //         ...on Course {
  //           title
  //           description
  //         }
  //         ...on Monitor {
  //           name
  //           phone
  //         }
  //         ...on Student {
  //           name
  //           email
  //         }
  //     }
  //   }
  // `
  const query = `
    query generalSearch ($keyword: String!){
      searchItems(keyword: $keyword){
        __typename
        ... on Owner {
          name
          lastName
          since
      }
        ... on Property{
          code
          area
        }
        ... on Building{
          name
        }
      }
    }
  `

  const variables = { keyword: document.getElementById('search').value }
  let result, html

  try {
    result = await request(endpoint, query, variables)
    html = templateData({ items: result.searchItems })
  } catch (error) {
    html = templateData({ error: error })
  }

  document.getElementById('result').innerHTML = html
}

window.onload = () => {
  document.getElementById('btn-search').addEventListener('click', search)
}
