up:
	./scripts/increase-max-memory.sh && docker-compose up

install:
	yarn

build:
	make install
	npx lerna bootstrap
	npx lerna exec -- yarn build

analysis:
	npx lerna exec -- yarn lint

test:
	npx lerna exec -- yarn test

version:
	npx lerna version --conventional-commits -m "chore(release): publish" --yes

.PHONY: install build analysis test publish
