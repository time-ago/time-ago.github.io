# Timeago docs
Documentation website for [timeago](https://github.com/SerhiiCho/timeago) package for Go (Golang) written with [Vitepress](https://vitepress.dev/)

## Development
### Without Docker
You'll need to have Node and NPM installed on your machine to run it locally.

#### Install Dependencies
```bash
npm i
# or
yarn
```

#### Watch File Changes
```bash
npm run dev
# or
yarn dev
```

Navigate to `http://localhost:5173` to see your documentation.

### With Docker
#### 1. Build an image
To build an image, navigate to the root of the project that contains `Dockerfile` and run this command:
```bash
docker compose build
```

#### 2. Run the container
To run a container, navigate to the root of the project that contains `Dockerfile` and run this command:
```bash
docker compose up -d
```

You can visit `http://localhost:3000` to see your documentation.

#### 3. Enter the container
To enter inside of the container, run this command:
```bash
docker exec -it timeago-docs sh
```

You'll be able to run NPM commands inside of the container.

#### 4. Stop the container
```bash
docker compose down
```

