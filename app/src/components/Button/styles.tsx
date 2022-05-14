import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
      width: 200,
      padding: 15,
      backgroundColor: theme.colors.purpleLight,
      borderRadius : 8,
      marginTop: 20,
      
      

  },
  title:{
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '600',
      color: "#fff"
    
  }
});