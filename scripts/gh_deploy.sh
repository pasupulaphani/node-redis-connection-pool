#!/bin/sh
if [ -z "docs" ]
then
  echo "No docs folder found to deploy to ghpages"
  exit 1
fi
git subtree push --prefix docs origin gh-pages
