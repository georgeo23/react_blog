# Anonymous Blog Powered by PostgreSQL

## Run Instructions

- Create Empty SQL Database with Postgres called blogs
- In PostgreSQL run \i *relative path*/seed.sql (from top level ./backend/db/seed.sql)
- Clone Repo, Run 'npm install'

- ### Windows
    - In ./backend/db/config.js use Lines 4-10 & Comment Out Lines 12-14.
    - Create .env file in top level and write 'password="*Your Postgres Password*"
    - Edit port and user if necessary
- ### Mac
    - In ./backend/db/config.js use Lines 12-14 & Comment Out Lines 1-10.
    - Run 'npm run server'
    - In another terminal run 'npm start'

### Collaborators
[@georgeo23](https://github.com/georgeo23), [@MugishaU](https://github.com/MugishaU)
