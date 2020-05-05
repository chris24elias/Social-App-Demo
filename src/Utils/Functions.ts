import Snackbar from 'react-native-snackbar';
import Colors from '../Constants/Colors';

interface ToastOptions {
  text: string;
  buttonText?: string;
  type?: 'danger' | 'success' | 'warning';
  onPress?: any;
}

export const displayToast = (options: ToastOptions) => {
  const {text, buttonText = 'Okay', type = '', onPress} = options;

  let bgColor = undefined;

  switch (type) {
    case 'danger':
      bgColor = Colors.dangerRed;
      break;
    case 'success':
      bgColor = Colors.successGreen;
      break;
    case 'warning':
      bgColor = Colors.warningYellow;
    default:
      break;
  }

  Snackbar.show({
    text: text,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: bgColor,
    action: {
      text: buttonText,
      onPress: () => {
        if (onPress) onPress();
      },
    },
  });
};

export const generateRandomPics = (length) => {
  return Array.from({length: length}, (v, i) => i).map(() => {
    let width = randomNumber(200, 300);
    let height = randomNumber(200, 300); // random number between 200 and 300
    return {uri: `https://picsum.photos/${width}/${height}`};
  });
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max + min);
};
