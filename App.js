import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>这里是应用的主页</Text>
      <Text>点击主页中心的按钮，将会跳转到内容编辑页面</Text>
      <Text>手势向上滑动，可以看到历史记录</Text>
      <Text>手势向下滑动，可以进行搜索</Text>
      <Text>如果说是移动端，将通过陀螺仪让中心的按钮进行追踪，如果是网页端，则追踪鼠标</Text>
      <StatusBar style="auto" />
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
