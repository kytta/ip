# kytta/ip

> A very simple endpoint to get your public IP address

## Usage

Just send a GET request to [kytta-ip.vercel.app](https://kytta-ip.vercel.app/) using your
tool of choice (examples below). In response, you'll get the IP address as
`text/plain`. If the IP address could not be determined, `0.0.0.0` will be
returned.

### cURL

```sh
curl -L kytta-ip.vercel.app
```

### wget

```sh
wget -qO- kytta-ip.vercel.app
```

### HTTPie

```sh
https -b kytta-ip.vercel.app
```

## Licence

[AGPL-3.0-only](https://spdx.org/licenses/AGPL-3.0-only.html) © 2021–2022 [Nikita Karamov](https://www.kytta.dev/)

---

This project is hosted on GitHub: <https://github.com/kytta/ip>
