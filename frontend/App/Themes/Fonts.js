import { Platform } from 'react-native';

const type = {
  body: 'AvenirNext-Regular',
  header: Platform.OS === 'ios' ? 'F37Ginger' : 'f37ginger-regular-webfont',
  link: 'AvenirNext-Medium'
}

const size = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 18,
  h5: 16,
  h6: 14,
  regular: 16,
  caption: 12,
}

const style = {
  buttonLarge: {
    fontFamily: type.header,
    fontSize: 20
  },
  h1: {
    fontFamily: type.header,
    fontSize: size.h1
  },
  sh1: {
    fontFamily: type.body,
    fontSize: size.h2
  },
  h2: {
    fontFamily: type.header,
    fontSize: size.h2
  },
  sh2: {
    fontFamily: type.body,
    fontSize: size.h3
  },
  h3: {
    fontFamily: type.header,
    fontSize: size.h3
  },
  sh3: {
    fontFamily: type.body,
    fontSize: size.h5
  },
  h4: {
    fontFamily: type.header,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.header,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.header,
    fontSize: size.h6
  },
  body: {
    fontFamily: type.body,
    fontSize: size.regular
  },
  link: {
    fontFamily: type.link,
    fontSize: size.regular
  },
  captions: {
    fontFamily: type.body,
    fontSize: size.caption,
  }
}

export default {
  type,
  size,
  style
}
