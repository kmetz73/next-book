```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to  setup  Auth use https://ui.shadcn.com/docs/components/form as a guide
1. create folder  in  App folder  to (auth)
2. add a new layout.tsx to  only work on the (auth ) folder
3.  2  more  folders  with  page.tsx  in the  Which  will be  Sign-in and  Sign-up
4.  add  dependencies from npx install shadcn@latest add button ,and then it is nxp shadcn@latest add form, and npx shadcn@latest add input   npm install @hookform/resolvers, npm install react-hook-form  npm i zod
5.  in the  lib folder  add a  validations.ts file
6.  in components folder create a AuthForm.tsx file
7. make  sure you  have a  constants folder with a  index.ts for the  FieldNames and Field Types
8  setup with auth js  go to https://authjs.dev/  and getting  started page and  installation
9  install dependencies npm install next-auth@beta bcryptjs (bcrypt is for encrypted passwords) and npm i --save-dev @types/bcryptjs All so run npx auth secret to  put a  secret key in  your .env.local
10 outside of the app  folder  add a auth.ts  file
11. if you  are using a database like Drizzle ORM Follow documentation for the correct setup.
12. in app/api/auth create a new folder named [...nextauth] and  file  outside of the app folder middleware.ts
13.  go to  the lib folder  create another folder called  auth and in there add a file  auth.ts
14. Add a  types folder  outside your app folder and create a  file type.d.ts


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```
