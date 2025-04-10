import { Image, StyleSheet } from 'react-native';

type AvatarProps = {
    uri: string;
  };

export default function Avatar({ uri }: AvatarProps) {
  return (
    <Image source={{ uri }} style={styles.avatar} />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc'
  }
});
