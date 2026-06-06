#!/bin/bash

touch README.md
touch .gitignore
echo "node_modules" > .gitignore
touch package.json
echo '{
    "name": "dragoncode",
    "version": "1.0.0",
    "workspaces": [
        "packages/*"
    ]
}' > package.json
mkdir -p packages
cd packages
bun create tui --template react
echo '
# dependencies (bun install)
node_modules

# output
out
dist
*.tgz

# code coverage
coverage
*.lcov

# logs
logs
*.log
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# caches
.eslintcache
.cache
*.tsbuildinfo

# IntelliJ based IDEs
.idea

# Finder (MacOS) folder config
.DS_Store
'
> .gitignore
cd ../
touch tsconfig.base.json
bun install
cd packages/cli
bun run dev