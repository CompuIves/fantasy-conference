import axios from "axios"

export default {
  defaults: {
    user: {}
  },
  resolvers: {
    Query: {
      userFromGithub: async (_, __, { cache }) => {
        const access_token = await localStorage.getItem("gh-token")
        const { data: user } = await axios.get("https://api.github.com/user", {
          params: {
            access_token
          }
        })

        cache.writeData({ data: { user } })

        return {
          ...user,
          __typename: "User"
        }
      }
    },
    Mutation: {
      logout: async (_, __, { cache }) => {
        await localStorage.removeItem("gh-token")
        cache.writeData({ data: { user: {} } })
        return null
      }
    }
  }
}
