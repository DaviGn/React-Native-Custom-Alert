# React Native Custom Alert

This is a simple and the most pure React Native alert library. It works like a built in React Native component but it is highly customisable. The example project was built on top of Expo, but you can get the library source code on src folder and use it on your own.

# Basic usage

This was meant to be used globally on your app. You must wrap all your app on CustomAlertContext component.

```jsx
import React from "react";
import { View } from "react-native";
import CustomAlert, { CustomAlertContext, useCustomAlert } from './src/index';


export default function App() {
  return (
    <View style={{ flex: 1 }>
      <CustomAlertContext>
        ... all your stuff here

        <CustomAlert
          okConfirmButtonStyle={{
            backgroundColor: '#f45',
            textStyle: {
              color: '#fff',
            },
          }}
        />
      </CustomAlertContext>
    </View>
  );
}
```

After that all you need to do is to call showAlert or closeAlert methods from anywhere in your app.

# Show some alert

```jsx
import { View } from 'react-native';
import { useCustomAlert } from './src/index';

function Home() {
  const { closeAlert, showAlert } = useCustomAlert();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContext: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          showAlert({
            title: 'Your title here!',
            message: 'Your message here!',
            okConfirmButtonCallback: () => {},
            cancelButtonCallback: () => {
              closeAlert();
            },
          });
        }}
      >
        <Text>Press to show alert</Text>
      </TouchableOpacity>
    </View>
  );
}
```
