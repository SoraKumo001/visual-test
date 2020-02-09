name: visual-test
on:
  push:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: cache node_modules
        uses: actions/cache@v1
        with:
          path: node_modules
          key: xbrowser-yarn-${{ hashFiles('**\yarn.lock') }}
          restore-keys: xbrowser-yarn-
      - name: Install Dependencies
        run: yarn
      - name: Build test
        run: |
          # yarn build
      - name: Screnn capture
        run: yarn sc:capture
      - name: Save capture
        uses: peaceiris/actions-gh-pages@v2.4.0
        env:
          PERSONAL_TOKEN: ${{ secrets.PERSONAL_TOKEN }}
          PUBLISH_BRANCH: captures/${{ github.ref }}
          PUBLISH_DIR: ./__screenshots__
