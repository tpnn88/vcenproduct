'use strict'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

export default class Hasura {
    constructor(cfg) {
        const paramDefault = {
            uri: 'http://localhost:3020/graphql'
        }
        this.params = {...paramDefault, ...cfg}
        this.init()
    }
    init() {
        // HTTP connection to the API
        const httpLink = createHttpLink({
            uri: this.params.uri
        })

        // Cache implementation
        const cache = new InMemoryCache()

        // Create the apollo client
        this.apolloClient = new ApolloClient({
            link: httpLink,
            cache
        })
    }
    test() {
        this.apolloClient
            .query({
                query: gql`
                  query MyQuery {
                      about_cenhomes {
                        address
                      }
                    }
                `
            })
            .then(result =>{
                console.log(result)
            });
    }
    query(grapql) {
        return this.apolloClient
            .query({
                query: gql`${grapql}`
            })
    }
}