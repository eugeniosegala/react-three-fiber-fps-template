import {
  TextureLoader,
  NearestFilter,
  LinearMipMapLinearFilter,
  sRGBEncoding,
  EquirectangularReflectionMapping,
} from "three";
import GifLoader from "three-gif-loader";

import wallImg from "../images/wall.jpg";
import coinImg from "../images/coin.gif";
import barrelImg from "../images/barrel.png";
import orbImg from "../images/orb.gif";

// instantiate GifLoader
const gifLoader = new GifLoader();
const pngLoader = new TextureLoader();

function imgLoader(path, type) {
  let image;

  if (type === "gif") {
    image = gifLoader.load(path);
  } else {
    image = pngLoader.load(path);
  }

  // options
  image.mapping = EquirectangularReflectionMapping;
  image.encoding = sRGBEncoding;
  image.magFilter = NearestFilter;
  image.minFilter = LinearMipMapLinearFilter;

  return image;
}

const wall = imgLoader(wallImg);
const coin = imgLoader(coinImg, "gif");
const barrel = imgLoader(barrelImg);
const orb = imgLoader(orbImg, "gif");

export { wall, coin, barrel, orb };
