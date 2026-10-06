import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type LibraryData = {
  title: string;
  subtitle: string;
  owner: {
    name: string;
    group: string;
    favoriteGenre: string;
  };
  summary: {
    totalBooks: number;
    readBooks: number;
    plannedBooks: number;
  };
  description: string;
};

const library: LibraryData = {
  title: 'Book Library',
  subtitle: 'Моя личная библиотека',
  owner: {
    name: 'Аделканов Рауат',
    group: 'CS-302(С)',
    favoriteGenre: 'Научная фантастика',
  },
  summary: { totalBooks: 42, readBooks: 27, plannedBooks: 15 },
  description: 'Приложение для ведения личной библиотеки: учёт книг, прочитанного и планов на чтение.',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.heading}>
            <Text accessibilityRole="header" style={styles.title}>{library.title}</Text>
            <Text style={styles.subtitle}>{library.subtitle}</Text>
          </View>
          <Image
            source={require('./books.jpg')}
            style={styles.image}
            resizeMode="contain"
            accessibilityLabel="Книжная полка с книгами и открытой книгой"
          />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Владелец библиотеки</Text>
            <Text style={styles.row}>Имя: {library.owner.name}</Text>
            <Text style={styles.row}>Группа: {library.owner.group}</Text>
            <Text style={styles.row}>Любимый жанр: {library.owner.favoriteGenre}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Статистика</Text>
            <Text style={styles.row}>Всего книг: {library.summary.totalBooks}</Text>
            <Text style={styles.row}>Прочитано: {library.summary.readBooks}</Text>
            <Text style={styles.row}>В планах: {library.summary.plannedBooks}</Text>
          </View>
          <Text style={styles.description}>{library.description}</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fbf6ee' },
  content: { flexGrow: 1, padding: 20, paddingBottom: 36 },
  heading: { alignItems: 'center', marginBottom: 12 },
  title: { color: '#5b3a1e', fontSize: 30, fontWeight: '800', textAlign: 'center' },
  subtitle: { color: '#8a6a4a', fontSize: 16, fontStyle: 'italic', marginTop: 6 },
  image: { width: 220, height: 165, alignSelf: 'center', marginBottom: 20, borderRadius: 16 },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#3f6b4a',
  },
  cardTitle: { color: '#3f6b4a', fontSize: 20, fontWeight: '700', marginBottom: 10 },
  row: { color: '#3d2b1c', fontSize: 16, lineHeight: 26 },
  description: { color: '#6b5440', fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 8 },
});
