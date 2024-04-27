This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## With Docker

Let's create a Dockerfile with the content we just discussed. We should also create a .dockerignore file containing node_modules and the Next.js output directory so that we won't be copying them into the container:
```bash
.next

node_modules
```

We can now proceed by building the Docker container:
```bash
docker build -t my-first-dockerized-nextjs-app .
docker build  -f Dockerfile-static -t my-first-dockerized-nextjs-app .
```
We're tagging it with a custom name, in this case, my-first-dockerized-nextjs-app.

Once the build succeeds, we can run the container as follows:
```bash
docker run -p 3000:3000 my-first-dockerized-nextjs-app
```
We are finally able to reach our web application at http://localhost:3000!

Starting from that simple configuration, we will be able to deploy our application to any managed container service (such as AWS ECS or Google Cloud Run), any Kubernetes cluster, or any machine with Docker installed.

Using containers in production has many benefits, as we only need a very simple configuration file for setting up the virtualization of a Linux machine to run our application in. Whenever we need to duplicate, scale, or reproduce our build, we can simply do that by sharing the Dockerfile and executing it, making the whole process incredibly straightforward, scalable, and easy to maintain.

That said, do we always need Docker? Let's discuss this in the summary for this chapter, right in the next section.
