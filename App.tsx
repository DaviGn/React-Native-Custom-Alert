import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomAlert, { CustomAlertContext, useCustomAlert } from './src/index';

function Home() {
  const { closeAlert, showAlert } = useCustomAlert();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          showAlert({
            title: 'Título',
            message: 'Teste de alerta',
            okConfirmButtonCallback: () => {},
            cancelButtonCallback: () => {
              closeAlert();
            },
          });
        }}
      >
        <Text>Press to show alert</Text>
      </TouchableOpacity>
    </>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomAlertContext>
        <Home />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
