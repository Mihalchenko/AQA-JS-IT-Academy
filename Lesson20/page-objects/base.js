class Base {
  async navigate(url) {
    await browser.url(url);
  }

  get pageMainTitle() { // такой тайтл есть на всех страницах, поэтому выведен в base
    return $('main h1');
  }
}

export { Base };
