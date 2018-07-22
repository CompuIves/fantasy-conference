# Github Login

This is the service for login with Github:

To run locally:

```sh
git clone git@github.com:CompuIves/fantasy-conference.git
cd github
yarn
```

You'll need to provide three environment variables when running:

```sh
# Your GitHub application client id
GH_CLIENT_ID=xyz123
# Your GitHub application client secret
GH_CLIENT_SECRET=asdf123
```

> Create an application on GitHub [here](https://github.com/settings/applications/new) to get your client id and secret if you haven't done that already.

After that change the dumb variables in .env.example and ren ame it to .env and run:

```sh
yarn dev
```

---

This project was created with [micro-github](https://github.com/mxstbr/micro-github).
