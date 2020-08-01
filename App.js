import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./assets/styles.css"
import { Router } from './src/routes/dep'

import Layout from './src/components/layout/index'
import { Registry, RouteList } from './src/routes/registry';

export default function App() {
  return (
    <Router>
      <Layout>
        <RouteList></RouteList>
        <Registry></Registry>
      </Layout>
    </Router>
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
