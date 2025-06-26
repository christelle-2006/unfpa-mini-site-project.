mkdir mon-mini-site
cd mon-mini-site
git init
touch README.md
touch index.html
git add .
git commit -m "Initial commit: Project setup and README"
git branch dev
git branch test/frontend
git checkout dev
git checkout -b feature/html-structure dev
touch service.html contact.html
git add .
git commit -m "feat: Add basic HTML structure for homepage, service, and contact pages"
git checkout test/frontend
git merge feature/html-structure --no-ff
git add index.html
git commit -m "Merge feature/html-structure into test/frontend, resolved conflict in index.html"
git checkout dev
git merge feature/html-structure --no-ff
git commit -m "Merge feature/html-structure into dev"
git branch -d feature/html-structure
git checkout -b feature/css-theme dev
touch style.css
git add .
git commit -m "feat: Implement CSS theme with fonts, colors, and responsiveness"
git checkout test/frontend
git merge feature/css-theme --no-ff
git commit -m "Merge feature/css-theme into test/frontend for styling test"
git checkout dev
git merge feature/css-theme --no-ff
git commit -m "Merge feature/css-theme into dev"
git branch -d feature/css-theme
git checkout -b feature/js-interactions dev
mkdir js
touch js/script.js
git add .
git commit -m "feat: Add dynamic interactions (carousel, burger menu, scroll effects)"
git checkout test/frontend
git merge feature/js-interactions --no-ff
git commit -m "Merge feature/js-interactions into test/frontend for interactivity test"
git add .
git commit -m "chore: Apply latest changes/fixes on test/frontend before merging to dev"
git checkout dev
git merge feature/js-interactions --no-ff
git commit -m "Merge feature/js-interactions into dev"
git branch -d feature/js-interactions
git checkout main
git merge dev --no-ff
git commit -m "Release: Final project validated and ready for deployment"
git remote add origin <URL_DU_DEPOT_GITHUB>
git remote -v
git push -u origin --all
