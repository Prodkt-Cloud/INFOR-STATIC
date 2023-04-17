# Infor - Static site search


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Tovuti Notes

When calling to the API locally using MacOS Device you may encounter a connection error when executing calls to multiple endpoints. I found that I had an extra entry in my `hosts` of `::1 localhost`. To bypass this error and reach a successful fetch open your terminal and run `sudo nano /etc/hosts` and remove the entry `::1 localhost` and save. Retest your fetch and for me this resolved all issues.