# NickKaramoff/ip

A very simple endpoint to get your global IP address as `text/plain`


## Usage

Just send a GET request to [ip.karamoff.dev](https://ip.karamoff.dev/) using your tool of choice (examples below)

If the IP address could not be determined, `0.0.0.0` is returned.

### cURL

```sh
curl -L ip.karamoff.dev
```

### wget

```sh
wget -qO- ip.karamoff.dev
```

### HTTPie

```sh
http -bF ip.karamoff.dev
```

## Deploy

Don't trust me? Deploy it yourself:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FNickKaramoff%2Fip)
