This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Table of Contents

1. [Getting Started With Next](#start)
2. [useDapp](#useDapp)
3. [Apollo Client](#apollo)
4. [Tailwind and DaisyUI](#TW)
5. [GSAP](#GSAP)
6. [Learn More](#learn)
7. [Vercel Deployment](#vercel)
8. [References](#ref)

# Getting Started With Next <a name="start"></a>

First, run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## UseDapp <a name="useDapp"></a>

### A Framework for Rapid Dapp Developement.

Connection management:
Read-only mode out-of the box
Network switching
Handling multiple networks

🔄 Reading blockchain state
Auto refresh on new block
Auto refresh on wallet change
Combine multiple calls into a single multicall

✅ Transactions
Track transaction state
History
Notifications

⚙️ [Browser plugin](https://chrome.google.com/webstore/detail/usedapp-devtools/)
Available in Beta for Firefox and Chrome
Track under-the-hood events
Manage ABIs and tags

## Apollo Client <a name="apollo"></a>

More than just a REST replacement, the graph is a unified representation of all your data, services, and digital capabilities. The graph enables app developers to delete thousands of lines of boilerplate code, move fast without waiting on backend teams, and keep features consistent across web and mobile platforms.

With Apollo's declarative approach to data fetching, all of the logic for retrieving your data, tracking loading and error states, and updating your UI is encapsulated by the useQuery Hook. This encapsulation makes integrating query results into your presentational components a breeze!
Let's see what this looks like in practice with Apollo Client and React:

```
function Feed() {
  const { loading, error, data } = useQuery(GET_DOGS);
  if (error) return <Error />;
  if (loading) return <Fetching />;

  return <DogList dogs={data.dogs} />;
}

```

Here we're using the useQuery Hook to fetch some dogs from our GraphQL server and display them in a list. useQuery leverages React's Hooks API to bind a query to our component and render it based on the results of our query. Once our data comes back, our `<DogList />` component will update reactively with the data it needs.

Apollo Client takes care of the request cycle from start to finish, including tracking loading and error states for you. There's no middleware to set up or boilerplate to write before making your first request, nor do you need to worry about transforming and caching the response. All you have to do is describe the data your component needs and let Apollo Client do the heavy lifting. 💪

You'll find that when you switch to Apollo Client, you'll be able to delete a lot of unnecessary code related to data management. The exact amount will vary depending on your application, but some teams have reported up to thousands of lines. While you'll find yourself writing less code with Apollo, that doesn't mean you have to compromise on features! Advanced features like optimistic UI, refetching, and pagination are all easily accessible through useQuery options.

## Tailwind CSS & Daisy UI <a name="TW"></a>

### Tailwind is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

Example:

```
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

You can extend Tailwinds configurations in the tailwind.config.js file, to give your own primary colors and extend the utilities beyond the `em` units available.

### Your HTML doesn't need to be messy. DaisyUI adds component classes to Tailwind CSS. Classes like btn, card, etc... No need to deal with hundreds of utility classes.

DaisyUI is based on Tailwind's utility classes and all components have low specificity so you can customize everything using utility classes.
You can even use @apply to add your custom styles to components or you can change colors and other design decisions using CSS variables.

Button wiht just Tailwind:

```
<a class="inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out
    bg-indigo-500 rounded-md
    cursor-pointer
    hover:bg-indigo-600">Button</a>
```

Button with DaisyUI:

```
<a class="btn btn-primary">Button</a>
```

DaisyUI adds a set of semantic color names to Tailwind. So instead of using generic color names like `bg-blue-500`, we can use semantic role names like `bg-primary` or `bg-success`.
All colors are CSS variables so you easily add dark mode by changing a few CSS variables. Try daisyUI default themes or [create your own theme](https://daisyui.com/docs/add-themes) in less than a minute!

## GSAP <a name="GSAP"></a>

### Professional-grade JavaScript animation for the modern web

JavaScript animation built for professionals, GSAP is packed with features that make most other engines look like cheap toys. Animate colors, beziers, css properties, Arrays, and lots more. Build jaw-dropping scroll-triggered effects. Round values, smoothly reverse() on the fly, use relative values, automatically accommodate getter/setter functions, employ virtually any easing equation, and manage conflicting tweens like a pro. Define callbacks, build sequences effortlessly (even with overlapping tweens), repeat/yoyo and so much more.

```
gsap.from(".box", {
  opacity: 0,
  y: 100,
  duration: 1
});
```

## Learn More <a name="learn"></a>

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel <a name="vercel"></a>

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# References <a name="ref"></a>

[Next.js Documentation](https://nextjs.org/docs)

[useDapp](https://usedapp.io/)

[Apollo Client](https://www.apollographql.com/docs/react/get-started/)

[TailwindCSS](https://tailwindcss.com/)

[DaisyUI](https://daisyui.com/)

[GSAP](https://greensock.com/docs/v3/GSAP)

[Vercel](https://vercel.com)
