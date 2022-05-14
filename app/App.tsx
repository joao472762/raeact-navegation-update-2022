import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <>
    <StatusBar
    backgroundColor='transparent'
    style='light'
    translucent
    />
      <Routes/>
    </>
  );
}
