import * as Linking from 'expo-linking';

export const handlePressRedirect = async (href: string | undefined) => {
  const url: string = href || '';
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      return await Linking.openURL(url);
    } else {
      throw new Error('helpers/routing: link not supported');
    }
  } catch (error) {
    throw new Error('helpers/routing: internal error' + error);
  }
};
