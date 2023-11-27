require("./bootstrap");

require("alpinejs");

import { MeiliSearch } from 'meilisearch'

window.MeiliSearch = MeiliSearch

import search from "./components/search";

window.components = {
    search,
};
