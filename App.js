import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './src/routes/dep'

import Layout from './src/design-system/layout'
import { Registry, RouteList } from './src/routes/registry';
import { UiContext, defaultUiData } from './src/common/context-layers/ui';

export default function App() {
  const [uiLayerData, setUiData] = useState(defaultUiData);
  const setLanguage = (language) => setUiData({ ...setUiData, ...{ language } })
  const uiContextValue = { uiLayerData, setLanguage };

  return (

    <Router>
      <UiContext.Provider value={uiContextValue}>
        <Layout
          navList={<RouteList></RouteList>}
          main={<Registry></Registry>}
        />
      </UiContext.Provider>
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
