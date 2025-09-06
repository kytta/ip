# ip is now on Codeberg

I've had enough with GitHub. This repository is now on Codeberg: https://codeberg.org/kytta/ip.git

The repository on GitHub will stay archived (read-only) for a few months before I delete it for good.

<details><summary>Previous README</summary>

# kytta/ip

A very simple endpoint to get your public IP address. It's so simple, it runs in
your reverse proxy!

## Usage

Just send a GET request to [ip.kytta.dev](https://ip.kytta.dev/) using your
tool of choice (examples below). In response, you'll get the IP address as
`text/plain`.

### cURL

```sh
curl ip.kytta.dev
```

### wget

```sh
wget -qO- ip.kytta.dev
```

### HTTPie

```sh
http ip.kytta.dev
```

## Deploy

1. Download [ip.caddyfile](./ip.caddyfile) and place it in `/etc/caddy/`
   (or anywhere else where Caddy can read it)
2. Import the file in your main Caddyfile:

   ```caddyfile
   import "ip.caddyfile"
   ```
3. Import the `ip` snippet in your site block:

   ```caddyfile
   https://ip.example.com,
   http://ip.example.com {
     import ip
   }
   ```

   **Note:** You should include both http and https to disable auto redirect.
             This makes it more accessible for tools like cURL that don't follow
             redirects and use `http://` by default.

## Licence

[AGPL-3.0-only](https://spdx.org/licenses/AGPL-3.0-only.html) © 2025 [Nikita Karamov](https://www.kytta.dev/)

</details>
