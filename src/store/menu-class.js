class Menu {
  constructor(name) {
    this._name = name;
    this._id = Math.floor(Math.random() * 1000000000);
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
}

class Fried extends Menu {
  constructor(
    name,
    small,
    large = 0,
    riceFries = 0,
    porkChicken = 0,
    beefShrimp = 0,
    count = 0
  ) {
    super(name);
    this._small = small;
    this._large = large;
    this._riceFries = riceFries;
    this._porkChicken = porkChicken;
    this._beefShrimp = beefShrimp;
    this._count = count;
  }

  get prices() {
    let base;

    if (this._large === 0) {
      base = {
        plain: this._small,
      };
    } else {
      base = {
        small: this._small,
        large: this._large,
      };
    }
    if (this._riceFries === 0) {
      return base;
    } else {
      return {
        ...base,
        riceFries: this._riceFries,
        porkChicken: this._porkChicken,
        beefShrimp: this._beefShrimp,
      };
    }
  }

  get count() {
    return this._count;
  }
}

class SmallLarge extends Menu {
  constructor(name, small = 0, large = 0, count = 0) {
    super(name);
    this._small = small;
    this._large = large;
    this._count = count;
  }

  get prices() {
    if (this._large === 0) {
      return { small: this._small };
    }
    return { small: this._small, large: this._large };
  }

  get count() {
    return this._count;
  }
}

class PintQuart extends Menu {
  constructor(name, large, small = 0) {
    super(name);
    this._large = large;
    this._small = small;
  }

  get prices() {
    if (this._small === 0) {
      return { large: this._large };
    }
    return { small: this._small, large: this._large };
  }
}

class Soda extends Menu {
  constructor(name, size) {
    super(name);
    this._size = size;
  }

  get prices() {
    switch (this._size) {
      case "can":
        return { price: 1.25 };
      case "20 oz":
        return { price: 2 };
      case "2L":
        return { price: 3 };
    }
  }
}

export { Fried, SmallLarge, PintQuart, Soda };
