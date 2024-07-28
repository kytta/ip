# kytta/ip

> A very simple endpoint to get your public IP address

## Usage

Just send a GET request to [ip.kytta.dev](https://ip.kytta.dev/) using your
tool of choice (examples below). In response, you'll get the IP address as
`text/plain`. If the IP address could not be determined, `0.0.0.0` will be
returned.

### cURL

```sh
curl -L ip.kytta.dev
```

### wget

```sh
wget -qO- ip.kytta.dev
```

### HTTPie

```sh
https -b ip.kytta.dev
```

## Deploy

Don't trust me? Deploy it yourself:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fkytta%2Fip)

## Licence

[AGPL-3.0-only](https://spdx.org/licenses/AGPL-3.0-only.html) © 2021–2022 [Nikita Karamov](https://www.kytta.dev/)

---

This project is hosted on GitHub: <https://github.com/kytta/ip>
