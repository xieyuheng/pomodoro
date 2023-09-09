# Pomodoro

[ [Visit](https://pomodoro.fidb.app)
| [Dictionary](https://en.wiktionary.org/wiki/pomodoro)
| [Wikipedia](https://en.wikipedia.org/wiki/Pomodoro_Technique) ]

🍅 A Pomodoro timer.

## Development

```sh
npm install     # Install dependencies
npm run dev     # Start the dev server
npm run check   # Type check
npm run format  # Format the code
```

We use [FiDB](https://github.com/fidb-official/fidb) for our backend API.

To start the HTTP API server using the example [`database`](database),
run:

- The example username is `xieyuheng`, and the example password is `123456`.

```sh
npx fidb serve database
```

Note that, to work with the frontend dev server,
the backend API port should be `5108`
(the default port of FiDB).

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

Remember to add yourself to [AUTHORS](AUTHORS).
Your line belongs to you, you can write a little
introduction to yourself but not too long.

## License

[GPLv3](LICENSE)
